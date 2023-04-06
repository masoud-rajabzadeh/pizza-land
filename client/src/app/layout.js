// css
import './globals.css';

// import font
import { Nunito } from '@next/font/google';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
