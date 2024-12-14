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
  const [message, setMessage] = useState()

  const handleSend = async () => {

    if(!name?.trim() || !message?.trim()) {
      console.log(name, message)
      alert("Cannot be empty.");
      return;
    }

    const { contract } = state;
    if (!contract) {
      alert("Contract not available. Please connect your wallet.");
      return;
    }


    try {
      const amount = { value: ethers.parseEther("0.001") };

      const transaction = await contract.buyRice(name, message, amount);
      await transaction.wait();

      console.log("Transaction is done");

      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      alert("Transaction failed! Please check console for details.");
    } finally {
      alert("thanks! for your gift");
    }

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
          maxLength={10}
        />
        <label className="label">留言</label>
        <input
          type="text"
          placeholder="请输入留言"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field"
          maxLength={30}
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
