import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function form() {
  function onChangedate(date: any) {
    setStartDate(date);
  }
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="formContainer px-4">
        <h1 className="py-0.5 pt-6 text-2xl">Account</h1>
        <p className="pb-6 text-gray-500">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
        <hr className="w-2/3 pb-2" />
        <form className="block focus:outline-none">
          <div className="grid gap-2">
            <label className="text-lg " htmlFor="Name">
              Name
            </label>
            <input
              className="w-2/3 rounded-lg border py-2 outline-none"
              type="text"
              name=""
              id="Name"
              placeholder="  Your Name"
            />
            <p className="text-l pb-6 text-gray-500">
              This is the name that will displayed on your profile and in
              emails.
            </p>
          </div>
          <div className="grid gap-2 ">
            <label className="text-lg " htmlFor="Date">
              Date of birth
            </label>

            <div className="flex w-80 rounded-lg border py-2 outline-none">
              <DatePicker
                className=" outline-none"
                selected={startDate}
                onChange={onChangedate}
                placeholderText="  Pick a date "
                id="Date"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-6 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </div>
           <p className="text-l pb-6 text-gray-500">
              Your date of birth is used to calculate your age.
            </p>
          </div>
          <div className="grid gap-2 ">
            <label className="text-lg " htmlFor="lan">
              Languages
            </label>

            <div className="flex w-80 rounded-lg border py-2  outline-none">
            <select className="flex w-64 rounded-lg py-1 outline-none bg-white text-l px-2 text-gray-500" id="cars" name="carlist" form="carform">
  <option value="volvo">English</option>
  <option value="saab">Hindi</option>
  <option value="opel">Marathi</option>
  <option value="audi">Guzrati</option>
</select>

              {/* <svg  
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-6 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg> */}
            </div>
            <p className="text-l pb-6 text-gray-500">
              This is the language that will be used in the dashboard.
            </p>
          </div>
          <button className="w-40 rounded-lg border bg-black py-2 text-white">
            Update Account
          </button>
        </form>
      </div>
    </>
  );
}
