import { useState } from 'react'
import Form from './Form'
import './App.css'

function App() {
  return (
    <>
    <div className="title_body">
        <h1 className="theme-title">给我买一份猪脚饭</h1>
        <p className="description">
        猪脚饭的滋味总是浓郁而温暖，仿佛能填满漂泊的日子。但每一口的满足里，藏着说不出的怅然，像记忆中那熟悉的家常味道，遥不可及，却挥之不去。
        </p>
      </div>
      <div className="container">
        <Form />
      </div>
      <div className="footer">
      Built with ❤️ by <a href="https://github.com/AutumnFrost" target="_blank" rel="noopener noreferrer">AutumnFrost</a> 
      </div>
    </>
  )
}

export default App
