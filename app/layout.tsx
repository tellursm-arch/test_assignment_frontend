import { ThemeProvider } from '@gravity-ui/uikit';
import './global.scss';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
});

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
    >
      <body className={inter.className}>
        <ThemeProvider theme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}