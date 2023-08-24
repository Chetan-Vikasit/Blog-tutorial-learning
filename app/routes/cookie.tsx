import React from "react";

export default function cookie() {
  return (
    <div className="flex items-center justify-center pt-6">
      {/* {cookie Settings div} */}
      <div className="lg:w-[24vw] w-80 place-self-center rounded-xl border-2 py-2 pl-4 pr-4 shadow-2xl ">
        <div className="py-3 pb-6">
          <div className="text-base font-semibold">Cookie Settings</div>
          <div className="text-gray-500">Manage your cookie settings here.</div>
        </div>
        {/* { Necessary Settings div} */}
        <div className="flex flex-row pb-6">
          <div>
            <div className="text-base font-semibold">Strictly Necessary</div>
            <div className="text-gray-500">
              These cookies are essential in order to use the website and use
              its feature.
            </div>
          </div>
          <div>
            <label className="relative mb-5 inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="peer h-5 w-9 rounded-full bg-gray-900 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
        {/* { functional  Settings div} */}
        <div className="flex flex-row pb-6">
          <div>
            <div className="text-base font-semibold">functional Cookies</div>
            <div className="text-gray-500">
              These cookies allow the website to provide personalized
              functionality.
            </div>
          </div>
          <div>
            <label className="relative mb-5 inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="peer h-5 w-9 rounded-full bg-gray-900 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
        {/* { Perfomance  Settings div} */}
        <div className="flex flex-row pb-5">
          <div>
            <div className="text-base font-semibold">Perfomance Cookies</div>
            <div className="text-gray-500">
              These cookies help to improve the perfomance of the website.
            </div>
          </div>
          <div>
            <label className="relative mb-5 inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="peer h-5 w-9 rounded-full bg-gray-900 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
        {/* { BUtton Settings div} */}
        <div className="pb-5">
          <button className=" w-full justify-center rounded-xl bg-black px-3 py-2 text-center font-bold text-white hover:bg-blue-700">
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}
