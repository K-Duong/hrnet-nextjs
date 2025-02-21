"use client";
import {
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, FieldValues } from "react-hook-form";
import FormInputProps from "../FormInputProps";
import React from "react";
const InputDatePicker = <T extends FieldValues>({
  name,
  id,
  control,
  rules,
  placeholder,
}: FormInputProps<T>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <DatePicker
            value={value}
            onChange={onChange}
            // onError={(error) => console.log(e)}
            slotProps={{
              textField: {
                id,
                placeholder,
                helperText: error ? error.message : null,
                error: !!error,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default InputDatePicker;
