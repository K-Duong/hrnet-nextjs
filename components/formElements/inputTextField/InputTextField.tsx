"use client";
import { Controller, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import FormInputProps from "../FormInputProps";
import { upperFirstLetterOfString } from "@/utils/text";

export const InputTextField = <T extends FieldValues>({
  name,
  control,
  label,
  id,
  rules,
  ref,
}: FormInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          id={id}
          helperText={error ? error.message : null}
          error={!!error}
          value={value}
          fullWidth
          label={label}
          inputRef={ref}
          onChange={onChange}
          onBlur={(e) => {
            const trimedValue = e.target.value.toLowerCase().trim();
            const arrString = trimedValue.split(" ");
            console.log(arrString);

            // not allow these cases: "word- word"/ "word - word" or "word -word"
            const regex = /(?:\s+-|-\s+)/
            const newValue = regex.test(trimedValue) ? trimedValue.replace(regex,"-") : trimedValue
            console.log("new string:",  newValue);
            
            onChange(upperFirstLetterOfString(newValue));
          }}
        />
      )}
    ></Controller>
  );
};
