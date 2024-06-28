import { date, number, object, string } from "yup";

export default object({
  body: object({
    name: string().typeError('name must be a string').required("name is required"),
    email: string()
      .email("must be a valid email format")
      .required("email is required"),
    age: number().required("age is required"),
    dob: date().required("date is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  }),
});

// password: mixed()
//       .required("Password is required")
//       .test(
//         "password-length",
//         "Password must be at least 6 characters long",
//         (value: any) => {
//           if (!value) return false; // handle empty values
//           if (typeof value === "number") {
//             return true; // numbers are considered valid
//           } else if (typeof value === "string") {
//             return value.length >= 6; // strings must have at least 6 characters
//           }
//           return false; // other types are invalid
//         }
//       )
