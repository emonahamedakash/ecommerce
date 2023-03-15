import React from "react";
import "./EditProfile.css";
import { useAuth } from "../../context/AuthContext";
const EditProfile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="editProfile">
      <form>
        <header>
          <h2>Edit Profile</h2>
        </header>
        <div>
          <label className="form-label">First Name</label>
          <div>
            <input
              name="First Name"
              defaultValue={currentUser.firstName}
              type="text"
              className="inputField"
            />
          </div>
        </div>
        <div>
          <label className="form-label">Last Name</label>
          <div>
            <input
              name="Last Name"
              defaultValue={currentUser.lastName}
              type="text"
              className="inputField"
            />
          </div>
        </div>
        <div>
          <label className="form-label">Email</label>
          <div>
            <input
              name="Email"
              defaultValue={currentUser.email}
              type="email"
              className="inputField"
              disabled
            />
          </div>
        </div>
        <div>
          <label className="form-label">Old Password</label>
          <div>
            <input
              name="opassword"
              placeholder="Old password"
              type="password"
              className="inputField"
            />
          </div>
        </div>
        <div>
          <label className="form-label">New Password</label>
          <div>
            <input
              name="npassword"
              placeholder="New password"
              type="password"
              className="inputField"
            />
          </div>
        </div>
        <div>
          <label className="form-label">Confirm password</label>
          <div>
            <input
              name="cpassword"
              placeholder="Confirm Password"
              type="password"
              className="inputField"
            />
          </div>
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-warning formSubmit"
            onClick={() => alert("Profile Updated")}
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
