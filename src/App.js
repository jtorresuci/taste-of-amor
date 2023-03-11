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
import Footer from "./components/Footer";
import AboutScreen from "./Screens/AboutScreen";
import OrderScreen from "./Screens/OrderScreen";
import BookScreen from "./Screens/BookScreen";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ThankYou from "./components/ThankYou";
import AdminScreen from "./Screens/AdminScreen";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>

        <Navbar logo={"./tasteofamor.png"} />

        <Routes>
          <Route path="/success.html*" element={<SuccessMessage />} />
          <Route path="/cancel.html*" element={<PaymentError />} />
          <Route path="/thank-you*" element={<ThankYou />} />
          <Route exact path="/schedule" element={<OrderScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/about" element={<AboutScreen />} />
          <Route exact path="/book" element={<BookScreen />} />
          <Route exact path="/admin" element={<AdminScreen />} />
        </Routes>

        <Footer logo="tasteofamor.png" />
        <SignatureFooter />
        </LocalizationProvider>

      </ThemeProvider>
    </Router>
  );
}

export default App;
