import { Outlet } from "react-router-dom"
import './App.css'
import Menu from "./componets/menu.jsx"
import Rodape from "./componets/rodape"

export default function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
