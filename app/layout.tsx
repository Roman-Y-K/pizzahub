import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { Header } from '@/components/shared/Header';
import './globals.css';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'PizzaHub',
  description:
    'Craving pizza? PizzaHub delivers cheesy, fresh, and flavorful pizza straight to your doorstep. Fast delivery and easy online ordering — satisfaction guaranteed.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
