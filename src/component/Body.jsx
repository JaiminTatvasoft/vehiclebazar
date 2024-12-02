import { useComponent } from "../utils/customHooks/useComponent";
import BenefitsOfRentingCar from "./BenefitsOfRenting";
import Carousel from "./Carousel";
import ComparisionInModeOfBuying from "./ComparisionInModeOfBuying";
import CustomerChoice from "./CustomerChoice";
import FrequentRides from "./FrequentRides";
import HowToBook from "./HowToBook";
import PartnerComponent from "./PartnerComponent";
import SubscribeLetter from "./SubscribeLetter";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Body = () => {
  const componentList = useComponent();
  return (
    <div>
      {componentList.Carousel && <Carousel />}
      {componentList.PartnerComponent && <PartnerComponent />}
      {componentList.FrequentRides && <FrequentRides />}
      {componentList.HowToBook && <HowToBook />}
      {componentList.BenefitsOfRentingCar && <BenefitsOfRentingCar />}
      {componentList.ComparisionInModeOfBuying && <ComparisionInModeOfBuying />}
      {componentList.WhyChooseUs && <WhyChooseUs />}
      {componentList.Testimonials && <Testimonials />}
      {componentList.CustomerChoice && <CustomerChoice />}
      {componentList.SubscribeLetter && <SubscribeLetter />}
    </div>
  );
};

export default Body;
