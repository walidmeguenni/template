import * as yup from "yup";
export const validationSchema = yup.object().shape({
    name: yup.string().required(),
    totaleprice: yup.number().positive().integer().required(),
    products: yup.string().required(),
});