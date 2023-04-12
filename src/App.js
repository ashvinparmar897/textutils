import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnSwitch,setBtnSwitch]=useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setBtnSwitch("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    } else {
      setMode("dark");
      setBtnSwitch("Enable Light Mode");
      document.body.style.backgroundColor = "#052165";
      showAlert("Dark Mode has been Enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          tittle="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          btnSwitch={btnSwitch}
        />
        <Alert alert={alert} />
        <div className="my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Textutils-Word Counter, Character Counter,Remove Extra Spaces "
                  mode={mode}
                />
              }
            />

            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
