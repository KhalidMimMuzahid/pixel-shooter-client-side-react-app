import React, { useContext, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { AuthContext } from "../../context/UserContext";
const Reviews = () => {
  const { currentUser } = useContext(AuthContext);
  const [review, setReview] = useState({ rating: "5" });
  const handleReviewSend = () => {
    if (!currentUser?.uid) {
      return alert("please login first");
    }

    // review er moddhe user er info and service er info add hobe r o

    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const inputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
    // console.log(review);
  };
  return (
    <div className="">
      <div className="bg-white my-2 container flex flex-col w-full max-w-lg py-1 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-1">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">user name</h4>
              <span className="text-xs dark:text-gray-400">user email</span>
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
            <span className="text-xl font-bold">4.5</span>
          </div>
        </div>
        <div className="p-2 space-y-2 text-sm dark:text-gray-400">
          <p>
            Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
            dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
            finibus.
          </p>
        </div>
      </div>
      <div className="bg-white my-2 container flex flex-col w-full max-w-lg py-1 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-1">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">user name</h4>
              <span className="text-xs dark:text-gray-400">user email</span>
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
            <span className="text-xl font-bold">4.5</span>
          </div>
        </div>
        <div className="p-2 space-y-2 text-sm dark:text-gray-400">
          <p>
            Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
            dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
            finibus.
          </p>
        </div>
      </div>

      <div className="bg-white my-2 container flex flex-col w-full max-w-lg py-1 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="w-full px-2">
          <div>
            <div className="flex justify-between">
              <span>your review</span>
              <div>
                <label for="rating" className="text-m">
                  rating
                </label>

                <select
                  onChange={inputChange}
                  name="rating"
                  id="rating"
                  className="border border-black ml-4 bg-black text-white font-bold"
                >
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                  <option value="4">four</option>
                  <option value="5" selected>
                    five
                  </option>
                </select>
              </div>
            </div>

            <textarea
              onChange={inputChange}
              name="message"
              id="message"
              rows="2"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your review..."
            ></textarea>
          </div>
        </div>
        <button onClick={handleReviewSend}>send</button>
      </div>
    </div>
  );
};

export default Reviews;
