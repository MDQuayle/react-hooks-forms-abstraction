import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    andmin: false
  });
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData)
  }
  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    const value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
