import React, { useState } from "react";
import { signUp } from "../../utilities/users-service";
import "./SignUpForm.css";

export default function SignUpForm({ setUser, handleSwitchForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const user = await signUp(formData);
      setUser(user);
    } catch {
      setFormData({ ...formData, error: "sign up failed - try again" });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div className="card border-0 rounded-4 signUpForm">
      <div className="card-body p-3 p-md-4 p-xl-5">
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <h3>Sign up</h3>
              <p>
                Already have an account{" "}
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={handleSwitchForm}
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="row gy-3 overflow-hidden">
            {/* <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                <label htmlFor="name" className="form-label">
                  Name
                </label>
              </div>
            </div> */}
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="confirm"
                  value={formData.confirm}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
                <label htmlFor="confirm" className="form-label">
                  Confirm Password
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="d-grid">
                <button
                  className="btn btn-dark btn-lg"
                  type="submit"
                  disabled={disable}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}
