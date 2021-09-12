import * as yup from "yup";
export const validationSchema = yup.object().shape({
    password: yup.string()
    .required() 
    .min(6, 'Password is too short - should be 6 chars minimum.'),
    newPassword: yup.string()
    .required() 
    .min(6, 'Password is too short - should be 6 chars minimum.'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required() ,
  
});