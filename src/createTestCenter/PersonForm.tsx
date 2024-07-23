import { useFormContext } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  MyInput,
} from '@/components';

import { TestCenter } from '.';

type PersonFormProps = {
  whichPerson: 'primaryCoordinator' | 'shippingCoordinator' | 'techCoordinator';
};

export const PersonForm = ({ whichPerson }: PersonFormProps) => {
  const form = useFormContext<TestCenter>();
  return (
    <>
      <FormField
        control={form.control}
        name={`${whichPerson}.firstName`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${whichPerson}.lastName`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${whichPerson}.title`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${whichPerson}.email`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${whichPerson}.phone`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <PhoneInput
                international
                withCountryCallingCode
                className="not-prose"
                {...field}
                inputComponent={MyInput}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
