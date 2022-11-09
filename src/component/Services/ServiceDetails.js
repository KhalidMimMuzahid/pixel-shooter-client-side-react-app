import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, price, thumbnail, rating, description } = service;
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  return (
    <div className="bg-slate-500 py-4">
      <div className="bg-white px-4 py-12 my-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={thumbnail}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {title}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {description}
              </p>
            </div>
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
              others
            </p>
            <div className="space-y-3  sm:space-y-0">
              <h1>Price: ${price}</h1>
              <h1 class="">
                {" "}
                rating:{" "}
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-300 inline"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <title>First star</title> */}
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="inline bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {rating}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {isReviewOpen ? (
          <>
            <div className=" text-center">
              <button
                className="bg-slate-900 text-white font-bold px-4 py-2"
                onClick={() => setIsReviewOpen(!isReviewOpen)}
              >
                {" "}
                Close Reviews?
              </button>
            </div>
            <Reviews></Reviews>
          </>
        ) : (
          <>
            <div className=" text-center">
              <button
                className="bg-slate-900 text-white font-bold px-4 py-2"
                onClick={() => setIsReviewOpen(!isReviewOpen)}
              >
                {" "}
                See Reviews?
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
