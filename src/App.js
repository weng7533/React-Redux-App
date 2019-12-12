import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetch } from './actions/actions';


const App = (props) => {


  console.log(props)


  return (
    <div className='App'>
      {props.gotData && <img src={props.data.data.url} />}
      <div>Click Button To Get NASSA Pic of the day.</div>
      <h2 id="KittensHeader"></h2>
      <button onClick={props.fetch}>Get Pic</button>
    </div >
  );

}


const mapStateTopProps = (states) => {
  return {
    data: states.data,
    fetching: states.fetching,
    gotData: states.gotData
  }
}

export default connect(mapStateTopProps, { fetch })(App);
