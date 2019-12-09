import React from 'react';
import { connect } from 'react-redux';
import './styles/index.scss';
import './compoments/header/Header';
import Header from './compoments/header/Header';

import {getSetting} from './modules/setting/actions';
import {settingSelector} from './modules/setting/selectors';
//import request from './utils/request';
//import { __values } from 'tslib';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getSetting())
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    )
  }
}


export default connect()(App);
