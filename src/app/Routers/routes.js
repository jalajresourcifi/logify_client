import UnAuthRoutes from "./UnAuthRoutes";
//   COMMON IMPORTS
import Login from "containers/Common/Auth/Auth";
import CreatePassword from "containers/Common/Auth/CreatePassword";
import ThankYou from "components/Common/ThankYou/thankYou";

import Notifications from "containers/Resources/Notification/Notifications";
//   RESOURCE IMPORTS
import Dashboard from "containers/Resources/Dashboard/Dashboard";
import ProfileOverview from "containers/Resources/Profile/ProfileOverview";
import ChangePassword from "containers/Resources/Profile/ChangePassword";
import ProjectList from "containers/Resources/Project/ProjectList";
import WorkLogs from "containers/Resources/WorkLogs/WorkLogs";
import ProjectView from "containers/Resources/Project/ProjectView";
import Rating from "containers/Resources/Rating/Rating";
//   PROJECT MANAGER IMPORTS
import PMNotifications from "containers/Manager/Notification/Notifications";
import PMDashboard from "containers/Manager/Dashboard/Dashboard";
import PMProfileOverview from "containers/Manager/Profile/ProfileOverview";
import PMChangePassword from "containers/Manager/Profile/ChangePassword";
import PMProjectList from "containers/Manager/Project/ProjectList";
import PMAllResources from "containers/Manager/Resource/AllResources";
import PMAllClients from "containers/Manager/Client/AllClients";
import PMProjectView from "containers/Manager/Project/ProjectView";
import PMResourceView from "containers/Manager/Resource/ResourceView";
import PMAddNewClient from "containers/Manager/Client/AddNewClient";
import PMAddNewResource from "containers/Manager/Resource/AddNewResource";
import PMAddNewProject from "containers/Manager/Project/AddNewProject";
import PMWorkLogs from "containers/Manager/WorkLogs/WorkLogs";
//   COMPANY ADMIN IMPORTS
import CANotifications from "containers/CompanyAdmin/Notification/Notifications";
import CADashboard from "containers/CompanyAdmin/Dashboard/Dashboard";
import CAProfileOverview from "containers/CompanyAdmin/Profile/ProfileOverview";
import CAChangePassword from "containers/CompanyAdmin/Profile/ChangePassword";
import CAProjectList from "containers/CompanyAdmin/Project/ProjectList";
import CAAllResources from "containers/CompanyAdmin/Resource/AllResources";
import CAAllClients from "containers/CompanyAdmin/Client/AllClients";
import CAProjectView from "containers/CompanyAdmin/Project/ProjectView";
import CAResourceView from "containers/CompanyAdmin/Resource/ResourceView";
import CAAddNewClient from "containers/CompanyAdmin/Client/AddNewClient";
import CAAddNewResource from "containers/CompanyAdmin/Resource/AddNewResource";
import CAAddNewProject from "containers/CompanyAdmin/Project/AddNewProject";
import CAWorkLogs from "containers/CompanyAdmin/WorkLogs/WorkLogs";
import {
  LOGIN,
  CREATEPASSWORD,
  THANKYOU,
  RESOURCES_NOTIFICATION,
  RESOURCES_DASHBOARD,
  RESOURCES_PROFILEOVERVIEW,
  RESOURCES_CHANGEPASSWORD,
  RESOURCES_PROJECTLIST,
  RESOURCES_PROJECTVIEW,
  RESOURCES_WORKLOGS,
  RESOURCES_RATINGS,
  MANAGER_NOTIFICATION,
  MANAGER_DASHBOARD,
  MANAGER_PROFILEOVERVIEW,
  MANAGER_CHANGEPASSWORD,
  MANAGER_PROJECTLIST,
  MANAGER_ALLRESOURCES,
  MANAGER_ALLCLIENTS,
  MANAGER_PROJECTVIEW,
  MANAGER_RESOURCEVIEW,
  MANAGER_ADDNEWCLIENT,
  MANAGER_ADDNEWRESOURCE,
  MANAGER_ADDNEWPROJECT,
  MANAGER_WORKLOGS,
  COMPANYADMIN_NOTIFICATION,
  COMPANYADMIN_DASHBOARD,
  COMPANYADMIN_PROFILEOVERVIEW,
  COMPANYADMIN_CHANGEPASSWORD,
  COMPANYADMIN_ALLRESOURCES,
  COMPANYADMIN_PROJECTLIST,
  COMPANYADMIN_ALLCLIENTS,
  COMPANYADMIN_PROJECTVIEW,
  COMPANYADMIN_RESOURCEVIEW,
  COMPANYADMIN_ADDNEWCLIENT,
  COMPANYADMIN_ADDNEWRESOURCE,
  COMPANYADMIN_ADDNEWPROJECT,
  COMPANYADMIN_WORKLOGS,
  PROJECT_MANAGER,
  ADMIN,
  SUPER_ADMIN,
  CLIENT,
  RESOURCE
} from "inc/constants";
import AuthRoutes from "./AuthRoutes";

