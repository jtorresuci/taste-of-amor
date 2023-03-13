import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  useMediaQuery,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Container,
  Typography,
} from "@mui/material";

// import { loadStripe } from "@stripe/stripe-js";

import { DatePicker, MobileTimePicker } from "@mui/x-date-pickers/";

import dayjs from "dayjs";
import axios from "axios";
import "./BookingForm.css";
import PhoneField from "./Fields/PhoneField";
import EmailField from "./Fields/EmailField";
import AddressFields from "./Fields/AddressFields";

function BookingForm() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    option: "option1",
    address: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/check-availability"
        );
        setEvents(response.data.events);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const isAvailableDay = (day) => {
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const eventStart = event.start.date || event.start.dateTime;
      if (dayjs(eventStart).isSame(day, "day")) {
        return false;
      }
    }
    return true;
  };

  const handleDateChange = (date) => {
    if (!isAvailableDay(date)) {
      alert("This date is unavailable.");
    } else {
      setSelectedDate(date);
      setFormState({
        ...formState,
        date: date.format("YYYY-MM-DD"),
      });
    }
  };
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setFormState({
      ...formState,
      time: time.format("HH:mm:ss"),
    });
  };

  const {
    name,
    email,
    phone,
    date,
    time,
    message,
    option,
    address,
    city,
    state,
  } = formState;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // set isSubmitting to true to disable the button

    const formData = {
      name,
      email,
      phone,
      message,
      date: selectedDate.format("YYYY-MM-DD"),
      time: selectedTime.format("HH:mm:ss"),
      option,
      address,
      city,
      state,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/schedule-event",
        formData
      );

      setTimeout(() => {
        window.location.href = `/thank-you?name=${name}&email=${email}&phone=${phone}&message=${message}&date=${selectedDate.format(
          "YYYY-MM-DD"
        )}&time=${selectedTime.format("HH:mm:ss")}&option=${option}`;
      }, 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false); // set isSubmitting back to false after the request is finished
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "2rem",
        borderRadius: "2rem",
        //   backgroundColor: "#fce6f2",
        mx: { xs: "2rem", md: "6rem" }, // adjust the horizontal margin for different screen sizes
        my: { xs: "1rem", md: "1rem" }, // adjust the horizontal margin for different screen sizes
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Schedule an Event
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          We look forward to serving you and your guests!
        </Typography>
      </Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <DatePicker onChange={handleDateChange} sx={{ mb: 2, width: "100%" }} />
        <MobileTimePicker
          sx={{ mb: 2, width: "100%" }}
          onChange={handleTimeChange}
        />
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
          sx={{ mb: 2, width: "100%" }}
          required
        />
        <EmailField email={email} handleChange={handleChange} />
        <PhoneField phone={phone} handleChange={handleChange} />
        <AddressFields address={address} city={city} state={state} handleChange={handleChange} />
        <TextField
          label="Message"
          name="message"
          value={message}
          onChange={handleChange}
          multiline
          rows={5}
          sx={{ mb: 2, width: "100%" }}
          required
        />
        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <FormLabel component="legend">Options</FormLabel>
          <RadioGroup
            aria-label="options"
            name="option" // update name to "option"
            sx={{
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
            }}
            value={option} // add value prop to set the selected option
            onChange={handleChange}
          >
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label="Option 2"
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label="Option 3"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          sx={{ width: "100%" }}
          disabled={isSubmitting} // disable the button when isSubmitting is true
        >
          {isSubmitting ? "Submitting..." : "Schedule Event"}
        </Button>
      </Box>
    </Box>
  );
}

export default BookingForm;
