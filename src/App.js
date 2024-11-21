import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="app">
      {/* <div className="text-darkestGreen p-6">
        <h1 className="font-poppins text-5xl">
          VEHICLE_BAZAR_MANAGEMENT_SYSTEM
        </h1>
        <p className="font-poppins text-3xl text-darkGreen">
          VEHICLE_BAZAR_MANAGEMENT_SYSTEM
        </p>
        <p className="font-arial text-xl text-mediumGreen">
          VEHICLE_BAZAR_MANAGEMENT_SYSTEM
        </p>
        <p className="font-arial text-xl text-lightGreen">
          VEHICLE_BAZAR_MANAGEMENT_SYSTEM
        </p>
      </div> */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
