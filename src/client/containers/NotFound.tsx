import React from "react";

import { RouteWithStatus } from "../containers/shared";

const NotFound: React.SFC<{}> = () => (
  <RouteWithStatus code={404}>
    <p>This is not the web page you are looking for.</p>
  </RouteWithStatus>
);

export default NotFound;
