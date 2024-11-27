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
  return (
    <div>
      <Carousel />
      <PartnerComponent />
      <FrequentRides />
      <HowToBook />
      <BenefitsOfRentingCar />
      <ComparisionInModeOfBuying />
      <WhyChooseUs />
      <Testimonials />
      <CustomerChoice />
      <SubscribeLetter />
    </div>
  );
};

export default Body;
