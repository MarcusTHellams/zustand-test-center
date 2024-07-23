import {
  StepFive,
  StepFour,
  StepOne,
  StepSix,
  StepThree,
  StepTwo,
  useCreateTestCenterStore,
} from '.';

export const CreateTestCenter = () => {
  const step = useCreateTestCenterStore((state) => state.step);
  let Component;
  switch (step) {
    case 1:
      Component = StepOne;
      break;
    case 2:
      Component = StepTwo;
      break;
    case 3:
      Component = StepThree;
      break;
    case 4:
      Component = StepFour;
      break;
    case 5:
      Component = StepFive;
      break;
    default:
      Component = StepSix;
  }

  return (
    <main className="container mt-16">
      <Component />
    </main>
  );
};
