import { ReactNode } from 'react';
import GlobalStyle from '../styles/globalStyles';

export const metadata = {
  title: 'My Diary App',
  description: 'A diary application built with Next.js 13',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
