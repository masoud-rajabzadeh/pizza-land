// css
import './globals.css';

// import font
import { Bangers, Raleway, Roboto_Condensed } from 'next/font/google';

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

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
  weight: ['300', '400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang='en'>
        <body
          className={`${raleway.variable} ${bangers.variable} ${robotoCondensed.variable} font-raleway`}
        >
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
