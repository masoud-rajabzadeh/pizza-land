// css
import './globals.css';

// import font
import { Bangers, Raleway } from 'next/font/google';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

// provider
import CartProvider from './context/CartContext';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400'],
});

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang='en'>
        <body
          className={`${raleway.variable} ${bangers.variable} font-raleway`}
        >
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
