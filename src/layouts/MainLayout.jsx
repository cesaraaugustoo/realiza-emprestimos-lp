import PropTypes from 'prop-types'
import { Header } from '@/components/Header'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16" id="main-content">
        {children}
      </main>
      <WhatsAppFloat />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
