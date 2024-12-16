import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-green-700 pt-32 pb-16 text-white">
        <div className="max-w-full px-10 sm:px-20 xl:px-48 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Section */}
            <div className="text-white">
              <div className="mb-4">
                <img
                  src={require("../assets/footer-logo.png")}
                  alt="Add Logo"
                  className="w-28"
                />
              </div>
              <div className="text-lg mt-5 text-white font-poppins">
                Find Your{" "}
                <span className="text-yellow-300 text-xl font-extrabold">
                  Dream{" "}
                </span>{" "}
                Car Today
                <br />
                Explore our wide range of vehicles that{" "}
                <span className="text-yellow-300 text-xl font-extrabold">
                  fit{" "}
                </span>{" "}
                your needs.{" "}
                <span className="text-yellow-300 text-xl font-extrabold">
                  Start{" "}
                </span>
                your journey now!
              </div>
              <div className="flex mt-8 flex-wrap items-center justify-center sm:justify-between">
                <div className="flex space-x-8">
                  <Link
                    to="https://www.facebook.com/tatvasoft"
                    className="text-white"
                  >
                    <div className="border border-gray-400 hover:bg-gray-500 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 1024 1024"
                      >
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path>
                      </svg>
                    </div>
                  </Link>

                  <Link
                    to="https://twitter.com/tatvasoft"
                    className="text-white"
                  >
                    <div className="border border-gray-400 hover:bg-gray-500 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 1024 1024"
                      >
                        <path d="M1024 196.1c-37.7 16.7-78.1 28-120.4 33.1 43.2-25.8 76.3-66.7 92.4-116.5-40.3 23.9-84.9 41.1-131.6 50.6-38.1-40.7-92.7-66.2-153.8-66.2-116.6 0-211.5 94.9-211.5 211.5 0 16.6 1.9 32.8 5.3 48.3-175.7-8.8-331.5-93.1-435.6-221.8-18.2 31.3-28.5 67.6-28.5 106.2 0 73.4 37.4 138.4 94.2 176.3-34.6-1.1-67.2-10.5-95.8-26.3v2.7c0 102.5 73 188.7 169.3 208.7-17.7 4.8-36.4 7.4-55.6 7.4-13.5 0-26.6-1.3-39.4-3.7 26.8 83.7 104.4 144.6 196.3 146.6-72.4 56.6-163.5 90.3-262.7 90.3-17 0-33.8-1-50.4-3.1 93.6 60.1 205.3 95.1 325.7 95.1 391.2 0 605.6-323.6 605.6-604.3 0-9.2-.1-18.4-.3-27.5z"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="lg:ms-20 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">
                About
              </h3>
              <ul className="">
                <li className="mt-4">
                  <Link className="text-white hover:text-gray-300" to="/deals">
                    Deals
                  </Link>
                </li>
                <li className="mt-4">
                  <Link
                    className="text-white hover:text-gray-300"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mt-4">
                  <Link className="text-white hover:text-gray-300" to="/faqs">
                    FAQs
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="text-textcolor hover:text-black"
                    to="/faq"
                  >
                    FAQs
                  </Link>
                </li> */}
                <li className="mt-4">
                  <Link
                    className="text-white hover:text-gray-300"
                    to="/termsandcondition"
                  >
                    Terms and Condition
                  </Link>
                </li>
              </ul>
            </div>

            {/* Helpful Links Section */}
            <div className="text-center">
              <h3 className="text-2xl mt-4 sm:mt-0 font-semibold text-white mb-4 font-poppins">
                Quick links
              </h3>
              <ul className="">
                <li className="mt-4">
                  <Link className="text-white hover:text-gray-300" to="/">
                    Home
                  </Link>
                </li>
                <li className="mt-4">
                  <Link className="text-white hover:text-gray-300" to="/about">
                    About
                  </Link>
                </li>
                <li className="mt-4">
                  <Link className="text-white hover:text-gray-300" to="/blog">
                    Blogs
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="text-white hover:text-black"
                    to="/faq"
                  >
                    FAQs
                  </Link>
                </li> */}
                <li className="mt-4">
                  <Link
                    className="text-white hover:text-gray-300"
                    to="/sitemap"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get In Touch Section */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-white">
                Get In Touch
              </h3>
              <div className="flex items-center justify-center mb-4 lg:justify-start">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="mobile-screen"
                  className="svg-inline--fa fa-mobile-screen text-white w-4 h-4 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"
                  ></path>
                </svg>
                <Link
                  className="text-white hover:text-gray-300"
                  to="tel:9601421472"
                >
                  +91-9601421472
                </Link>
              </div>
              <div className="flex items-center justify-center mb-4  lg:justify-start">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="svg-inline--fa fa-envelope text-white w-4 h-4 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  ></path>
                </svg>
                <Link
                  className="text-white hover:text-gray-300"
                  to="mailto:info@tatvasoft.com"
                >
                  info@tatvasoft.com
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="location-dot"
                  className="svg-inline--fa fa-location-dot text-white w-5 h-5 lg:h-10 lg:w-10 2xl:w-5 2xl:h-5 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  ></path>
                </svg>
                <Link
                  className="text-white lg:text-start hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://maps.app.goo.gl/f2n2g5mR5W2YXXcA8"
                >
                  TatvaSoft House, Near Shivalik Business Center Sarkhej -
                  Gandhinagar Highway,
                  <br />
                  Rajpath Rangoli Rd, Ahmedabad, Gujarat 380054
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-10">
            {/* Copyright Section */}
            <div className="flex justify-between items-center mt-5 border-t border-gray-300 pt-4">
              <p className="text-sm text-white">
                &copy; 2024{" "}
                <span className="font-semibold">[Company Name]</span>. All
                rights reserved.
              </p>

              {/* Store Links (Play Store and App Store) */}
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.mychoize.cars&referrer=utm_source%3Dwebsite%26utm_medium%3Dtop_bar%26utm_term%3Dapp%26utm_campaign%3Ddownload&pli=1"
                  className="flex items-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Playstore"
                    className="w-36"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://apps.apple.com/us/app/mychoize-self-drive-car-rental/id1287913070?ls=1"
                  className="flex items-center"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Appstore"
                    className="w-36"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
