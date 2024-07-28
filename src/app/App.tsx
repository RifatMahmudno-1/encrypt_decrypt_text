import { Outlet } from 'react-router-dom'
import '@/assets/global.css'
import Router from './Router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function Layout() {
  return (
    <>
      <div className="grid min-h-dvh grid-rows-[auto_minmax(auto,1fr)]">
        <Navbar />
        <main className="relative mx-auto w-full max-w-screen-xl p-2">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <Router Layout={Layout} />
    </>
  )
}

export default App
