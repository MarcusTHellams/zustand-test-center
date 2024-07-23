import { yupResolver } from '@hookform/resolvers/yup';
import { produce } from 'immer';
import { FormProvider, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { Button } from '@/components';

import { PersonForm, TestCenter, useCreateTestCenterStore } from '.';

const StepFourSchema = object({
  shippingCoordinator: object({
    firstName: string().required('First Name is Required'),
    lastName: string().required('Last Name is Required'),
    email: string()
      .required('Email is Required')
      .email('A Valid Email is Required'),
    phone: string().required('Phone is Required'),
    title: string(),
  }),
});

export const StepFour = () => {
  const testCenter = useCreateTestCenterStore((state) => state.testCenter);
  const prevStep = useCreateTestCenterStore((state) => state.prevStep);
  const mergeValues = useCreateTestCenterStore((state) => state.mergeValues);
  const nextStep = useCreateTestCenterStore((state) => state.nextStep);

  const form = useForm({
    defaultValues: testCenter,
    resolver: yupResolver(StepFourSchema),
  });

  const _mergeValues = (values: TestCenter) => {
    const newState = produce(testCenter, (draft) => {
      draft.shippingCoordinator = {
        ...values.shippingCoordinator,
      };
    });
    mergeValues(newState);
  };

  const submitHandler = form.handleSubmit((values) => {
    _mergeValues(values as TestCenter);
    nextStep();
  });

  return (
    <div className="mx-auto w-6/12 mb-16">
      <h1 className="text-center">Shipping Coordinator</h1>
      <FormProvider {...form}>
        <form className="space-y-4" onSubmit={submitHandler} noValidate>
          <PersonForm whichPerson="shippingCoordinator" />
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
