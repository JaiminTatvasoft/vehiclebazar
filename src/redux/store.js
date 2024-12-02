import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./vehicleSlice";
import componentReducer from "./componentSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const vehiclePersistConfig = {
  key: "vehicles",
  storage,
};

// Persist configuration for components
const componentPersistConfig = {
  key: "components",
  storage,
};
const persistedVehicleReducer = persistReducer(
  vehiclePersistConfig,
  vehicleReducer
);
const persistedComponentReducer = persistReducer(
  componentPersistConfig,
  componentReducer
);

const store = configureStore({
  reducer: {
    vehicles: persistedVehicleReducer,
    components: persistedComponentReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
