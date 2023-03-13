import { Box } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import DateTimeComponent from "../components/BookScreen/DateTimeComponent";

function BookScreen() {
  return (
    <div>
      <Box >
        <DateTimeComponent />
        {/* <ContactForm /> */}
      </Box>
    </div>
  );
}

export default BookScreen;
