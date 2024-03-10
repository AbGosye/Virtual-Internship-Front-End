import React from "react";

import { Outlet } from "react-router-dom";

import UvCoordinatorSidenav from "./UvCoordinatorSidenav";

export default function UvCoordinatorMain() {
  return (
    <div>
      <UvCoordinatorSidenav />

      <Outlet />
    </div>
  );
}
