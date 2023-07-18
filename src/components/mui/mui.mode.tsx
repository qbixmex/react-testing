import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Users } from "../users";

const MuiMode = () => {

  const theme = useTheme();

  return (
    <Box>
      <Typography
        component="h1"
        variant="h1"
        sx={{ textAlign: 'center', mt: 2 }}
      >
        {`${theme.palette.mode} mode`}
      </Typography>
      <Users />
    </Box>
  );

};

export default MuiMode;
