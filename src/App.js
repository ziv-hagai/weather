import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Top from './components/Top';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { connect } from 'react-redux';
import { getLocal } from './redux/actions';



class App extends React.Component {
  componentDidMount() {
    this.props.getLocal()
  }

  render() {
    return (
      <div className="App">
        <Top />
        <Routes>
          <Route path='/' element={<> <Search /> <Home /> </>} />
          <Route path='/favs' element={<Favorites />} />
        </Routes>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLocal: () => dispatch(getLocal()),

  }
}

export default connect(null, mapDispatchToProps)(App)


