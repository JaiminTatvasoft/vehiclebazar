import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./vehicleSlice";
import componentReducer from "./componentSlice";
import userReducer from "./userSlice";
import searchReducer from "./SearchSlice";
import snackbarReducer from "./snackbarSlice";
import comparisionReducer from "./comparisionSlice";
import bookingReducer from "./bookingSlice";
import checkoutReducer from "./checkoutSlice";
import ordersReducer from "./ordersSlice";
import citiesReducer from "./citiesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const userPersistConfig = {
  key: "users",
  storage,
};

const vehiclePersistConfig = {
  key: "vehicles",
  storage,
};

const searchPersistConfig = {
  key: "search",
  storage,
};

const componentPersistConfig = {
  key: "components",
  storage,
};

const snackbarPersistConfig = {
  key: "snackbar",
  storage,
};

const comparisionPersistConfig = {
  key: "comparision",
  storage,
};

const bookingPersistConfig = {
  key: "booking",
  storage,
};

const checkoutPersistConfig = {
  key: "checkout",
  storage,
};

const ordersPersistConfig = {
  key: "orders",
  storage,
};

const citiesPersistConfig = {
  key: "cities",
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedSearchReducer = persistReducer(
  searchPersistConfig,
  searchReducer
);

const persistedVehicleReducer = persistReducer(
  vehiclePersistConfig,
  vehicleReducer
);
const persistedComponentReducer = persistReducer(
  componentPersistConfig,
  componentReducer
);

const persistedSnackbarReducer = persistReducer(
  snackbarPersistConfig,
  snackbarReducer
);

const persistedComparisionReducer = persistReducer(
  comparisionPersistConfig,
  comparisionReducer
);

const persistedBookingReducer = persistReducer(
  bookingPersistConfig,
  bookingReducer
);

const persistedCheckoutReducer = persistReducer(
  checkoutPersistConfig,
  checkoutReducer
);

const persistedOrdersReducer = persistReducer(
  ordersPersistConfig,
  ordersReducer
);

const persistedCitiesReducer = persistReducer(
  citiesPersistConfig,
  citiesReducer
);

const store = configureStore({
  reducer: {
    users: persistedUserReducer,
    vehicles: persistedVehicleReducer,
    components: persistedComponentReducer,
    search: persistedSearchReducer,
    snack: persistedSnackbarReducer,
    comparisions: persistedComparisionReducer,
    booking: persistedBookingReducer,
    checkout: persistedCheckoutReducer,
    orders: persistedOrdersReducer,
    cities: persistedCitiesReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
