import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, skills, age, photoUrl, about, gender } = user;

  return (
    <div>
      <div className="card bg-base-300 w-84 h-[min] shadow-sm">
        {/* <figure> */}
          <img className="!h-[60%] rounded-2xl" src={photoUrl} alt="user-photo" />
        {/* </figure> */}
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{about}</p>
          <p>{age + " "+ gender}</p>
          {/* <p>{skills.seperatedBy(",")}</p> */}
          <div className="card-actions justify-center m-4">
            <button className="btn bg-red-600 ">Ignore</button>
            <button className="btn bg-green-600">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
