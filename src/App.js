import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />  
          <Routes>
            <Route exect path="/" element={<News key="/" pageSize={6} country="us" category="general" />}></Route>
            <Route exect path="/general" element={<News key="general" pageSize={6} country="us" category="general" />}></Route>
            <Route exect path="/entertainment" element={<News key="entertainment" pageSize={5} country="us" category="entertainment" />}></Route>
            <Route exect path="/business" element={<News key="business" pageSize={6} country="us" category="business" />}></Route>
            <Route exect path="/health" element={<News key="health" pageSize={6} country="us" category="health" />}></Route>
            <Route exect path="/science" element={<News key="science" pageSize={6} country="us" category="science" />}></Route>
            <Route exect path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports" />}></Route>
            <Route exect path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology" />}></Route>
          </Routes>
        </Router>

      </div>
    )
  }
}
