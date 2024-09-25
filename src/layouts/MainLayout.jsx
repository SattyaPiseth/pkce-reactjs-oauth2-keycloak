import React from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
    <header>
    <NavbarComponent/>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default MainLayout
