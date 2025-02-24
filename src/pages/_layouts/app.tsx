import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { WhatsappCard } from '@/components/whatsapp-card'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4">
        <Outlet />
      </div>
      <WhatsappCard />
      <Footer />
    </div>
  )
}
