import BodySeaterInfo from "./BodySeaterInfo";
import CarouselHeader from "./CarouselHeader";
import FrequentRides from "./FrequentRides";
import RecentTrips from "./RecentTrips";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Body = () => {
  return (
    <div>
      <CarouselHeader />
      <BodySeaterInfo />
      <RecentTrips />
      <FrequentRides />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Body;
