import { Button, TextField } from "@material-ui/core";
import { Form, withFormik } from "formik";
import React from "react";

function Login(props) {

    const { handleBlur, errors, handleSubmit, handleChange, values, isValid } =props;
  return (
    <div className="flex  h-1/2 justify-center items-center  ">
      <Form onSubmit ={handleSubmit} >
        <TextField
          size="small"
          variant="outlined"
          title="email"
          label="Email"
          helperText = {errors.email}
          required
          value = {values.email}
          onChange = {handleChange}
          onBlur = {handleBlur}
          name = "email"
        />
        <br />
        <TextField
          size="small"
          variant="outlined"
          title="password"
          label="Password"
          helperText = {errors.email}
          required
          value = {values.password}
          onChange = {handleChange}
          onBlur = {handleBlur}
          name = "password"
        />
        <br />
        <Button  type='sumbit' variant="contained" color="secondary">
    
          Login
        </Button>
      </Form>
    </div>
  );
}

const LoginFrom = withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
    };
  },
  handleSubmit: (data) => {
    console.log("data is : ", data);
  },
})(Login);

export default LoginFrom;
