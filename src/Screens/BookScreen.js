import { Box } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import BookingForm from "../components/BookScreen/BookingForm";

function BookScreen() {
  return (
    <div>
      <Box >
        <BookingForm />
      </Box>
    </div>
  );
}

export default BookScreen;
