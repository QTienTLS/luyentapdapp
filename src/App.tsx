import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';


function App() {

    return (
      <div className='w-screen h-screen overflow-y-auto p-4 overflow-x-hidden'>
        <div className='flex justify-end'>
        <ConnectButton />
      </div>
      </div>
    );
  }

export default App;
