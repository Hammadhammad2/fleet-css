import AdventureSection from './components/AdventureSection';
import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header';
import MemoriesSection from './components/MemoriesSection';

function App() {
  return (
    <div className='px-20 lg:px-10 xs:px-2'>
      <Header />
      <BackgroundImage />
      <AdventureSection />
      <MemoriesSection />
    </div>
  );
}

export default App;
