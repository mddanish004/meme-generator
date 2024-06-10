import React from "react";
import {useNavigate} from "react-router-dom";

const MemeCard = (props) => {

  const navigate = useNavigate();

    return (
        
<div
  class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
  <div className="w-full">
    <img
      class="rounded-t-lg"
      src={props.img}
      alt="" />
  </div>
  <div className="px-6 py-4">
    <p className="font-bold text-xl mb-2 text-white">
      {props.title}
    </p>
    <button onClick={e => navigate(`/edit?url=${props.img}`)} className=" bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click here to Edit</button>
  </div>
</div>

    );
};

export default MemeCard;