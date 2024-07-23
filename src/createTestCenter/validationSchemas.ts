import { object, string } from 'yup';

export const personSchema = object({
  firstName: string().required('First Name is Required'),
  lastName: string().required('Last Name is Required'),
  email: string()
    .required('Email is Required')
    .email('A Valid Email is Required'),
  phone: string().required('Phone is Required'),
  title: string(),
});

export const addressSchema = object({
  address1: string().required('Address 1 is Required'),
  address2: string(),
  address3: string(),
  city: string().required('City is Required'),
  state: string().required('State is Required'),
  zip5: string().required('Zip 5 is Required'),
  zip4: string(),
});

export const testCenterSchema = object({
  testCenterName: string().required('Test Center Name is Required'),
  website: string().required('Website is Required'),
  phone: string().required('phone is Required'),
  address: addressSchema,
});
