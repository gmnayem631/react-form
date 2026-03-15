import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleUncontrolled = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={handleUncontrolled}>
        <input type="text" name="name" placeholder="Username" />
        <br />
        <input type="email" ref={emailRef} name="email" placeholder="Email" />
        <br />
        <input
          type="password"
          ref={passwordRef}
          name="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
