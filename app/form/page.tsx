"use client";
import { InputTextField } from "@/components/formElements/inputTextField/InputTextField";
import { Button, Paper, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./form.module.css";

interface FormValues {
  firstName: string;
  lastName: string;
  test: string
}
const defaultValues = {
  firstName: "",
  lastName: "",
  test: "",
};

const FormPage = () => {
  const { handleSubmit, register, reset, control } =
    useForm<FormValues>({
      defaultValues: defaultValues,
    });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  }; 

  return (
    <Paper
      sx={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "30px 300px",
        width: "60%",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {" "}
        Form Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <section className={styles.inputField}>
          <label htmlFor="firstName">First Name: </label>
          <InputTextField
            id="firstName"
            name="firstName"
            control={control}
            label="First name"
            rules={validationSchema.firstName}
          />
        </section>
        <section className={styles.inputField}>
          <label htmlFor="LastName">Last Name: </label>
          <InputTextField
            id="LastName"
            name="lastName"
            control={control}
            label="Last name"
            rules={validationSchema.lastName}
          />
        </section>

        
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default FormPage;

const validationSchema = {
  firstName: {
    required: "Input can not be empty",
    pattern: { value: /^(?=.*[A-Za-z])(?!.*--)(?!.*-$)[A-Za-z -]+$/, message: "Only valid name is allowed" },
  },
  lastName: {
    required: "Input can not be empty",
    pattern: { value: /^(?=.*[A-Za-z])(?!.*--)(?!.*-$)[A-Za-z -]+$/, message: "Only valid name is allowed" },

    },
};
