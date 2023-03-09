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
} from "@mui/material";

import { loadStripe } from "@stripe/stripe-js";

import {
  DatePicker,
  DateTimePicker,
  MobileDatePicker,
  MobileDateTimePicker,
  MobileTimePicker,
  StaticDatePicker,
  StaticTimePicker,
  TimePicker,
} from "@mui/x-date-pickers/";

import dayjs from "dayjs";
import axios from "axios";
import "./DateTimeComponent.css";
import FormControlContext from "@mui/material/FormControl/FormControlContext";

function DateTimeComponent() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: "",
    message: "",
    option: "option1",
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
    }
    console.log(selectedDate);
  };
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const renderDay = (day, selectedDate, dayInCurrentMonth, dayComponent) => {
    if (!isAvailableDay(day)) {
      return React.cloneElement(dayComponent, {
        style: { backgroundColor: "pink" },
      });
    }

    return dayComponent;
  };

  const { name, email, phone, dateTime, message, option } = formState;

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      name,
      email,
      phone,
      message,
      date: selectedDate.format("YYYY-MM-DD"),
      time: selectedTime.format("HH:mm:ss"),
      option,
    };
  
    try {
      const response = await axios.post(
        "http://localhost:8000/schedule-event",
        formData
      );
      console.log(response.data);
      setTimeout(() => {
        window.location.href = `/thank-you?name=${name}&email=${email}&phone=${phone}&message=${message}&date=${selectedDate.format("YYYY-MM-DD")}&time=${selectedTime.format("HH:mm:ss")}&option=${option}`;
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{ fontSize: "24px", fontWeight: "bold", mb: 3, paddingTop: "1rem" }}
      >
        Schedule an Event
      </Box>
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
        <MobileTimePicker sx={{ mb: 2, width: "100%" }} onChange={handleTimeChange} />
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
          sx={{ mb: 2, width: "100%" }}
          required
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          sx={{ mb: 2, width: "100%" }}
          required
        />
        <TextField
          label="Phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          sx={{ mb: 2, width: "100%" }}
          required
        />
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
            name="options"
            sx={{
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
            }}
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
        >
          Schedule Event
        </Button>
      </Box>
    </Box>
  );
}

export default DateTimeComponent;
