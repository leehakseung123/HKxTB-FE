import Aside from './Aside';
import Section from './Section';

const Main = () => {
  return (
    <main className="flex w-full max-w-5xl mx-auto">
      <Aside className="flex-[3] min-w-[300px] bg-blue-300 p-4" />
      <Section className="flex-[7] bg-cyan-100 p-4" />
    </main>
  );
};

export default Main;
