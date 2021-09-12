import * as yup from "yup";
export const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    address: yup.string().required(),
    gender: yup.string().required(),
});