"use client";
import { InputTextField } from "@/components/formElements/inputTextField/InputTextField";
import { Paper, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./form.module.css";

interface FormValues {
  firstName: string;
  lastName: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}
const defaultValues = {
  firstName: "",
  lastName: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};

const FormPage = () => {
  const { handleSubmit, register, reset, control, setValue } =
    useForm<FormValues>({
      defaultValues: defaultValues,
    });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

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
          />
        </section>
        <section className={styles.inputField}>
          <label htmlFor="LastName">Last Name: </label>
          <InputTextField
            id="LastName"
            name="lastName"
            control={control}
            label="Last name"
          />
        </section>
      </form>
    </Paper>
  );
};

export default FormPage;
