import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import PageAnimation from '../components/common/PageAnimation'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-base font-body text-ivory">
      <Navbar />
      <main className="flex-1">
        <PageAnimation>
          <Outlet />
        </PageAnimation>
      </main>
      <Footer />
    </div>
  )
}