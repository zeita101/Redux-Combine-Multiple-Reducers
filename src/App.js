import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="col">
          <div><span>A:</span>{this.props.a}</div>
          <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
        </div>
        <div className="col">
          <div><span>B:</span>{this.props.b}</div>
          <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
        </div>

      </div>
    );
  }
}


const mapStoreToProps = (store) => {
  return {
    a: store.a,
    b: store.b
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: () => dispatch({ type: 'UPDATE_A' }),
    updateB: () => dispatch({ type: 'UPDATE_B' })
  }
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);
