import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/UserContext";

const SignUp = () => {
  const {
    signUpWithEmailAndPassword,
    signInWithGoogle,
    updateUserProfileInfo,
    setIsLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const userInfo = { displayName, photoURL };
    console.log(userInfo);
    setIsLoading(true);
    signUpWithEmailAndPassword(email, password)
      .then((userCredential) => {
        updateUserProfile(userInfo);
        // console.log(userInfo);
        const user = userCredential.user;
        const currentUser = {
          userUid: user.uid,
        };
        fetch(
          "https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/jwt",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
        // console.log(user);
        setIsLoading(false);
        toast.success("signed in Succesfully");
        navigate("/");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 300);
        // window.location.reload();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleSignInWithGoogle = () => {
    setIsLoading(true);
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          userUid: user.uid,
        };
        fetch(
          "https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/jwt",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });

        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const updateUserProfile = (userInfo) => {
    console.log("user extra info", userInfo);
    updateUserProfileInfo(userInfo)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <div className="h-full pt-24 flex justify-center ">
      <div className="h-full w-full max-w-md px-8 py-2 space-y-0 rounded-xl my-4 bg-gray-900 text-gray-100 ">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          onSubmit={handleFormSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-700 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block text-gray-400">
              Your Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-700 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-700 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-700 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Sign Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSignInWithGoogle}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an acount?
          <Link
            rel="noopener noreferrer"
            to="/signin"
            className="underline text-gray-100"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
