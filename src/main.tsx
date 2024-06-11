import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HowToUsePage from './pages/HowToUsePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import RulesPage from './pages/RulesPage.tsx'
import NavBar from './components/NavBar.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <NavBar/>
        <App />
      </div>
      
    ),
    errorElement: (
      <div>
        <NavBar/>
        <NotFoundPage />
      </div>
    ),
  },
  {
    path: '/How-To-Use',
    element:  (
      <div>
        <NavBar/>
        <HowToUsePage />
      </div>
    ),
  },
  {
    path: '/rules',
    element: (
      <div>
        <NavBar/>
        <RulesPage />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
