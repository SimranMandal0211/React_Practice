import { useState } from "react";

function App(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });
  const [step, setStep] = useState(1);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(){
    alert("Form submitted succesfully");
  }

  return(
    <>
      <h1>Wizard</h1>

      <h2>Step {step}</h2>

    {step === 1 && (
      <>
        <input type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />

        <input type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <button onClick={() => setStep((prev) => prev + 1)}>Next</button>
      </>
    )}

    {step === 2 && (
      <>
        <input type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <input type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <button onClick={() => setStep((prev) => prev - 1)}>Back</button>

        <button onClick={() => setStep((prev) => prev + 1)}>Next</button>
      </>
    )}

    {step === 3 && (
      <>
        <input type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <br />

        <input type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <br />

        <button onClick={() => setStep((prev) => prev - 1)}>Back</button>

        <button onClick={handleSubmit}>Submit</button>
      </>
    )}

      
    </>
  )
}

export default App;