const routes = [
  {
    exact: true,
    path: LOGIN,
    component: Login,
    layout: UnAuthRoutes
  },
  {
    exact: true,
    path: CREATEPASSWORD,
    component: CreatePassword,
    layout: UnAuthRoutes
  },
  {
    exact: true,
    path: THANKYOU,
    component: ThankYou,
    layout: UnAuthRoutes
  },
  {
    exact: true,
    path: RESOURCES_NOTIFICATION,
    component: Notifications,
    layout: AuthRoutes,
    user: RESOURCE
  },
  {
    exact: true,
    path: RESOURCES_DASHBOARD,
    component: Dashboard,
    layout: AuthRoutes,
    user: RESOURCE
  },
  {
    exact: true,
    path: RESOURCES_PROFILEOVERVIEW,
    component: ProfileOverview,
    layout: AuthRoutes,
    user: RESOURCE
  },
  {
    exact: true,
    path: RESOURCES_CHANGEPASSWORD,
    component: ChangePassword,
    layout: AuthRoutes,
    user: RESOURCE
  },
  {
    exact: true,
    path: RESOURCES_PROJECTLIST,
    component: ProjectList,
    layout: AuthRoutes,
    user: RESOURCE
  },
  {
    exact: true,
    path: RESOURCES_PROJECTVIEW,
    component: ProjectView,
    layout: AuthRoutes,
    user: RESOURCE
  },
  {
    exact: true,
    path: RESOURCES_WORKLOGS,
    component: WorkLogs,
    layout: AuthRoutes,
    user: RESOURCE
  },
  {
    exact: true,
    path: RESOURCES_RATINGS,
    component: Rating,
    layout: AuthRoutes,
    user: RESOURCE
  },
  {
    exact: true,
    path: MANAGER_NOTIFICATION,
    component: PMNotifications,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_DASHBOARD,
    component: PMDashboard,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_PROFILEOVERVIEW,
    component: PMProfileOverview,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_CHANGEPASSWORD,
    component: PMChangePassword,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_PROJECTLIST,
    component: PMProjectList,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_ALLRESOURCES,
    component: PMAllResources,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_ALLCLIENTS,
    component: PMAllClients,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_ADDNEWPROJECT,
    component: PMAddNewProject,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_PROJECTVIEW,
    component: PMProjectView,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_ADDNEWRESOURCE,
    component: PMAddNewResource,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_RESOURCEVIEW,
    component: PMResourceView,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: MANAGER_ADDNEWCLIENT,
    component: PMAddNewClient,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },

  {
    exact: true,
    path: MANAGER_WORKLOGS,
    component: PMWorkLogs,
    layout: AuthRoutes,
    user: PROJECT_MANAGER
  },
  {
    exact: true,
    path: COMPANYADMIN_NOTIFICATION,
    component: CANotifications,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_DASHBOARD,
    component: CADashboard,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_PROFILEOVERVIEW,
    component: CAProfileOverview,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_CHANGEPASSWORD,
    component: CAChangePassword,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_ALLRESOURCES,
    component: CAAllResources,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_PROJECTLIST,
    component: CAProjectList,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_ALLCLIENTS,
    component: CAAllClients,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_ADDNEWCLIENT,
    component: CAAddNewClient,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_ADDNEWRESOURCE,
    component: CAAddNewResource,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_PROJECTVIEW,
    component: CAProjectView,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_RESOURCEVIEW,
    component: CAResourceView,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_ADDNEWPROJECT,
    component: CAAddNewProject,
    layout: AuthRoutes,
    user: ADMIN
  },
  {
    exact: true,
    path: COMPANYADMIN_WORKLOGS,
    component: CAWorkLogs,
    layout: AuthRoutes,
    user: ADMIN
  }
];
export default routes;
