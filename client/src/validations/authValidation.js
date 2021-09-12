import * as yup from "yup";
export const validationSignUpSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    address: yup.string().required(),
    gender: yup.string().required(),
    password: yup.string()
    .required('No password provided.') 
    .min(6, 'Password is too short - should be 6 chars minimum.'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
export const validationLogInSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});