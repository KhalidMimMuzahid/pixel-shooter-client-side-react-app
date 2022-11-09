import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EachService = ({ eachService }) => {
  const { title, thumbnail, rating, price, description, _id } = eachService;
  const [newDescription, setNewDescription] = useState("loading ...");
  const descriptionLength = description.length;
  useEffect(() => {
    if (descriptionLength > 100) {
      const sliceDescription = description.slice(0, 100);
      const newDescription = sliceDescription.concat("...");
      setNewDescription(newDescription);
    } else {
      const newDescription = description;
      setNewDescription(newDescription);
    }
  }, []);
  return (
    <div className="mx-auto col-span-12 lg:col-span-6 xl:col-span-4 my-4 w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <a href="#">
          <img
            class="p-8 rounded-t-lg w-full"
            src={thumbnail}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>

          <p>{newDescription}</p>
          <div class="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <title>First star</title> */}
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              to={`/servicedetails/${_id}`}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachService;
