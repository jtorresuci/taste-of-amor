import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import theme from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
