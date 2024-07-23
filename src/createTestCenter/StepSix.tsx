import { yupResolver } from '@hookform/resolvers/yup';
import { produce } from 'immer';
import { FormProvider, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { Button } from '@/components';

import { AddressForm, TestCenter, useCreateTestCenterStore } from '.';

const StepSixSchema = object({
  shippingAddress: object({
    address1: string().required('Address 1 is Required'),
    address2: string(),
    address3: string(),
    city: string().required('City is Required'),
    state: string().required('State is Required'),
    zip5: string().required('Zip 5 is Required'),
    zip4: string(),
  }),
});

export const StepSix = () => {
  const testCenter = useCreateTestCenterStore((state) => state.testCenter);
  const prevStep = useCreateTestCenterStore((state) => state.prevStep);
  const mergeValues = useCreateTestCenterStore((state) => state.mergeValues);
  const goToStep = useCreateTestCenterStore((state) => state.goToStep);

  const form = useForm({
    defaultValues: testCenter,
    resolver: yupResolver(StepSixSchema),
  });

  const _mergeValues = (values: TestCenter) => {
    const newState = produce(testCenter, (draft) => {
      draft.shippingAddress = {
        ...values.shippingAddress,
      };
    });
    mergeValues(newState);
  };

  const submitHandler = form.handleSubmit((values) => {
    _mergeValues(values as TestCenter);
    goToStep('submit');
  });

  return (
    <div className="mx-auto w-6/12 mb-16">
      <h1 className="text-center">Shipping Address</h1>
      <FormProvider {...form}>
        <form className="space-y-4" onSubmit={submitHandler} noValidate>
          <AddressForm whichAddress="shippingAddress" />
          <div className="flex justify-end mt-8 gap-4">
            <Button
              onClick={() => {
                _mergeValues(form.getValues() as TestCenter);
                prevStep();
              }}
              type="button"
            >
              Previous
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
