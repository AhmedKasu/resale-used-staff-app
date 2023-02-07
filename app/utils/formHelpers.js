import * as Yup from 'yup';

export const validationSchema = {
  firstNameLastName: Yup.string()
    .required('Name is required')
    .matches(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u, 'Please enter valid name')
    .max(40),
  email: Yup.string().email('Invalid email').required('Field is required'),
  password: Yup.string()
    .required('Field is required')
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
};
