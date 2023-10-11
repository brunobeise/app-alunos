import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../config/services/auth.service";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // currentTarget => elemento da dom que disparou o evento
    // document.getElementById('username').value
    const user = {
      username: ev.currentTarget.username.value,
      password: ev.currentTarget["password"].value,
    };

    console.log(user);

    const resposta = await login(user);

    // "", 0, undefined, null, false => falsy
    if (!resposta.ok && resposta.code !== 200) {
      alert(resposta.message);
      return;
    }

    // momento/condição de login efetuado com sucesso de acordo com a API
    if (resposta.code === 200) {
      alert(`Deu bom! ${resposta.message}`);

      localStorage.setItem("token", resposta.data.token);

      navigate("/home");
    }

    // RESET DOS CAMPOS
    ev.currentTarget["username"].value = "";
    ev.currentTarget["password"].value = "";
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
          Login
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

          <Button
            variant="contained"
            color="success"
            fullWidth
            size="large"
            type="submit"
          >
            Entrar
          </Button>
        </form>
        <Typography variant="body2" align="center" marginY="18px">
          Não possui conta? <Link to="/signup">Cadastre-se</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
