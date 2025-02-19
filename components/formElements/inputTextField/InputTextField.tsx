"use client";
import { Controller, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import FormInputProps from "../FormInputProps";

export const InputTextField = <T extends FieldValues>({
  name,
  control,
  label,
  id,
}: FormInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          id={id}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          // variant="outlined"
        />
      )}
    ></Controller>
  );
};
