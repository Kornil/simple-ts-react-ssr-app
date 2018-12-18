import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  unmountComponentAtNode(div);
});
