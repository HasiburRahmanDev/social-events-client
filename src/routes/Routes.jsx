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
        loader: () => fetch("http://localhost:3000/events"),
      },
      {
        path: "/event-details/:id",
        Component: EventDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
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
    ],
  },
]);
