import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
// console.log(feed);

  const getFeed = async () => {
    if (!feed) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      // console.log("Feed data from API:", res?.data?.data); // 🔍 Add this
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  // return (
  //   feed && (
  //     <div className="flex justify-center my-10">
  //       <UserCard user={feed.data[0]} />
  //     </div>
  //   )
  // );



return (
  <div className="flex justify-center my-10">
   {Array.isArray(feed) && feed.length > 0 ? (
  <UserCard user={feed[0]} />
) : (
  <div className="text-center text-gray-500">No More Dosts Around!</div>
)}
  </div>
);
};

export default Feed;
