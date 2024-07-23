import { Route, Routes } from 'react-router-dom';

import {
  CreateTestCenter,
  CreateTestCenterProvider,
  MyTestCenter,
} from './createTestCenter';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CreateTestCenterProvider>
            <CreateTestCenter />
          </CreateTestCenterProvider>
        }
      />
      <Route path="/test-center" element={<MyTestCenter />} />
    </Routes>
  );
}

export default App;
