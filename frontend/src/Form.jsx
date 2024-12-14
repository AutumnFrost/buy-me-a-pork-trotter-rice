import { useState } from 'react'

function Form() {
  const [name, setName] = useState()
  const [account, setAccount] = useState()

  const handleSend = () => {
    alert(`Name: ${name}, Password: ${account}`);
  };

  return (
    <div className="form">
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
        <button className="send-button" onClick={handleSend}>
          赏
        </button>
      </div>
  )
}

export default Form
