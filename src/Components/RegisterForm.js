import { useState } from "react";
function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    
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
          <form >
            <div className="form-section">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input-section"
                value={formValues.name}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Username"
                className="input-section"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />

              <input
                type="email"
                placeholder="Email"
                className="input-section"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />

              <input
                type="mobile"
                placeholder="Mobile"
                className="input-section"
                name="mobile"
                value={formValues.mobile}
                onChange={handleChange}
              />
            </div>

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
            < p className="para">Share my registration data with Superapp</p>   
         
              </label>
            </div>
          
            <button >SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterForm;
