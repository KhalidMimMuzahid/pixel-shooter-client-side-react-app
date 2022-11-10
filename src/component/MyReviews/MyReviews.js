import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import MyEachReview from "./MyEachReview";

const MyReviews = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const navigate = useNavigate;
  useEffect(() => {
    fetch(
      `https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/myreviews/${currentUser.uid}`,
      {
        headers: {
          authorization: `Barerer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        // console.log(res);
        if (res.satus === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
      });
  }, []);

  return (
    <div className="container mx-auto flex justify-center">
      <div className="flex flex-col w-full p-6 space-y-4 sm:p-10 bg-gray-700 text-gray-100">
        <h2 className="text-xl text-center font-semibold">My Reviews</h2>
        <ul className="flex flex-col divide-y divide-gray-800 lg:w-3/4 mx-auto">
          {myReviews.map((myReview) => (
            <MyEachReview
              key={myReviews.indexOf(myReview)}
              myReview={myReview}
              myReviews={myReviews}
              setMyReviews={setMyReviews}
            ></MyEachReview>
          ))}
          {!myReviews.length && (
            <div>
              <h1 className="text-2xl py-20 text-center">you have no review</h1>
            </div>
          )}
        </ul>
        <div className="flex justify-end space-x-4">
          <Link
            to="/services"
            className="px-6 py-2 border rounded-md border-violet-400  hover:bg-black"
          >
            Back
            <span className="sr-only sm:not-sr-only">to services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
