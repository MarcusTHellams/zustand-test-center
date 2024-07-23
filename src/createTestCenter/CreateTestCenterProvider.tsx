import { useLocalStorage } from '@mantine/hooks';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreateTestCenterContext, getCreateTestCenterStore } from '.';

export const CreateTestCenterProvider = ({ children }: PropsWithChildren) => {
  const store = useRef(getCreateTestCenterStore());
  const [, setValue] = useLocalStorage({
    key: 'testCenter',
    defaultValue: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = store.current.subscribe(({ step, testCenter }) => {
      if (step === 'submit') {
        setValue(JSON.stringify(testCenter));
        navigate('/test-center');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setValue, navigate]);

  return (
    <CreateTestCenterContext.Provider value={store.current}>
      {children}
    </CreateTestCenterContext.Provider>
  );
};
