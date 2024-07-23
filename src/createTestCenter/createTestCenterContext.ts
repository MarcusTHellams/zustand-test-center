import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';

import { type CreateTestCenterStore, type Step, type TestCenter } from '.';

export type InitialState = typeof initialState;

export const initialState: { testCenter: TestCenter; step: Step } = {
  testCenter: {
    testCenterName: '',
    website: '',
    phone: '',
    address: {
      address1: '',
      address2: '',
      address3: '',
      city: '',
      state: '',
      zip5: '',
      zip4: '',
    },
    primaryCoordinator: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      title: '',
      address: {
        address1: '',
        address2: '',
        address3: '',
        city: '',
        state: '',
        zip5: '',
        zip4: '',
      },
    },
    shippingCoordinator: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      title: '',
    },
    techCoordinator: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      title: '',
    },
    shippingAddress: {
      address1: '',
      address2: '',
      address3: '',
      city: '',
      state: '',
      zip5: '',
      zip4: '',
    },
  },
  step: 1,
};

export const CreateTestCenterContext = createContext<
  ReturnType<typeof getCreateTestCenterStore> | undefined
>(undefined);

export const getCreateTestCenterStore = (
  state: InitialState = initialState,
) => {
  return createStore<CreateTestCenterStore>()((set) => ({
    ...state,
    prevStep() {
      set((state) => ({ step: (state.step as number) - 1 }));
    },
    nextStep() {
      set((state) => ({ step: (state.step as number) + 1 }));
    },
    goToStep(step) {
      set(() => ({ step }));
    },
    mergeValues(testCenter) {
      set(() => ({ testCenter }));
    },
  }));
};

export const useCreateTestCenterStore = <T>(
  selector: (store: CreateTestCenterStore) => T,
) => {
  const store = useContext(CreateTestCenterContext);
  if (!store) {
    throw new Error('Missing StoreProvider');
  }
  return useStore(store, selector);
};
