import React, { useState } from "react";
import { toast } from "react-toastify";

const MyEachReview = ({ myReview, myReviews, setMyReviews }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateReviewInfo, setUpdateReviewInfo] = useState(myReview);
  const { _id, message, rating, title, serviceThumbnail } = myReview;

  const deletReview = () => {
    const isAgree = window.confirm("are you sure you want to delete?");
    if (!isAgree) {
      return;
    }
    fetch(
      `https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/removereview/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log("deleted id", _id);
          const newReviews = myReviews.filter(
            (eachReview) => eachReview._id !== _id
          );
          console.log("newReviews", newReviews);
          setMyReviews(newReviews);
          console.log("MyReviews", myReviews);
        }
      });
  };
  const handleIsUpdating = () => {
    setIsUpdating(!isUpdating);
  };
  const handleUpdate = () => {
    // console.log(myReview);

    const messageLength = updateReviewInfo.message.length;
    const RatingLength = updateReviewInfo.rating.length;
    console.log(updateReviewInfo);
    if (!(RatingLength && messageLength)) {
      return alert("some input field is empty.");
    }
    const rating = parseInt(updateReviewInfo.rating);
    if (rating > 5) {
      return alert("rating can't be more than 5");
    }

    fetch(
      "https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/updatereview",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateReviewInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("review updated successfully");
          //   setMyCurrentReview(updateReviewInfo);
          setIsUpdating(!isUpdating);

          const newReviews = myReviews.map((eachReview) => {
            if (eachReview._id !== _id) {
              return eachReview;
            }
            return updateReviewInfo;
          });
          setMyReviews(newReviews);

          return;
        } else {
        }
      });
  };
  const handleInputChange = (e) => {
    const field = e.target.name;
    let value = e.target.value;
    if (field === "rating" && (value < 0 || value > 5)) {
      const newValue1 = value.toString();
      const targetValue = newValue1.length - 1;
      const newValueString = newValue1[targetValue];
      const newValue = parseInt(newValueString);
      e.target.value = newValue;
      value = newValue.toString();
    }
    const newUpdateReviewInfo = { ...updateReviewInfo };
    newUpdateReviewInfo[field] = value;
    setUpdateReviewInfo(newUpdateReviewInfo);
    console.log(updateReviewInfo);
  };
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between bg-slate-800 text-black lg:text-lg md:text-md text-sm font-semibold">
      <hr />
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-24 lg:w-40 h-auto border-transparent rounded outline-none bg-gray-500"
          src={serviceThumbnail}
          alt="Polaroid camera"
        />
        <div className="grid grid-cols-12 w-full  h-32 border border-black border-2 bg-slate-300">
          <div className=" col-span-4  px-2 mx-2">
            <h1>{title}</h1>

            <h1>
              rating{" "}
              {isUpdating ? (
                <input
                  onChange={handleInputChange}
                  disabled={!isUpdating}
                  type="number"
                  name="rating"
                  id="rating"
                  className="w-20 px-2"
                  defaultValue={rating}
                />
              ) : (
                <span className="">{rating}</span>
              )}
            </h1>
          </div>
          <div className=" col-span-7 overflow-y-auto    bg-slate-300">
            {isUpdating ? (
              <textarea
                onChange={handleInputChange}
                disabled={!isUpdating}
                name="message"
                id="message"
                className="h-full w-full px-2"
                defaultValue={message}
              ></textarea>
            ) : (
              <p className="h-full w-full px-2 ">{message}</p>
            )}
            {/*  */}
          </div>
          <div
            className="col-span-1  flex flex-col justify-center items-center md:px-2  bg-slate-300"
            style={{ borderLeft: "2px solid white" }}
          >
            <div>
              {/* <button className="hover:bg-slate-500">Update?</button> */}

              {isUpdating ? (
                <svg
                  onClick={handleUpdate}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 md:h-10 md:w-10 lg:w-12 lg:h-12 text-green-800 font-extrabold  hover:cursor-pointer "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <svg
                  onClick={handleIsUpdating}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 md:h-10 md:w-10 lg:w-12 lg:h-12 text-green-800 font-extrabold  hover:cursor-pointer  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              )}
            </div>
            <div>
              <svg
                onClick={deletReview}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 md:h-10 md:w-10 lg:w-12 lg:h-12 text-red-700 font-extrabold  hover:cursor-pointer hover:fill-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MyEachReview;
