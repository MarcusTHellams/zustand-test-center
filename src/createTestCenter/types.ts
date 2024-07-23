export type TestCenter = {
  testCenterName: string;
  website: string;
  phone: string;
  address: Address;
  primaryCoordinator: Person & { address: Address };
  techCoordinator: Person;
  shippingCoordinator: Person;
  shippingAddress: Address;
};

export type Address = {
  address1: string;
  address2?: string;
  address3?: string;
  city: string;
  state: string;
  zip5: string;
  zip4?: string;
};

export type Person = {
  firstName: string;
  lastName: string;
  title?: string;
  email: string;
  phone: string;
};

export type Step = number | 'submit';

export type CreateTestCenterStore = {
  step: Step;
  testCenter: TestCenter;
  prevStep: () => void;
  nextStep: () => void;
  goToStep: (step: Step) => void;
  mergeValues: (testCenter: TestCenter) => void;
};
