import { Button, TextField } from "@material-ui/core";
import { Form, withFormik } from "formik";
import React from "react";
import * as Yup from "yup";
 


function Register(props) {

    const { handleBlur, errors, handleSubmit, handleChange, values, isValid } =props;
  return (
    <div>
      <Form onSubmit = {handleSubmit}>
        <TextField
          className="m-3"
          size="small"
          variant="outlined"
          title="Name"
          label="Full Name"
          helperText = {errors.fullName}
          required
          value = {values.fullName}
          onChange = {handleChange}
          onBlur = {handleBlur}
          name = "fullName"
          error = {errors.fullName}
        />
        <br />
        <TextField
          className="m-5"
          size="small"
          variant="outlined"
          title="Email"
          label="Email"
          helperText = {errors.email}
          required
          value = {values.email}
          onChange = {handleChange}
          onBlur = {handleBlur}
          name = "email"
          error = {errors.email}
        />
        <br />
        <TextField
          size="small"
          variant="outlined"
          title="Password"
          label="Password"
          helperText = {errors.email}
          required
          value = {values.password}
          onChange = {handleChange}
          onBlur = {handleBlur}
          name = "password"
          error = {errors.password}
        />

        <br />
        <Button type='sumbit' variant="contained" color="secondary">
          
          Login
        </Button>
      </Form>
    </div>
  );
}

const RegisterFrom = withFormik({
  mapPropsToValues: () => {
    return {
      fullName: "",
      email: "",
      password: "",

    };
  },
  validationSchema : Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    password : Yup.string().required(),
   

   
  }),
  handleSubmit: (data) => {console.log("The data is : ", data)},

})(Register);

export default RegisterFrom;
