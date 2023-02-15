import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  );
}

export default App;
