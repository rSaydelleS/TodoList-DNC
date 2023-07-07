import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import List from '../View/List/List';
import Delete from '../View/Delete/Delete';
import Rename from '../View/Rename/Rename';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/Delete",
    element: <Delete />,
  },
  {
    path: "/Rename",
    element: <Rename />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
