import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './context/ThemeProvider';
import router from './Routers/routes';

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className="App" id={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
