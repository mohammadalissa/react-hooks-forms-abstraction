import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }


  return (
    <form>
      <input
        type="text"
        onChange={handleFirstNameChange}
        value={formData.firstName}
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={formData.lastName}
      />
      <input type="checkbox" onChange={handleChange} name="admin" checked={formData.admin}>admin</input>
    </form>
  );
}

export default Form;
