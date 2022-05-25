import { FC } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { signInGoogle } from "../services/AuthService";

const Login: FC = () => {
  const navigate = useNavigate();

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
