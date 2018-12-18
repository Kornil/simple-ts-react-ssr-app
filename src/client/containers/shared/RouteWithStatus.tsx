import React from "react";
import { Route } from "react-router-dom";

// This is tested inside Routes.test.tsx
// And also server app.test.ts

interface RouteWithStatusProps {
  code: number;
  children: React.ReactNode;
}

const RouteWithStatus = ({ code, children }: RouteWithStatusProps) => (
  <Route
    // tslint:disable-next-line
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = code;
      }
      return children;
    }}
  />
);

export default RouteWithStatus;
