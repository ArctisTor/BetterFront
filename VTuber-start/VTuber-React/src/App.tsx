import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import VTuberList from './pages/VTuber/VTuberList';
import NavBar from './component/NavBar';
import TabBar from './component/TabBar/TabBar';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<VTuberList />} />
      </Route>
    )
  );

  return (
    <>
      <TabBar />
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
