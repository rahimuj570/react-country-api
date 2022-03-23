import React from "react";
import ModalReact from "../Modal/ModalReact";

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
        <ModalReact data={data}></ModalReact>
      </div>
    </div>
  );
};

export default Country;
