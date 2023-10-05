import Image from 'next/image'
import pizzas from '../data/pizzas.json';
import Banner from './components/Banner';

export default function Home() {
  return (
    <section>
      <Banner />
      {pizzas.map((pizza) => (<div>{pizza.name}</div>))}
    </section>
  )
}
