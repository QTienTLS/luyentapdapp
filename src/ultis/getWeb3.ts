import Web3 from 'web3';


const getWeb3 = async (): Promise<Web3> => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts;
    } catch (error: any) {
      if(error.code === 4001) {
        throw new Error('User rejected request');
      }
      else {
        throw new Error('Error requesting accounts');
      }
    }
  } else
    throw new Error(
      'No Web3 provider detected. Please install MetaMask or another Web3 wallet.',
    );
};

export default getWeb3;
