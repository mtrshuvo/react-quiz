import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Button from "../signupComponent/Button";
import CheckBox from "../signupComponent/CheckBox";
import Form from "../signupComponent/Form";
import TextInput from "../signupComponent/TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setChecked] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signUp } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    if (password !== confirmPassword) {
      return setError("Password didn't match");
    }
    if (check !== true) {
      return setError("Please Check terms and conditions");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="email"
        placeholder="Enter Email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirm Password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        text="I agree to the Terms & Conditions"
        value={check}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="login">Login</Link>
        instead.
      </div>
    </Form>
  );
}
