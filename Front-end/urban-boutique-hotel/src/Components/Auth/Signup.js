import { useNavigate } from "react-router-dom";

// MUI
import countries from "../../Global/Components/CountryCodes";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({
  palette: {
    primary: {
      light: "#2a3249",
      main: "#2a3249",
      contrastText: "#fff",
    },
  },
});

const Signup = () => {
  const navigation = useNavigate();

  function handleSubmit() {
    navigation("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Add hotel logo here */}
          <h1 className="no-cursor">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box sx={{ display: "flex" }}>
              <TextField
                margin="normal"
                id="phone_number_country_code"
                label="Country Code"
                select
                value=""
                onChange={() => {}}
                sx={{ minWidth: 100, mr: 1 }}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      style: {
                        maxHeight: "300px",
                        width: "250px",
                        fontSize: "13px",
                      },
                    },
                  },
                }}
              >
                {/* You can add more countries and codes as needed */}
                {countries.map((item) => {
                  return (
                    <MenuItem
                      key={item.dial_code}
                      value={item.dial_code}
                      sx={{
                        width: "100%",
                        height: "30px",
                        fontSize: "13px",
                      }}
                    >
                      {item.dial_code} ({item.name})
                    </MenuItem>
                  );
                })}
              </TextField>

              <TextField
                margin="normal"
                fullWidth
                id="phone_number"
                label="Phone Number"
                type="number"
                InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                autoComplete="phone_number"
                autoFocus
              />
            </Box>
            <TextField
              margin="normal"
              fullWidth
              id="dob"
              label="Date of Birth"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              autoComplete="dob"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              select
              id="gender"
              label="Gender"
              value=""
              onChange={() => {}}
              autoFocus
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>

            <button type="submit" className="btn-primary">
              Sign up
            </button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
