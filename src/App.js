import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavbarFooter/Navbar";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import SuccessMessage from "./components/SuccessMessage";
import SignatureFooter from "./components/NavbarFooter/SignatureFooter";
import HomeScreen from "./Screens/HomeScreen";
import PaymentError from "./components/PaymentError";
import Footer from "./components/NavbarFooter/Footer";
import AboutScreen from "./Screens/AboutScreen";
import BookScreen from "./Screens/BookScreen";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ThankYou from "./components/ThankYou";
import AdminScreen from "./Screens/AdminScreen";
import FaqCopy from "./components/FAQScreen/FaqCopy";
import Contact from "./components/ContactScreen/Contact";

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
            <Route exact path="/admin*" element={<AdminScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/about" element={<AboutScreen />} />
            <Route exact path="/book" element={<BookScreen />} />
            <Route exact path="/faq" element={<FaqCopy />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>

          <Footer logo="tasteofamor.png" />
          <SignatureFooter />
        </LocalizationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
