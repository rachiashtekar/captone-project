import { useState } from "react";
import { useNavigate } from "react-router-dom";
function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSignUp = () => {
    let isErrors = false;
    if (formValues.name.trim().length === 0) {
      // trim function removes whitespaces from start and end of string
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
    if (formValues.username.trim().length === 0) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      isErrors = true;       // if there is error
    } else {
      setErrors((prev) => ({ ...prev, username: null }));   // there is no error go for the further process
    }
    if (formValues.email.trim().length === 0) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => ({ ...prev, mobile: "Mobile is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, mobile: null }));
    }
    if (formValues.checkbox === false) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "Please accept the terms and conditions",
      }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: null }));
    }
    if (!isErrors) {
      localStorage.setItem("userInfo",JSON.stringify(formValues))
      navigate("/movies");
    }
  };

  return (
    <div className="main-container">
      <div className="first-container">
        <div>
          <p className="div1-para">Discover new things on Superapp</p>
        </div>
      </div>

      <div className="second-container">
        <p className="heading">Super app</p>
        <p className="div2-line">Create your new account</p>
        <div className="form-section">
          <div>
            <div className="form-section">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input-section"
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name ? (
                <p style={{ color: "red", }}>{errors.name}</p>
              ) : (
                <></>
              )}

              <input
                type="text"
                placeholder="Username"
                className="input-section"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
              {errors.username ? (
                <p style={{ color: "red"}}>{errors.username}</p>
              ) : (
                <></>
              )}

              <input
                type="email"
                placeholder="Email"
                className="input-section"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email ? (
                <p style={{ color: "red",  }}>{errors.email}</p>
              ) : (
                <></>
              )}

              <input
                type="mobile"
                placeholder="Mobile"
                className="input-section"
                name="mobile"
                value={formValues.mobile}
                onChange={handleChange}
              />
            </div>
            {errors.mobile ? (
              <p style={{ color: "red", textAlign:"center" }}>{errors.mobile}</p>
            ) : (
              <></>
            )}

            <div className="checkbox-section">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="checkmark"
                value={formValues.checkbox}
                onChange={handleChange}
              />

              <label htmlFor="checkbox">
                <p className="para">Share my registration data with Superapp</p>
              </label>
             
            </div>
            {errors.checkbox ? (
              <p style={{ color: "red", position: "absolute", top:"470px", left:"1030px" }}>{errors.checkbox}</p>
            ) : (
              <></>
            )}

            <button className="btn" onClick={handleSignUp}>SIGN UP</button>
          </div>
          <div className="para1">
            <p>
              By clicking on Sign up. you agree to Superapp{" "}
              <span>Terms and Conditions of Use</span>
            </p>
          </div>
          <div className="para2">
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;
