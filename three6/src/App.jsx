import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //needed for the routes of our pages;
// import the pages
import Input from "./pages/Input";
import Output from "./pages/Output";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Create a connection with the page input and MAKING IT THE DEFAULT PAGE*/}
          <Route index element={<Input />} />
          {/* Create a connection with the page input so it can be accessible also through searchbar*/}
          <Route path="/input" element={<Input />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
