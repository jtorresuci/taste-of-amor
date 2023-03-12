import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function FaqCopy() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "2rem",
        borderRadius: "2rem",
        backgroundColor: "#fce6f2",
        mx: { xs: "2rem", md: "6rem" }, // adjust the horizontal margin for different screen sizes
        my: { xs: "3rem", md: "8rem" }, // adjust the horizontal margin for different screen sizes
      }}
    >
      <div>
        <h2>Frequently Asked Questions</h2>
        <Divider variant="middle" sx={{ width: "100%", my: "0.5rem" }} />

        <h3>
          How far in advance should I book a crepe catering service for my
          event?
        </h3>
        <p>
          We recommend booking at least 2-4 weeks in advance to ensure
          availability. However, we also accept last-minute bookings subject to
          availability.
        </p>
        <h3>How many crepes can you serve at an event?</h3>
        <p>
          Our team can serve up to 200-300 crepes per hour, depending on the
          size of the event and the menu selection.
        </p>
        <h3>
          Do you provide all the necessary equipment and utensils for the crepe
          station?
        </h3>
        <p>
          Yes, we provide all the necessary equipment and utensils, including
          crepe makers, plates, cutlery, and serving trays.
        </p>
        <h3>Do you offer vegan, gluten-free, or dairy-free options?</h3>
        <p>
          Yes, we can customize our menu to accommodate dietary restrictions and
          preferences. Please let us know in advance so we can prepare
          accordingly.
        </p>
        <h3>Can I request specific toppings or fillings for my crepes?</h3>
        <p>
          Absolutely! We offer a variety of sweet and savory toppings and
          fillings to choose from, and we can also create custom options based
          on your preferences.
        </p>
        <h3>What is the minimum number of crepes I can order for my event?</h3>
        <p>
          We don't have a minimum order requirement, so you can order as many or
          as few crepes as you need for your event. However, please note that
          there may be additional fees for small orders or events with fewer
          than 50 guests.
        </p>
      </div>
    </Box>
  );
}

export default FaqCopy;
