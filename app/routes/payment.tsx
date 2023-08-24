import React, { useState } from "react";

type PaymentOption = "Card" | "Paypal" | "Apple";

export default function Payment() {
  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [selectedOption, setSelectedOption] = useState<PaymentOption | null>(null);

  const handleCvc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(event.target.value);
  };
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCardnumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardnumber(event.target.value);
  };
  const handleMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  const handleYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  };

  const handleCard = (provider: PaymentOption) => {
    setSelectedOption(provider);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateAccount(); // Log the form data
    // Additional logic for form submission, e.g., sending data to a server
  };

  const handleCreateAccount = () => {
    const userData = {
      card,
      name,
      cardnumber,
      month,
      year,
      cvc,
    };
    console.log(JSON.stringify(userData, null, 2));
  };
  return (
    <div className="flex items-center justify-center pt-6">
      <div className="w-72 lg:w-[25vw] place-self-center rounded-xl border-2 py-2 pl-4 pr-4 shadow-2xl ">
        <div className="px-3 py-3 pb-7">
          <div className="font-semibold">Payment Method</div>
          <div className="text-gray-500">
            Add a new payment method to your account.
          </div>
        </div>

        {/* <div> icons section */}
        <div className="lg:flex lg:flex-row lg:pb-4 pl-3 ">
          {/* card */}
          <div className={`mr-4 rounded border px-9 py-3 hover:bg-gray-200 ${selectedOption === "Card" ? "border-black" : ""}`}>
            <button onClick={() => handleCard("Card")}>
              <div className="lg:px-2 px-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="lg:h-[1.5vw] lg:w-[1.5vw] h-[8vw] w-[8vw]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </div>
              <div className="lg:py-2 text-center">Card</div>
            </button>
          </div>
          {/* paypal */}
          <div className={`mr-4 rounded border px-9 py-3 hover:bg-gray-200 ${selectedOption === "Paypal" ? "border-black" : ""}`}>

            <button className="" onClick={() => handleCard("Paypal")}>
              <div className="lg:px-3 px-14">

                <svg
                  width="24px"
                  height="24px"
                  viewBox="-1.5 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="lg:h-[1.5vw] lg:w-[1.5vw] h-[7vw] w-[7vw]"

                >
                  <title>paypal [#140]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-222.000000, -7559.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M182.475463,7404.9 C181.260804,7410.117 177.555645,7411 172.578656,7411 L171.078137,7419 L173.825411,7419 C174.325918,7419 174.53555,7418.659 174.627828,7418.179 C175.312891,7413.848 175.216601,7414.557 175.278788,7413.879 C175.337966,7413.501 175.664951,7413 176.049108,7413 C179.698098,7413 182.118387,7411.945 182.857614,7408.158 C183.120405,7406.811 183.034145,7405.772 182.475463,7404.9 M171.134306,7410.86 L170.011926,7417 L166.535456,7417 C166.206465,7417 165.954707,7416.598 166.006864,7416.274 L168.602682,7399.751 C168.670887,7399.319 169.045014,7399 169.484337,7399 L175.718111,7399 C179.409228,7399 181.894714,7400.401 181.319983,7404.054 C180.313953,7410.56 174.737157,7410 172.199514,7410 C171.760191,7410 171.203515,7410.428 171.134306,7410.86"
                          id="paypal-[#140]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="py-2"> Paypal</div>
            </button>
          </div>
          {/* apple  */}
          <div className={`mr-4 rounded border px-9 py-3 hover:bg-gray-200 ${selectedOption === "Apple" ? "border-black" : ""}`}>
            
              <div className="lg:px-2 px-14">
             <button onClick={() => handleCard("Apple")}>
              <svg
                width="36px"
                height="36px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-[2vw] lg:w-[2vw] lg:items-center lg:justify-center  h-[10vw] w-[10vw] "
              >
                <path
                  d="M16.52 12.46C16.508 11.8438 16.6682 11.2365 16.9827 10.7065C17.2972 10.1765 17.7534 9.74476 18.3 9.46C17.9558 8.98143 17.5063 8.5883 16.9862 8.31089C16.466 8.03349 15.8892 7.87923 15.3 7.86C14.03 7.76 12.65 8.6 12.14 8.6C11.63 8.6 10.37 7.9 9.40999 7.9C7.40999 7.9 5.29999 9.49 5.29999 12.66C5.30963 13.6481 5.48194 14.6279 5.80999 15.56C6.24999 16.84 7.89999 20.05 9.61999 20C10.52 20 11.16 19.36 12.33 19.36C13.5 19.36 14.05 20 15.06 20C16.79 20 18.29 17.05 18.72 15.74C18.0689 15.4737 17.5119 15.0195 17.1201 14.4353C16.7282 13.8511 16.5193 13.1634 16.52 12.46ZM14.52 6.59C14.8307 6.23965 15.065 5.82839 15.2079 5.38245C15.3508 4.93651 15.3992 4.46569 15.35 4C14.4163 4.10239 13.5539 4.54785 12.93 5.25C12.6074 5.58991 12.3583 5.99266 12.1983 6.43312C12.0383 6.87358 11.9708 7.34229 12 7.81C12.4842 7.82361 12.9646 7.71974 13.3999 7.50728C13.8353 7.29482 14.2127 6.98009 14.5 6.59H14.52Z"
                  fill="#000000"
                />
              </svg>
            </button>
            </div>
          
            <div className="lg:ml-1 text-center">Apple</div>
          </div>
        </div>
        {/* name and card section or form */}
        <div>
          <form className="w-full max-w-lg pb-4 pl-1" onSubmit={handleSubmit}>
            <div className="flex flex-col py-2 pb-2">
              <div className="w-full px-2 pb-4">
                <label
                  className="mb-2 block font-medium tracking-wide text-gray-700"
                  htmlFor="grid-first-name"
                >
                  Names
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                  id="grid-first-name"
                  type="text"
                  placeholder="Your Name "
                  onChange={handleName}
                />
              </div>
              <div className="w-full px-2 ">
                <label
                  className="mb-2 block font-medium tracking-wide text-gray-700"
                  htmlFor="grid-card-name"
                >
                  Card number
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                  id="grid-card-name"
                  type="text"
                  placeholder="Card number"
                  onChange={handleCardnumber}
                />
              </div>
            </div>
            <div className="flex flex-row">
              {/* Month */}
              <div className="w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-base font-semibold tracking-wide text-gray-700"
                  htmlFor="grid-month"
                >
                  Expires
                </label>

                <div className="relative block h-8 w-full appearance-none rounded border text-gray-700">
                  <select
                    className="block h-8 w-full appearance-none rounded border px-2 text-gray-700"
                    value={month}
                    onChange={handleMonth}
                  >
                    <option value="">Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="12">December</option>
                  </select>
                </div>
              </div>
              {/* Year */}
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-base font-semibold tracking-wide text-gray-700"
                  htmlFor="grid-year"
                >
                  Year
                </label>
                <div className="relative">
                  <select
                    className="block h-8 w-full appearance-none rounded border px-2 text-gray-700"
                    value={year}
                    onChange={handleYear}
                  >
                    <option value="">Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>

                    <option value="2030">2030</option>
                  </select>
                </div>
              </div>
              {/* CVC */}
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-base font-semibold tracking-wide text-gray-700 "
                  htmlFor="grid-cvc"
                >
                  CVC
                </label>
                <input
                  className="block h-8 w-full appearance-none rounded  border px-2"
                  id="grid-cvc"
                  type="text"
                  placeholder="CVC"
                  value={cvc}
                  onChange={handleCvc}
                />
              </div>
            </div>
            <div className="py-6 pt-8">
              <button
                className=" w-full justify-center rounded-xl bg-black px-3 py-2 text-center font-bold text-white hover:bg-blue-700"
                type="submit"
              >
                Continue{" "}
              </button>
            </div>

            {/* <button  className=" w-full bg-black justify-center hover:bg-blue-700 text-white text-center font-bold py-4 px-6 border border-blue-700 rounded-lg"type="submit"> </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}
