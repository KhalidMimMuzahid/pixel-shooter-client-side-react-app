import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EachReview from "./EachReview";
const Reviews = ({ serviceId, isReviewOpen, thumbnail, title }) => {
  const { currentUser } = useContext(AuthContext);
  const [review, setReview] = useState({ rating: "5" });
  const [reviews, setReviews] = useState([]);

  const handleReviewSend = (e) => {
    e.preventDefault();
    if (!currentUser?.uid) {
      e.target.reset();
      return alert("please login first");
    }

    const newReview = { ...review };
    newReview.reviewerName = currentUser.displayName;
    newReview.reviewerEmail = currentUser.email;
    newReview.reviewerUid = currentUser.uid;
    newReview.reviewerPhoto = currentUser.photoURL;
    newReview.serviceId = serviceId;
    newReview.serviceThumbnail = thumbnail;
    newReview.title = title;
    fetch("http://localhost:5000/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          e.target.reset();
          newReview._id = data.insertedId;

          toast.success("review added successfully");
          const updatedReview = [...reviews, newReview];
          setReviews(updatedReview);
        }
      });
  };

  const inputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  useEffect(() => {
    fetch("http://localhost:5000/reviews", {
      headers: {
        "content-type": "application/json",
        serviceId: serviceId,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [isReviewOpen]);
  return (
    <div className="">
      {reviews.map((review) => (
        <EachReview
          key={reviews.indexOf(review)}
          review={review}
          reviews={reviews}
          setReviews={setReviews}
        ></EachReview>
      ))}

      <div className="bg-white my-2 container flex flex-col w-full max-w-lg py-1 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="w-full px-2">
          <form onSubmit={handleReviewSend} action="">
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
                    defaultValue="5"
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
                required
              ></textarea>
            </div>
            <button
              className="bg-slate-800 hover:bg-black text-white w-full py-1 my-1 font-bold"
              type="submit"
              onSubmit={handleReviewSend}
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
