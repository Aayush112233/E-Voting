import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            height: "80vh",
            width: {
              md: "70%",
              sm: "80%",
              xs: "90%",
            },
            backgroundColor: "white",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <Grid
            item
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
            md={6}
          >
            {!isRegister ? (
              <>
                <Grid
                  container
                  sx={{
                    minHeight: "60%",
                    width: {
                      md: "300px",
                      sm: "80%",
                      xs: "90%",
                    },
                    padding: 3,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography fontSize={20} fontWeight="bold" align="center">
                      Welcome Back !
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography fontSize={12} fontWeight="bold" align="end">
                      Forgot Password?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} justifyContent="center">
                    <Button variant="contained" fullWidth>
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
                <Typography color={"grey"} fontSize={12}>
                  Don't have an account yet?
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setIsRegister(true);
                    }}
                  >
                    Register Now
                  </span>
                </Typography>
              </>
            ) : (
              <>
                <Grid
                  container
                  sx={{
                    minHeight: "70%",
                    width: {
                      md: "500px",
                      sm: "80%",
                      xs: "90%",
                    },
                    padding: 2,
                    
                  }}
                >
                  <Grid container m={0} maxHeight={1} overflow={'auto'} spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        fontSize={22}
                        fontWeight="bold"
                        align="center"
                      >
                        Register a new Account
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="date"
                        label="Date of Birth"
                        type="date"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item xs={6}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Role
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="student"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="student"
                          control={<Radio />}
                          label="Student"
                        />
                        <FormControlLabel
                          value="teacher"
                          control={<Radio />}
                          label="Teacher"
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12} justifyContent="center">
                      <Button variant="contained" fullWidth>
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Typography color={"grey"} fontSize={12} mb={1}>
                  Already have an account?
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setIsRegister(false);
                    }}
                  >
                    Sign In
                  </span>
                </Typography>
              </>
            )}
          </Grid>

          <Grid
            item
            sx={{
              backgroundColor: "pink",
              display: {
                md: "block",
                xs: "none",
              },
            }}
            xs={12}
            md={6}
          >
            Appears Image
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LoginPage;
