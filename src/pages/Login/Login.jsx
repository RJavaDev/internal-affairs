import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import Visibility_off from "../../assets/imgs/visibility_off";
import Visiblity_on from "../../assets/imgs/Visiblity_on";

import { useContext } from "react";
import { userContext } from "../../components/context/userContext";
const LoginUser = () => {
  const { useStates, usePasswords } = useContext(userContext);

  function UserForm(data) {
    useStates(data.Login);
    usePasswords(data.Password);

    // console.log();
  }

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      Login: "",
      Password: "",
    },
  });

  return (
    <div className='Login w-50 p-4 ps-5 pe-5 shadow border me-auto ms-auto mt-5 '>
      <h3 className='text-center w-100 mb-3'>Login</h3>
      <form onSubmit={handleSubmit(UserForm)} autoComplete='off'>
        <TextField
          {...register("Login", { required: true })}
          className='w-100 d-block ms-auto me-auto mb-3'
          fullWidth
          label='User name'
          id='one'
        />

        <FormControl
          sx={{ m: 1, width: "100%", marginLeft: "auto", marginRight: "auto" }}
          variant='outlined'
        >
          <InputLabel
            className='w-50 d-block ms-auto me-auto  '
            htmlFor='outlined-adornment-password'
          >
            Password
          </InputLabel>
          <OutlinedInput
            autoComplete='off'
            id='outlined-adornment-password'
            name='current-password'
            type={showPassword ? "text" : "password"}
            {...register("Password", { required: true })}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <Visibility_off /> : <Visiblity_on />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>
        <Button variant='contained' type='submit'>
          Tasdiqlash
        </Button>
      </form>
    </div>
  );
};

export default LoginUser;
