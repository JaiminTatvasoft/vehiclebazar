import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const { token } = useSelector((state) => state.users);

  const [reviews, setReviews] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3010/reviews", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.success) {
          setReviews(data.reviews); 
        } else {
          setError("Failed to fetch reviews.");
        }
      } catch (err) {
        setError("Error fetching reviews. Please try again later.");
      } finally {
        setLoading(false); 
      }
    };

    fetchReviews();
  }, [token]);

  const handlePrev = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  
  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-yellow-500 text-4xl ms-2">
            ★
          </span>
        ); 
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-4xl ms-2">
            ★
          </span>
        ); 
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center justify-center bg-bgGrey pb-20">
      <div className="relative w-full max-w-full px-5 sm:px-4 xl:px-28">
        {/* Carousel Container */}
        <div className="relative mx-auto flex flex-col lg:flex-row w-full gap-6">
          {/* Left Navigation Buttons */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <p className="flex items-center justify-center font-poppins font-bold text-4xl text-black mb-8">
                What People Say About Us?
              </p>
              {/* Text */}
              <p className="text-center mb-4 text-lg text-gray-700">
                Our clients send us a bunch of smilies with our services and we
                love them.
              </p>

              {/* Button Row */}
              <div className="flex space-x-4">
                {/* Left navigation button (Prev) */}
                <button
                  onClick={handlePrev}
                  className="bg-gradient-to-b from-white to-bgGreen text-black rounded-full p-2 shadow-lg"
                >
                  Prev
                </button>

                {/* Right navigation button (Next) */}
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-b from-white to-bgGreen text-black rounded-full p-2 shadow-lg "
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Items */}
          <div
            ref={testimonialsRef}
            className="flex gap-6 w-full snap-x snap-mandatory overflow-x-auto lg:w-1/2  scrollbar-hide"
          >
            {loading ? (
              <p className="text-center text-lg">Loading reviews...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : reviews.length === 0 ? (
              <p className="text-center text-lg">No reviews available.</p>
            ) : (
              reviews.map((review) => (
                <div
                  key={review._id}
                  className="min-w-[320px] snap-center bg-white shadow-md rounded-lg p-8 transition-transform duration-200 ease-in-out transform"
                >
                  <div className="flex items-center">
                    {/* Default Avatar Image */}
                    <img
                      className="w-20 h-20 rounded-full"
                      src={require("../assets/avatar.png")}
                      alt={review.username}
                    />
                    <div className="text-center font-bold text-xl font-poppins text-darkGreen">
                      {review.username}
                    </div>
                  </div>
                  {/* Render Star Rating */}
                  <div className="mt-1 mb-4 text-center">
                    <div className="flex justify-center">
                      {renderStars(review.rating)} {/* Render the stars */}
                    </div>
                  </div>
                  <p className="text-gray-700 text-base text-center">
                    {review.review.length > 60
                      ? `${review.review.slice(0, 100)}...`
                      : review.review}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
