import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./vehicleSlice";
import componentReducer from "./componentSlice";
import userReducer from "./userSlice";
import searchReducer from "./SearchSlice";
import snackbarReducer from "./snackbarSlice";
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

const store = configureStore({
  reducer: {
    users: persistedUserReducer,
    vehicles: persistedVehicleReducer,
    components: persistedComponentReducer,
    search: persistedSearchReducer,
    snack: persistedSnackbarReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
