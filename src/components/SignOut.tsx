import { FC, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { signOut } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export const SignOut: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    signOut().then(() => {
      navigate("/");
    });
  }, [navigate]);

  return (
    <Container className="text-center">
      <Spinner animation={"border"} />
    </Container>
  );
};
