import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
