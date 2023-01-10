
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';


function App() {
  return (
    <div className="bg-[url('./assets/backdrop.jpeg')] bg-cover h-screen w-full" >
      <Header/>
      <div className='flex justify-center w-screen h-96'><Calculator/></div>
    </div>
  );
}

export default App;
