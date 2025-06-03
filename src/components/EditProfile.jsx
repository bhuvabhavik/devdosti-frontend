import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [skills, setSkills] = useState(user.skills);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    // clear existing errors if any
    setErrorMsg("");

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about, skills },
        { withCredentials: true }
      );
      // console.log(res);
      dispatch(addUser(res?.data?.data)); // update the store with new user
      setShowToast(true);
      setTimeout(()=>{
        setShowToast(false);
      },3000)


    } catch (err) {
      console.log(err);

      setErrorMsg(err.response.data);
    }
  };

  return (
    <div className="md:flex justify-center md:mx-10 pb-20">
      <div className="flex justify-center my-10 mx-10">
        <div className="card bg-base-300 w-96 shadow-sm ">
          <div className="card-body">
            <h2 className="card-title flex justify-center">Edit Profile</h2>
            <p className="hidden md:block text-purple-600 text-xl text-center">
              Check the preview right side.
            </p>

            <div>
              {/* //firstname */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  className="input"
                  value={firstName}
                  placeholder="Eg: Bhavik"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>

              {/* // lastName */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  className="input"
                  value={lastName}
                  placeholder="Eg: Bhuva"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>

              {/* photo url */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo URL</legend>
                <input
                  type="text"
                  className="input"
                  value={photoUrl}
                  placeholder="Eg : https://bhuvabhavik.com/image.jpeg"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="number"
                  className="input"
                  value={age}
                  placeholder="Eg : 24"
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>

              {/* <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  type="text"
                  className="input"
                  value={gender}
                  placeholder="Eg : Male"
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset> */}
              <fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <select
    className="input"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
  >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
</fieldset>

              {/* <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <textarea
                // wrap="true"
                   className="input p-3"
                // className="w-full  p-3 rounded border border-gray-300 resize-none focus:outline-none focus:ring focus:border-blue-300"
                  value={about}
                  placeholder="Eg : I am a software engineer"
                  onChange={(e) => setAbout(e.target.value)}
                  rows={4}
                  maxLength={130}
                />
              </fieldset> */}
              <fieldset className="fieldset">
  <legend className="fieldset-legend">About</legend>
  <textarea
    className="min-w-[10rem] md:w-[95%] p-3 text-sm rounded border border-gray-300 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-inner"
    value={about}
    placeholder="Eg : I am a software engineer"
    onChange={(e) => setAbout(e.target.value)}
    rows={3}
    maxLength={120}
  />
  <p className="text-sm text-right text-gray-500">{about.length??0}/80 characters</p>
</fieldset>

              {/* <fieldset className="fieldset">
                <legend className="fieldset-legend">Skills</legend>
                <input
                  type="text"
                  className="input"
                  value={skills}
                  placeholder="Eg : React,Javascript,Angular"
                  onChange={(e) =>
                    setSkills(
                      e.target.value.split(",").map((skill) => skill.trim())
                    )
                  }
                />
              </fieldset>
              <p className="text-green-300">
                Write skills seperated by comma ( , )
              </p> */}
            </div>

            <p className="text-red-500">{errorMsg}</p>
            <div className="card-actions justify-center mt-5">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
              <p className="block md:hidden text-purple-600 text-center">
                Check the preview below.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about, skills }}
        />
      </div>

      {/* //toast */}
     {showToast && ( <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Profile saved successfully.</span>
        </div> 
      </div>)}



    </div>
  );
};

export default EditProfile;
