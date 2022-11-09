import { useRoutes } from 'react-router-dom';
// layouts
import Main from '../layouts/main';
// components
import Home from "../pages/Home";
import Swap from "../pages/Swap";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home />, index: true },
        { path: 'swap', element: <Swap /> },
      ]
    }
  ])
}