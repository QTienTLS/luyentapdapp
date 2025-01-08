
import { useState } from "react"
import { useAccount, useSendTransaction, useWaitForTransactionReceipt,  type BaseError } from "wagmi"
import { parseEther } from "viem";

function TranferBalance() {
  const {isConnected} = useAccount();
  const [receiver, setReceiver] = useState('')
  const [amount, setAmount] = useState('')
  
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  const tranfer = () => {
    if(isConnected && receiver && amount){
      const to = receiver as `0x${string}`;
      sendTransaction({
        to,
        value: parseEther(amount),
      });     
    }
  }
  const {isLoading, isSuccess} = useWaitForTransactionReceipt({ hash });

  return (
    <div className="mt-4 shadow-md p-4 border border-gray-200 h-[300px]">
      <h2>Chuyển ETH cho tài khoản khác</h2>
      <div className="info-row">
        <div className="key w-32">Tài khoản nhận</div>
        <div className="value">
          <input className="input" value={receiver} onChange={e=>{setReceiver(e.target.value)}} />
        </div>
      </div>
      <div className="info-row">
        <div className="key w-32">Số lượng</div>
        <div className="value">
          <input className="input" value={amount} onChange={e=>{setAmount(e.target.value)}} />
        </div>
      </div>
      <div className="info-row">
        <div className="key w-32 h-[35px]">Trạng thái</div>
        <div className="value">{isPending && 
          <span>
            Đang tạo giao dịch ...
          </span>
          }
          {error &&
          <span>
            Giao dịch không thành công: {(error as BaseError).shortMessage  || error.message}
          </span>
          }
          {isLoading &&
          <span>
            Đang chờ xác nhận ...
          </span>
          }
          {isSuccess &&
          <span>
            Giao dịch thành công
          </span>
          }
          </div>
      </div>
      {hash &&
        <div>
          Transaction hash: {hash}
        </div>
      }
      <div className="text-center">
        <div className="button" onClick={tranfer}>
          Chuyển
        </div>
      </div>
    </div>
  );
}

export default TranferBalance;
