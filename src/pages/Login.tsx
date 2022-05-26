import { FC, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { signInGoogle } from "../services/AuthService";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase-config";

const Login: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logEvent(analytics, "login_visited");
  }, [])

  function handleClick() {
    const user = signInGoogle();
    user.then(() => {
      navigate("/#/blog");
    });
  }

  return (
    <Container className="my-4 text-center">
      <Button onClick={handleClick}>Sign In with Google</Button>
    </Container>
  );
};
export default Login;
