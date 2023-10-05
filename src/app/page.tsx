import Image from 'next/image'
import pizzas from '../data/pizzas.json';
import Banner from './components/Banner';
import CartBottom from './components/CartBottom';
export default function Home() {
  return (
    <section>
      <Banner />
      <CartBottom/>
      {pizzas.map((pizza) => (<div>{pizza.name}</div>))}
    </section>
  )
}
