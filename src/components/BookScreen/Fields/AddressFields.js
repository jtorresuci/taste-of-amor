import { Autocomplete, Box, TextField } from "@mui/material";
import AWS from "aws-sdk";
import React, { useState } from "react";

const location = new AWS.Location({
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  },
  region: "us-west-2",
});

async function fetchSuggestions(query) {
  if (!query.trim()) {
    return [];
  }
  try {
    const response = await location
      .searchPlaceIndexForSuggestions({
        IndexName: "taste",
        Text: query,
        MaxResults: 5,
      })
      .promise();

    return response.Results.map((result) => result.Text);
  } catch (err) {
    console.error(err);
    return [];
  }
}

function AddressFields(props) {
  const [suggestions, setSuggestions] = useState([]);

  const handleSelectAddress = (_, address) => {
    props.handleChange({ target: { name: "address", value: address } });
  };

  const handleInputChange = async (event, value) => {
    if (value.length >= 3) {
      const suggestions = await fetchSuggestions(value);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };

  const isAddressValid = suggestions.includes(props.address);

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      {" "}
      <Autocomplete
        options={suggestions}
        onInputChange={handleInputChange}
        onChange={handleSelectAddress}
        value={isAddressValid ? props.address : ""}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Address"
            name="address"
            value={props.address}
            onChange={props.handleChange}
            sx={{ mb: 2, width: "100%" }}
            required
          />
        )}
      />
    </Box>
  );
}

export default AddressFields;
