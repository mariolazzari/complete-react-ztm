import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import "./SignUpForm.scss";
import Button from "../../components/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (ex) {
      if (ex.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.error(ex.message);
      }
    }
  };

  const onChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput
          label="Display name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          required
        />

        <FormInput
          label="Email"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          required
        />

        <FormInput
          label="Password"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          required
        />

        <FormInput
          label="Confirm password"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          required
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUp;
