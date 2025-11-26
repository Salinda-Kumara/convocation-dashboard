import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata = {
  title: 'Convocation Status Dashboard',
  description: 'Dashboard for convocation registration status',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
