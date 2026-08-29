
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './layouts/Main'
import HomePage from './pages/HomePage'
import ProdutosPage from './pages/ProdutosPage'
import ContatoPage from './pages/ContatoPage'

function App() {

  const rotas = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/produtos", element: <ProdutosPage /> },
    { path: "/contato", element: <ContatoPage /> },
  ])


  return (
    <>
      <RouterProvider router={rotas} />
    </>
  )

 
}

export default App
