import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signup } from "../config/services/auth.service";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // CRIAR A LÓGICA DE CADASTRO DO USER
    const user = {
      username: ev.currentTarget.username.value,
      password: ev.currentTarget["password"].value,
    };
    setLoading(true);
    const resposta = await signup(user);
    setLoading(false);

    // "", 0, undefined, null, false => falsy
    if (!resposta.ok && resposta.code !== 201) {
      alert(resposta.message);
      return;
    }

    // momento/condição de login efetuado com sucesso de acordo com a API
    if (resposta.code === 201) {
      navigate("/");
    }
  };

  return (
    <Box
      component="main"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box component="section">
        <Typography component="h1" variant="h4" align="center">
          Cadastro
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            margin="dense"
          />

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="dense"
          />

          <LoadingButton
            loading={true}
            variant="contained"
            color="success"
            fullWidth
            size="large"
            type="submit"
          >
            Cadastrar-se
          </LoadingButton>
        </form>
        <Typography variant="body2" align="center" marginY="18px">
          Já possui conta? <Link to="/">Entrar</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Cadastro;
