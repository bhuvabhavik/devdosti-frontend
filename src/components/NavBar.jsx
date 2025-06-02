import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   
  

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        dispatch(removeUser()); // remove user from redux store
        return navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-base-300  shadow-sm">
      {/* <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl sm:text-2xl ml-3">
         DevDosti
        </Link>
      </div> */}
      <div className="flex-1">
  <Link 
    to="/" 
    className="text-2xl sm:text-3xl ml-3 font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:to-orange-500 transition-all duration-300"
  >
    Dev<span className="text-white"> Dosti</span>
  </Link>
</div>
      {user && (
        <div className="flex gap-1">
          <div className="text-sm sm:text-lg flex items-center px-4 items-right">
            {"Welcome, " + user.firstName}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={"/connections"}>Dosts</Link>
              </li>
               <li>
                <Link to={"/request"}>Request for Dosti</Link>
              </li>
              <li>
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
