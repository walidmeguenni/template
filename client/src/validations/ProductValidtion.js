import * as yup from "yup";
export const validationSchema = yup.object().shape({
  name: yup.string().required(),
  quantity: yup.number().positive().integer().required(),
  price: yup.number().positive().integer().required(),
  status: yup.string().required(),
  productImage: yup
    .mixed()
    .required("you need to provide a file ")
    .test("fileSize", "the file is too large", (value) => {
      return value && value.size <= 1000000;
    }),
});
export const updatevalidationSchema = yup.object().shape({
    name: yup.string().required(),
    quantity: yup.number().positive().integer().required(),
    price: yup.number().positive().integer().required(),
    status: yup.string().required(),
});