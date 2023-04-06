// import components
import Pizza from './components/Pizza';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </div>
  );
}
