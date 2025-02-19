import { FieldValues, Path, type Control} from "react-hook-form";
import {  TextFieldProps } from "@mui/material";

export default interface FormInputProps<T extends FieldValues> extends Omit<TextFieldProps, "name"> {
name: Path<T>
control?: Control<T, object>
label?: string
}