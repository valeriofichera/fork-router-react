import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Main from "./Main";
// import Team from './Team'

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="about"
            element={<Main title="This is the 'About' page" />}
          />
          <Route
            path="team"
            element={<Main title="This is the 'Team' page" />}
          />
          {/*
          <Route
            path="team"
            element={<Team />}
          />
          */}
          {/* 
            <Route
            path="recipes/:id"
            element={<Recipe />}
            />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
