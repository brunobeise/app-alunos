import { Alert, Box, CircularProgress, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { UserDTO, listUsers } from "../config/services/user.service";
import UserCard from "../components/UserCard";
import Navigation from "../components/Navigation";

const Home: React.FC = () => {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<UserDTO[]>([]);

  useEffect(() => {
    listUsers()
      .then((result) => {
        console.log("caiu no then");
        setUsers(result.users);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Navigation />
      <Typography component="h2" variant="h2" textAlign="center">
        Usuários
      </Typography>

      <Box
        display={"flex"}
        marginTop={"2rem"}
        textAlign={"center"}
        justifyContent={"center"}
        style={{ flexWrap: "wrap" }}
        gap={5}
      >
        {error ? <Alert severity="error">{error}</Alert> : <></>}

        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </Box>
    </>
  );
};

export default Home;
