import { object, string} from "yup";



export default object({
  body: object({
    email: string()
      .email("must be a valid email format")
      .required("email is required"),
    password: string().required("password is required")
  }),
});

// password: mixed().required("password is required").test(
//     'password-length',
//     'Password must be at least 6 characters long',
//     (value: any) => {
//       if (!value) return false; // handle empty values
//       return typeof value === 'string' && value.length >= 6;
//     }
//   ),