import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import { Form, withFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";



function FormUI(props) {
  let history = useHistory();
  const { handleBlur, errors, handleSubmit, handleChange, values, isValid } =
    props;
  return (
    <div>

    <Form onSubmit = {handleSubmit}>       
      <TextField 
      required
        type="text"
        size="small"
        variant="standard"
        title="firstName"
        label="First Name"
        helperText={errors.firstName}
        required
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        name="firstName"
      />

      <TextField
      required
        type="text"
        size="small"
        variant="standard"
        title="lastName"
        label="lastName"
        helperText={errors.lastName}
        required
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        name="lastName"
      />
      <br />
      <FormLabel>Date of Birth</FormLabel>
      <TextField
        type="date"
        size="small"
        variant="standard"
        title="dob"
        
        helperText={errors.dob}
        required
        value={values.dob}
        onChange={handleChange}
        onBlur={handleBlur}
        name="dob"
      />
      <TextField
        type="text"
        size="small"
        variant="standard"
        title="birthPlace"
        label="Birth Place"
        helperText={errors.birthPlace}
        required
        value={values.birthPlace}
        onChange={handleChange}
        onBlur={handleBlur}
        name="birthPlace"
      />
      <br />
      <FormLabel>Joinning date</FormLabel>
      <TextField
      required
        type="date"
        size="small"
        variant="standard"
        title="joinDate"
        label="Joinning Date"
        helperText={errors.joinDate}
        required
        value={values.joinDate}
        onChange={handleChange}
        onBlur={handleBlur}
        name="joinDate"
      />
      <TextField
      required
        type="number"
        size="small"
        variant="standard"
        title="aadharCardNumber"
        label="Addhar Card Number"
        helperText={errors.aadharCardNumber}
        required
        value={values.aadharCardNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        name="aadharCardNumber"
      />
      <br />
      <TextField
      required
        type="text"
        size="small"
        variant="standard"
        title="panCardNumber"
        label="panCardNumber"
        helperText={errors.panCardNumber}
        required
        value={values.panCardNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        name="panCardNumber"
      />

      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        required
        name="gender"
        value={values.gender}
        onChange={handleChange}
        row
        aria-label="gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>

      {/* <TextField 
           type = 'text'
           size="small"
           variant="standard"
           title="gender"
           label="gender"
           helperText = {errors.gender}
           required
           value = {values.gender}
           onChange = {handleChange}
           onBlur = {handleBlur}
           name = "gender"
           /> */}
      <br />
      <TextField
      required
        type="text"
        size="small"
        variant="standard"
        title="email"
        label="Email"
        helperText={errors.email}
        required
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
      />
      <TextField
      required
        type="text"
        size="small"
        variant="standard"
        title="phoneNumber"
        label="phoneNumber"
        helperText={errors.phoneNumber}
        required
        value={values.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        name="phoneNumber"
      />
      <br />
      <TextField
        type="text"
        size="small"
        variant="standard"
        title="salary"
        label="salary"
        helperText={errors.salary}
        required
        value={values.salary}
        onChange={handleChange}
        onBlur={handleBlur}
        name="salary"
      />
      <br />
      {/* <TextField
        type="text"
        size="small"
        variant="standard"
        title="maritalStatus"
        label="maritalStatus"
        helperText={errors.maritalStatus}
        required
        value={values.maritalStatus}
        onChange={handleChange}
        onBlur={handleBlur}
        name="maritalStatus"
      /> */}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
        <Select
          name = {'maritalStatus'}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.maritalStatus}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Single"}>Single</MenuItem>
          <MenuItem value={"Married"}>Married</MenuItem>
          <MenuItem value={"Divorced"}>Divorced</MenuItem>
          <MenuItem value={"Widowed"}>Widowed</MenuItem>
        </Select>
      </FormControl>

      <Button variant='contained' type='sumbit' >Sumbit Form</Button>

      </Form>
    </div>
  );
}



const AddEmployeeFrom = withFormik({
  mapPropsToValues: () => {
    return {
      firstName: "",
      lastName: "",
      dob: "",
      birthPlace: "",
      joinDate: "",
      aadharCardNumber: "",
      panCardNumber: "",
      gender: "",
      phoneNumber: "",
      email: "",
      salary: "",
      maritalStatus: "",
      country: "",
      state: "",
      district: "",
      zipcode: "",
    };
  },
  handleSubmit: (data) => {
    console.log("data is :", data);
  },
})(FormUI);

export default AddEmployeeFrom;
