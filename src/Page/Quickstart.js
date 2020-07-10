import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Quikstart = () => {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <TextField
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="email address"
          variant="outlined"
        />
        {/* <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        /> */}
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default Quikstart;
