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
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormValues({ ...formValues, [e.target.name]: value });
  };

  return (
    <div className="main-container">
      {/* ... (your existing code) ... */}
      <div className="checkbox-section">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          className="checkmark"
          checked={formValues.checkbox}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">
          <p className="para">Share my registration data with Superapp</p>
        </label>
      </div>
      {/* ... (your existing code) ... */}
    </div>
  );
}

export default RegisterForm;
