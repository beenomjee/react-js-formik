import * as Yup from "yup";

export default Yup.object({
  name: Yup.string().min(4).max(30).required("Name is required."),
  email: Yup.string(3)
    .email("Must be a valid email.")
    .required("Email is required."),
  pass: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/[a-z]/, "Password must contain at least one small letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .min(8, "Passwords must be at least 8 characters.")
    .required("Password is required."),
  cPass: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/[a-z]/, "Password must contain at least one small letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .min(8, "Passwords must be at least 8 characters.")
    .required("Confirm Password is required")
    .oneOf([Yup.ref("pass")], "Password doesn't match"),
});
