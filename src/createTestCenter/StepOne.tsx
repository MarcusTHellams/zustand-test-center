import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  MyInput,
} from '@/components';

import { AddressForm, testCenterSchema, useCreateTestCenterStore } from '.';

export const StepOne = () => {
  const testCenter = useCreateTestCenterStore((state) => state.testCenter);
  const mergeValues = useCreateTestCenterStore((state) => state.mergeValues);
  const nextStep = useCreateTestCenterStore((state) => state.nextStep);

  const form = useForm({
    defaultValues: testCenter,
    resolver: yupResolver(testCenterSchema),
  });

  const submitHandler = form.handleSubmit((values) => {
    mergeValues({ ...testCenter, ...values });
    nextStep();
  });
  return (
    <div className="mx-auto w-6/12 mb-16">
      <h1 className="text-center">Test Center</h1>
      <FormProvider {...form}>
        <form className="space-y-4" onSubmit={submitHandler} noValidate>
          <FormField
            control={form.control}
            name="testCenterName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Test Center Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input type="url" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
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
          <AddressForm whichAddress="address" />
          <div className="flex justify-end mt-8">
            <Button type="submit">Primary Coordinator</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
