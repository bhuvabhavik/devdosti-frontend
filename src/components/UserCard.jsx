import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, skills, age, photoUrl, about, gender } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );

      dispatch(removeUserFromFeed(userId));


    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="card bg-base-300  w-84 h-[min] shadow-sm">
        {/* <figure> */}
        <img className="h-80 sm:h-100 rounded-2xl object-cover" src={photoUrl} alt="user-photo" />
        {/* </figure> */}
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p className="text-xs">{about}</p>
          {/* <p>{age + " " + gender}</p> */}
<div className="flex items-center gap-3">
  {age>0 && <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-blue-400 text-white text-lg sm:text-xl font-bold rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
    {age}
  </span>}
{ gender&&  <span className="text-sm sm:text-base font-medium text-gray-700 bg-gray-100 rounded-lg px-3 py-1 shadow-sm hover:bg-gray-200 transition-colors duration-200">
    {gender}
  </span>}
</div>
          <p>
            {skills && skills.length > 0
              ? skills.join(", ")
              : null}
          </p>

          {/* <div className=" card-actions justify-center m-4 -mt-3 pb-10">
            <button className="btn bg-red-600 w-1/2" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
            <button className="btn bg-green-600 w-1/2" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
          </div> */}
          <div className="flex gap-4 justify-center m-4 pb-10">
  <button className="btn bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-2 rounded-lg transition-colors duration-200 flex-1 max-w-32" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
  <button className="btn bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded-lg transition-colors duration-200 flex-1 max-w-32" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
