import React from "react";
import {
  SUPER_ADMIN,
  ADMIN,
  PROJECT_MANAGER,
  CLIENT,
  RESOURCE,
  RESOURCES_DASHBOARD,
  MANAGER_DASHBOARD,
  COMPANYADMIN_DASHBOARD
} from "inc/constants";
import { Redirect } from "react-router-dom";
export function checkRole(role) {
  console.log("This is the role", role);
  switch (role) {
    case SUPER_ADMIN:
      return (
        <>
          <Redirect to={RESOURCES_DASHBOARD} />
        </>
      );
    case ADMIN:
      return <Redirect to={COMPANYADMIN_DASHBOARD} />;
    case PROJECT_MANAGER:
      return <Redirect to={MANAGER_DASHBOARD} />;
    case CLIENT:
      return <Redirect to={RESOURCES_DASHBOARD} />;
    case RESOURCE:
      return <Redirect to={RESOURCES_DASHBOARD} />;
    default:
      return null;
  }
}
export const RoleAuth = (userRole, authRole) => {
  if (userRole === authRole) {
    return true;
  }
  return false;
};
