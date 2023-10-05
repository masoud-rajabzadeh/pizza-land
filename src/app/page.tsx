import Image from 'next/image'
import pizzas from '../data/pizzas.json';

export default function Home() {
  return (
    <section>
      {pizzas.map((pizza) => (<div>{pizza.name}</div>))}
    </section>
  )
}
