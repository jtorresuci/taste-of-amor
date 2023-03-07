import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import theme from "./theme";
import CateringSchedule from "./components/CateringSchedule";
import { CssBaseline } from "@mui/material";

import SuccessMessage from "./components/SuccessMessage";
import ComingSoon from "./components/ComingSoon";
import SignatureFooter from "./components/SignatureFooter";
import Loader from "./components/Loader";
import Codepen from "./components/Codepen";
import "./App.css";
import About from "./components/About";
import HomeScreen from "./Screens/HomeScreen";
import PaymentError from "./components/PaymentError";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar logo={"./tasteofamor.png"} />
        
        <Routes>
        <Route path="/success.html*" element={<SuccessMessage />} />
        <Route path="/cancel.html*" element={<PaymentError />} />
          <Route exact path="/schedule" element={<CateringSchedule />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <SignatureFooter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
