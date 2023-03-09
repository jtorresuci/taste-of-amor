import React from 'react'

function CustomButton() {
  return (
    <div>
         <Box sx={{ textAlign: "center" }}>
        <Button sx={{ p: 2, margin: 5 }} variant="contained" color="primary" size="large">
          Book Now
        </Button>
      </Box>
    </div>
  )
}

export default CustomButton
