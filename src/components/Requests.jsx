import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) {
    return (
      <h1 className="text-xl text-center text-white font-bold mt-10 sm:text-4xl">
        No Requests Found.
      </h1>
    );
  }

  return (
    requests && (
      <div className="flex flex-col justify-center mt-10 mx-auto sm:w-1/3">
        <h1 className="text-xl sm:text-4xl text-center">
          Pending Dosti Requests
        </h1>
        {console.log(requests)}
        {requests.map((request) => {
          const { firstName, lastName, age, about, photoUrl, skills, gender } =
            request.fromUserId;
          return (
            <>
              <div
                className="flex m-4 p-4 rounded-sm bg-base-300 "
                key={request._id}
              >
                <div className="mx-2 w-30">
                  <img
                    alt="photo"
                    className="h-30 w-30 rounded-lg "
                    src={photoUrl}
                  />
                </div>

                <div>
                  <h2 className="text-green-500 font-bold text-l sm:text-xl">
                    {firstName + " " + lastName}
                  </h2>
                  <p className="text-sm">{about}</p>
                  {age && gender && (
                    <p className="text-sm">{age + " " + gender}</p>
                  )}
                  {skills && <p className="text-sm">{skills.join(" , ")}</p>}
                </div>
              </div>
              <div className="flex w-full -mt-4 justify-around px-4">
                <button className="btn btn-error w-1/2">Reject</button>
                <button className="btn btn-success w-1/2">Accept</button>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Requests;
