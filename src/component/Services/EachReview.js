import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const EachReview = ({ review, reviews, setReviews }) => {
  const { currentUser } = useContext(AuthContext);
  const {
    message,
    rating,
    reviewerEmail,
    reviewerName,
    reviewerPhoto,
    serviceId,
    _id,
  } = review;
  const deletReview = () => {
    const isAgree = window.confirm("are you sure you want to delete?");
    if (!isAgree) {
      return;
    }
    fetch(`http://localhost:5000/removereview/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const newReviews = reviews.filter(
            (eachReview) => eachReview._id !== _id
          );
          setReviews(newReviews);
        }
      });
  };

  return (
    <div className="bg-white my-2 container flex flex-col w-full max-w-lg py-1 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between p-1">
        <div className="flex space-x-4">
          <div>
            <img
              src={reviewerPhoto}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{reviewerName}</h4>
            <span className="text-xs dark:text-gray-400">{reviewerEmail}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 dark:text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current"
          >
            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
          </svg>
          <span className="text-xl font-bold">{rating}</span>
        </div>
        {reviewerEmail === currentUser.email && _id && (
          <div>
            <svg
              onClick={deletReview}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-red-700 font-extrabold  hover:cursor-pointer hover:fill-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="p-2 space-y-2 text-sm dark:text-gray-400">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default EachReview;
