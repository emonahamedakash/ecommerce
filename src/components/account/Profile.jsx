import React, { useState } from "react";
import "./Profile.css";
import EditProfile from "./EditProfile";
import Orders from "./Orders";
import Wallet from "./Wallet";
import "react-toastify/dist/ReactToastify.css";
export const Profile = () => {
  const [comp, setComp] = useState(<EditProfile />);
  return (
    <div className="">
      <div className="profile">
        <div className="profileMenu">
          <button className="whiteBtn" onClick={() => setComp(<EditProfile />)}>
            Edit Profile
          </button>
          <button className="whiteBtn" onClick={() => setComp(<Orders />)}>
            Orders
          </button>
          <button className="whiteBtn" onClick={() => setComp(<Wallet />)}>
            Wallet
          </button>
        </div>
        <div className="profileComp">{comp}</div>
      </div>
    </div>
  );
};
export default Profile;
