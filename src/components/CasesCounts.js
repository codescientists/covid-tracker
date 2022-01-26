import millify from "millify";
import React from "react";

const CasesCounts = ({ casescount }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between my-5 mx-10 lg:mx-0">
      <div className="lg:w-1/3 mx-4 my-2 bg-white flex flex-col justify-center border-b-4 border-red-500 rounded-sm px-10 py-5 drop-shadow-md ">
        <h1 className="text-xl text-gray-600">Coronavirus Cases</h1>
        <h1 className="text-4xl text-red-500 font-bold my-2">
          {millify(casescount.todayCases, { lowercase: true })}
        </h1>
        <h1 className="text-xl text-gray-600">
          Total : {millify(casescount.cases, { lowercase: true })}{" "}
        </h1>
      </div>
      <div className="lg:w-1/3 mx-4 my-2 bg-white flex flex-col justify-center rounded-sm px-10 py-5 drop-shadow-md hover:drop-shadow-lg hover:border-b-4 hover:border-green-500 duration-100">
        <h1 className="text-xl text-gray-600">Recovered</h1>
        <h1 className="text-4xl text-green-500 font-bold my-2">
          {millify(casescount.todayRecovered, { lowercase: true })}
        </h1>
        <h1 className="text-xl text-gray-600">
          Total : {millify(casescount.recovered, { lowercase: true })}{" "}
        </h1>
      </div>
      <div className="lg:w-1/3 mx-4 my-2 bg-white flex flex-col justify-center rounded-sm px-10 py-5 drop-shadow-md hover:drop-shadow-lg hover:border-b-4 hover:border-red-700 duration-100">
        <h1 className="text-xl text-gray-600">Deaths</h1>
        <h1 className="text-4xl text-red-700 font-bold my-2">
          {millify(casescount.todayDeaths, { lowercase: true })}
        </h1>
        <h1 className="text-xl text-gray-600">
          Total : {millify(casescount.deaths, { lowercase: true })}{" "}
        </h1>
      </div>
    </div>
  );
};

export default CasesCounts;
