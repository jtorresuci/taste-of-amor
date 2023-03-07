import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import theme from "./theme";
import CateringSchedule from "./components/CateringSchedule";
import { CssBaseline } from '@mui/material';

import SuccessMessage from "./components/SuccessMessage";
import ComingSoon from "./components/ComingSoon";
import SignatureFooter from "./components/SignatureFooter";
import Loader from "./components/Loader";
import Codepen from "./components/Codepen";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Navbar logo={'./tasteofamor.png'} />
        <ComingSoon/>
        <div className="loader-container">
          <Loader />
        </div>      <Routes>
          <Route path="/success.html*" element={<SuccessMessage />} />
          <Route exact path="/schedule" element={<CateringSchedule />} />
        </Routes>
        <SignatureFooter/>
      </ThemeProvider>

    </Router>
  );
}

export default App;
