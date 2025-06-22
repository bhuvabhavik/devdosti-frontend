import axios from "axios";
import {BASE_URL} from "../utils/constants";

const Premium = () => {
  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );
    console.log(order)

    // it should open the razorpay dialogbox.

    const {notes,amount,currency,keyId,orderId} = order.data;
    var options = {
    "key": keyId, 
    amount, 
    currency,
    "name": "Dev Dosti",
    "description": "Find your Developer dost ❤️",
    "image": "https://hbrtech.in/assets/bhavikbhuva-D6B7knDd.jpeg",
    "order_id": orderId, 
    "prefill": { 
        "name": notes.firstName + " " + notes.lastName, 
        "email": notes.emailId,
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#15191e"
    }
};
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };



  return (
    <div>
      <div className="m-10">
        <div className="flex w-full">
          <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
            <h1 className="font-bold text-2xl">Silver Membership</h1>
            <ul>
              <li>- chat feature</li>
              <li>- 100 connection request per day</li>
              <li>- BlueTick ✅</li>
              <li>- chat feature</li>
              <li>- 3 months</li>
            </ul>
            <button
              className="btn btn-secondary"
              onClick={() => handleBuyClick("silver")}
            >
              Buy Silver{" "}
            </button>
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
            <h1 className="font-bold text-2xl">Gold Membership</h1>
            <ul>
              <li>- chat feature</li>
              <li>- infinite connection request per day</li>
              <li>- BlueTick ✅</li>
              <li>- chat feature</li>
              <li>- 6 months</li>
            </ul>
            <button
              className="btn btn-primary"
              onClick={() => handleBuyClick("gold")}
            >
              Buy Gold{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
