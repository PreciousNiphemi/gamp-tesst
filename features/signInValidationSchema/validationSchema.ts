import * as Yup from "yup";
import { Fields } from "../../constants/signInConstants";

export const signInValidation = () => {
  return Yup.object().shape({
    [Fields.EMAIL]: Yup.string()
      .email(`That doesn't look like a valid email`)
      .required("Did you forget to enter your email?"),
    [Fields.PASSWORD]: Yup.string().required("Please enter a password"),
  });
};
