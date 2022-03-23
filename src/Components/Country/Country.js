import React from "react";

const Country = ({ data }) => {
  return (
    <div className=" col-4 text-center">
      <div className="rounded shadow p-2 m-1 bg-light ">
        <img
          className="border border-2 rounded w-75"
          src={data.flags.png}
          alt={data.name.common}
        />
        <h3>{data.name.common}</h3>
        <button className="btn bg-primary text-white py-1 px-2">Details</button>
      </div>
    </div>
  );
};

export default Country;
