import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleControlledField = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  const handlePasswordOnChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
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
          defaultValue={password}
          onChange={handlePasswordOnChange}
        />
        <p style={{ color: "red" }}>
          <small>{error}</small>
        </p>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
