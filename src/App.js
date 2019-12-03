import React from 'react';
import { connect } from 'react-redux';
import './styles/index.scss';
import './compoments/header/Header';
import Header from './compoments/header/Header';
// import {getSetting} from './modules/setting/actions';

import {getSetting} from './modules/setting/actions';
import {settingSelector} from './modules/setting/selectors';
import request from './utils/request';

class App extends React.Component {

  componentDidMount() {
    // console.log('this.props', this.props)
    // this.props.dispatch(getSetting())
    request
      .get('/iis/iotstuff/api/eops/bootstrap')
      .then(response => response.data)
      .then(data => console.log('data', data))
  }

  render() {
    const {setting} = this.props;
    const {loading, data} = setting;
    return (
      <div className="container">
        <Header />
        {loading ?
          <p>Loading...</p> :
          <p>{JSON.stringify(data)}</p>
        }
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
const mapStateToProps = state => {
  return {
    setting: settingSelector(state),
  }
};

export default connect(mapStateToProps)(App);
