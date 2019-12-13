import React from 'react'
import './styles/index.css'

const Main = () => {
  const microName = localStorage.getItem('microName')
  return (
    <div class="micro-b">
      MicroB said: Hello world I am MicroB, And above me is {microName}
    </div>
  )}

export default Main
