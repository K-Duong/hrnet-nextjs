import { FieldValues, Path, RegisterOptions, type Control} from "react-hook-form";
import {  TextFieldProps } from "@mui/material";

export default interface FormInputProps<T extends FieldValues> extends Omit<TextFieldProps, "name"> {
name: Path<T>
control?: Control<T>
label?: string,
id: string,
rules?: RegisterOptions<T, Path<T>>

}