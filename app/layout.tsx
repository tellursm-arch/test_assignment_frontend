import { ThemeProvider } from '@gravity-ui/uikit';
import './global.scss';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider theme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}