import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    await createAuthUserWithEmailAndPassword(email, password);
    console.log(formFields);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with email and password</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Display name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          required
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />

        <label htmlFor="">Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
