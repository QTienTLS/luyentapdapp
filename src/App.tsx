import './App.css';
import EuroeToken from './components/EuroeToken';
import TranferBalance from './components/TranferBalance';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

function App() {
  const { address, isConnected } = useAccount();
  if (isConnected) {
    return (
      <>
        <ConnectButton />
        <div className="w-full grid grid-cols-2 gap-4">
          {address && <TranferBalance />}
          {address && <EuroeToken />}
        </div>
      </>
    );
  } else {
    return (
      <>
        <ConnectButton />
        <div className="red">Chưa kết nối ví</div>
      </>
    );
  }
}

export default App;
