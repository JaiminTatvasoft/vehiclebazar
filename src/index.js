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
import MyOrders from "./pages/MyOrders";
import OrderDetail from "./pages/OrderDetail";

const appRouter = createBrowserRouter(
  [
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
        {
          path: "/orders",
          element: <MyOrders />,
        },
        {
          path: "/orderdetail",
          element: <OrderDetail />,
        },
      ],
    },
  ],
  {
    // Enable all the v7 future flags
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider
        future={{ v7_startTransition: true }}
        router={appRouter}
      />
    </PersistGate>
    <SnackbarNotification />
  </Provider>
  // </React.StrictMode>
);
