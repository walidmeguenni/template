import * as yup from "yup";
export const validationSchema = yup.object().shape({
  fullname: yup.string().required(),
  dateNaissance:yup.date().required(),
  phone: yup.number().positive().integer().required(),
  address: yup.string().required(),
  gender: yup.string().required(),
  salary: yup.number().positive().integer().required(),
  role: yup.string().required(),
  EmployeeImage: yup
    .mixed()
    .required("you need to provide a file ")
    .test("fileSize", "the file is too large", (value) => {
      return value && value.size <= 1000000;
    }),
});
export const updatevalidationSchema = yup.object().shape({
  fullname: yup.string().required(),
  phone: yup.number().positive().integer().required(),
  address: yup.string().required(),
  gender: yup.string().required(),
  salary: yup.number().positive().integer().required(),
  role: yup.string().required(),
  dateNaissance:yup.date().required()
});
