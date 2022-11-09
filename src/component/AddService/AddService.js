import { info } from "autoprefixer";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/UserContext";

const AddService = () => {
  const { currentUser } = useContext(AuthContext);
  const { displayName } = currentUser;
  const [serviceInfo, setServiceInfo] = useState({});
  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newServiceInfo = { ...serviceInfo };
    newServiceInfo[field] = value;
    setServiceInfo(newServiceInfo);
    console.log(serviceInfo);
  };
  const handleAddService = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          e.target.reset();
          toast.success("Service added successfully");
        }
      });
  };
  return (
    <section className="p-6 bg-gray-800 text-gray-50  py-8 sm:py-28">
      <form
        onSubmit={handleAddService}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="text-sm">
              Hey, <span className="text-lg">{displayName}</span>
            </p>
            <p className="text-sm">Would you like to add a new service? </p>
            <p className="text-sm">
              Please, fill up all the input field with valid info.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="title" className="text-sm">
                Service Title
              </label>
              <input
                onChange={handleInputChange}
                id="title"
                name="title"
                type="text"
                placeholder="service title"
                className="w-full px-2  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="price" className="text-sm">
                Price
              </label>
              <input
                onChange={handleInputChange}
                id="price"
                name="price"
                type="text"
                placeholder="price"
                className="w-full px-2  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="rating" className="text-sm">
                Rating
              </label>
              <input
                onChange={handleInputChange}
                id="rating"
                name="rating"
                type="text"
                placeholder="rating"
                className="w-full px-2  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="thumbnail" className="text-sm">
                Thumbnail Url
              </label>
              <input
                onChange={handleInputChange}
                id="thumbnail"
                name="thumbnail"
                type="text"
                placeholder="thumbnail url"
                className="w-full px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div className="col-span-full">
              <label for="description" className="text-sm">
                Description
              </label>
              <input
                onChange={handleInputChange}
                id="description"
                name="description"
                type="text"
                placeholder="description"
                className=" px-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                required
              />
            </div>
            <button
              type="submit"
              onSubmit={handleAddService}
              className="col-span-full flex justify-center border boder-black  hover:bg-gray-300 hover:text-slate-900"
            >
              Add Service
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddService;
