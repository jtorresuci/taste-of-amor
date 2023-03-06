import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import theme from "./theme";
import CateringSchedule from "./components/CateringSchedule";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <CateringSchedule/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
