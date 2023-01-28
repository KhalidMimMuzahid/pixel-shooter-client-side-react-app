import React from "react";

const ContactUS = () => {
  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="text-center xl:text-left max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Contact Us
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                We are waiting for our customer 24/7. We have 50+ customer
                services employee. For any reason or any time you are invited in
                our Office. And for any information contact our call center. we
                are always ready for you. Thank You..
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
                      readOnly
                      value="pixels@shooter.com"
                      type="text"
                      className="font-bold flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="mobile"
                      className="inline-block mb-1 font-medium"
                    >
                      Mobile
                    </label>
                    <input
                      readOnly
                      value="+028324532"
                      type="text"
                      className="font-bold flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="mobile"
                      name="mobile"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="address"
                      className="inline-block mb-1 font-medium"
                    >
                      Address
                    </label>
                    <textarea
                      readOnly
                      type="text"
                      className="h-20 flex-grow w-full font-bold  px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="address"
                      name="address"
                      value="Khagan, Birulia,
                      Dhaka, Bangladesh"
                    />
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We are always open for you.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
