import React, { useState } from "react";

const ControlledField = () => {
  const handleControlledField = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  const handlePasswordOnChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleControlledField}>
        <input type="email" name="email" placeholder="A Valid Email" />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter a Password"
          onChange={handlePasswordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
