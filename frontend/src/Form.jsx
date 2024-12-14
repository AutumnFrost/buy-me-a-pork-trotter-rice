import { useState } from 'react'
import { ethers } from 'ethers'
import abi from "./contract/PorkTrotterRice.json";

const contractAddress = "0xA8d23986408D97F069Ce04091Be9ad159f38ba65";
const contractABI = abi.abi;

function Form() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [name, setName] = useState()
  const [account, setAccount] = useState()

  const handleSend = () => {
    alert(`Name: ${name}, Password: ${account}`);
  };

  /**
   * 点击 "点击链接钱包" 按钮时,将钱包链接到 Form 中
   */
  const connectWallet = async () => {
    console.log('eeeee')
    const { ethereum } = window;

    console.log(ethereum)
    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    setState({ provider, signer, contract });
    console.log(provider, signer, contract);
  };

  return (
    <div className="form">
        {state.signer?.address && <label className="label">你的钱包：{state.signer?.address}</label>}
        <label className="label">姓名</label>
        <input
          type="text"
          placeholder="请输入姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <label className="label">地址</label>
        <input
          type="text"
          placeholder="请输入地址"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          className="input-field"
        />
        {state.contract && <button className="send-button" onClick={handleSend}>
          赏
        </button>}
        {!state.contract && <button className="connect-button" onClick={connectWallet}>
          点击链接钱包
        </button>}
      </div>
  )
}

export default Form
