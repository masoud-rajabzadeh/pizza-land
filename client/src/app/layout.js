// css
import './globals.css';

// import font
import { Quicksand } from 'next/font/google';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

// provider
import CartProvider from './context/CartContext';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang='en'>
        <body className={`${quicksand.variable} font-quicksand`}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
