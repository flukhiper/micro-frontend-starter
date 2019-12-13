import React from 'react'
import PropTypes from 'prop-types';
import './styles/index.css'
  
const Main = (props) => {
  return (
  <div class="micro-a">
    <div>
      {props.name} said: Hello world I am Micro-component, Call me {props.name}
      <button onClick={()=>{
        props.onClickMe({message:`tell wrapper: "this is come from {props.name}"`})
      }}>
        Tell Wrapper!!
      </button>
    </div>
    <div>
      {props.name} said: Hello MicroB,
      <br/>
      <a href="" onClick={()=>{
        localStorage.setItem('microName', props.name)
      }}>Please call me!!</a>
      <br/>
      <a href="" onClick={()=>{
        localStorage.removeItem('microName')
      }}>Forgot me, Please !!</a>
    </div>
  </div>
)}
  
Main.propTypes = {
  name: PropTypes.string,
  onClickMe: PropTypes.func,
}

Main.defaultProps = {
  name: "Some Element",
  onClickMe: () => {}
}

export default Main
