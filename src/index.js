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
    </Provider>
  </React.StrictMode>
);
