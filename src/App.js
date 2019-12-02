import React from 'react';
import { connect } from 'react-redux';
import './styles/index.scss';
import './compoments/header/Header';
import Header from './compoments/header/Header';
// import {getSetting} from './modules/setting/actions';

import {getSetting} from './modules/setting/service';

class App extends React.Component {

  componentDidMount() {
    // console.log('this.props', this.props)
    this.props.dispatch(getSetting())
  }

  render() {
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="container">
//       <Header></Header>
//     </div>
//   );
// }

export default connect()(App);
