import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayOut from "../layout/MainLayOut";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Profile from "../pages/Profile";
import About from "../pages/About";
import CreateEvents from "../ServerEvents.jsx/CreateEvents";
import UpcomingEvents from "../components/UpcomingEvents";
import EventDetails from "../pages/EventDetails";
import ManageEvents from "../pages/ManageEvents";
import JoinedEvent from "../pages/JoinedEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/upcoming-events",
        Component: UpcomingEvents,
        loader: () =>
          fetch("https://social-event-server-zeta.vercel.app/events"),
      },
      {
        path: "/event-details/:id",
        Component: EventDetails,
        loader: ({ params }) =>
          fetch(
            `https://social-event-server-zeta.vercel.app/events/${params.id}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events",
        element: (
          <PrivateRoute>
            <ManageEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events/:id",
        element: (
          <PrivateRoute>
            <ManageEvents />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://social-event-server-zeta.vercel.app/events/${params.id}`
          ),
      },
      {
        path: "/joined-events",
        element: (
          <PrivateRoute>
            <JoinedEvent />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
