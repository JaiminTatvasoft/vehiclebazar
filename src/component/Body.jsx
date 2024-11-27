import Carousel from "./Carousel";
import FrequentRides from "./FrequentRides";
import HowToBook from "./HowToBook";
import PartnerComponent from "./PartnerComponent";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Body = () => {
  return (
    <div>
      <Carousel />
      <PartnerComponent />
      <FrequentRides />
      <HowToBook />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Body;
