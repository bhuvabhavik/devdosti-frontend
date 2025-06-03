import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections) || [];

  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    // console.log(res?.data?.data);
    dispatch(addConnections(res?.data?.data));
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  //   console.log(connections);

  if (connections.length === 0) {
    return (
      <h1 className="text-xl text-center text-white font-bold mt-10 sm:text-4xl">
        No Dost Found.
      </h1>
    );
  }

  return (
    connections && ( 
      <div className="pb-25 flex flex-col justify-center my-10 mx-auto sm:w-1/2">
        <h1 className="text-xl sm:text-4xl text-center">All Dosts</h1>

        {connections.map((connection) => {
          const { firstName, lastName, age, about, photoUrl, skills, gender } =
            connection;
          return (

            <div className="flex m-4 p-4 rounded-sm bg-base-300 " key={connection._id}>
              <div className="mx-2">
                <img
                  alt="photo"
                  className="h-30 rounded-lg "
                  src={photoUrl}
                />
              </div>

              <div>
                <h2 className="text-green-500 font-bold text-l sm:text-xl">{firstName  + " " + lastName}</h2>
                <p className="text-sm">{about}</p>
                {age&& gender &&  <p className="text-sm">{age + " " + gender}</p>}
                {skills&&  <p className="text-sm">{skills.join(" , ")}</p>}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Connections;
