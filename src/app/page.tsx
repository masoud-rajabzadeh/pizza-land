import Image from 'next/image'
import pizzas from '../data/pizzas.json';
import Banner from './components/Banner';
import CartBottom from './components/CartBottom';
import CartDesktop from './components/CartDesktop'
import CartItem from './components/CartItem';
import CartMobile from './components/CartMobile';
export default function Home() {
  return (
    <section>
      <Banner />
      <CartBottom />
      <CartDesktop />
      <CartItem/>
      <CartMobile/>
      {pizzas.map((pizza) => (<div>{pizza.name}</div>))}
    </section>
  )
}
