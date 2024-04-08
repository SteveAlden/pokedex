import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/components/layout/header';
import localFont from 'next/font/local';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import { Suspense } from 'react';

const myFont = localFont({
  src: './fonts/Oxanium-Regular.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pokédex',
  description: 'Pokédex app built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={myFont.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Suspense>
              <Header />
            </Suspense>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
