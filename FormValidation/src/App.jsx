import { useState } from "react";

function App(){
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  
  function handleChange(e){
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev, 
      [name]: value
    }));
  }

  function handleSubmit(e){
    e.preventDefault();

    const newErrors = {};

    if(!formData.name.trim()){
      newErrors.name = "Name is required";
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is required";
    }else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid Email";
    }

    if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword){
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  }


  return(
    <>
      <h1>Form Validation</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p>{errors.name}</p>
        </div>

        <div>
          <input type="text" 
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>

        <div>
          <input type="text"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>

        <div>
          <input type="text"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <p>{errors.confirmPassword}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default App;