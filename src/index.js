import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RentCar from "./pages/RentCar";
import BookCar from "./component/BookCar";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import Checkout from "./pages/Checkout";
import Return from "./pages/Return";
import SnackbarNotification from "./component/SnackbarNotification";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/rentcar",
        element: <RentCar />,
      },
      {
        path: "/bookcar",
        element: <BookCar />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/return",
        element: <Return />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={appRouter} />
      </PersistGate>
      <SnackbarNotification />
    </Provider>
  </React.StrictMode>
);
