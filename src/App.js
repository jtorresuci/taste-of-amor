import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import theme from "./theme";
import CateringSchedule from "./components/CateringSchedule";

import SuccessMessage from "./components/SuccessMessage";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <CateringSchedule /> */}
        <Routes>
          <Route path="/success.html*" element={<SuccessMessage />} />
          <Route exact path="/" element={<CateringSchedule />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
