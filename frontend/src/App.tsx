import { RouterProvider } from 'react-router-dom';
import router from './routes/router'
import { Suspense } from 'react';
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
  );
}

export default App;