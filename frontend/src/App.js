import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "next-themes";

import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="App">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
          <Toaster />
          <ChatBot />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;