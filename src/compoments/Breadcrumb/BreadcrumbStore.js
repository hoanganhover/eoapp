import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {Breadcrumb} from 'antd';
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

const arrayUrl = [{name: "Home", pathname: '/'}, {nameDataSetting: 'Stores'}, {nameDataSetting: 'PaymentMethods'}, {name: 'Invoice Detail'}];

class BreadcrumbStore extends Component {
  getListBreadcrumb = () => {
    const {location:{pathname}, setting} = this.props;
    const splitString = pathname.split('/');
    if(splitString < 1) {
      return arrayUrl[0];
    }

    const results = splitString.map((path, index) => {
      const urlPath = arrayUrl[index];
      if (urlPath.name) {
        return urlPath;
      }
      const listValueId = setting[urlPath.nameDataSetting];
      const findValue = listValueId.find(value => value.Id == path);
      const url = splitString.filter((v, i) => i <= index ).join('/');
      return {
        name: findValue && findValue.Name? findValue.Name: 'Undefined',
        pathname: splitString.length - 1 !== index ? url : null,
      }
    });
    return results;
  };

  render() {
    const lists = this.getListBreadcrumb();
    return (
      <div>
        <Breadcrumb>
          {lists.map((list, index) => {
              if (list.pathname) {
                return (
                  <Breadcrumb.Item key={index}><Link to={list.pathname}>{list.name}</Link></Breadcrumb.Item>
                )
              } else {
                return (<Breadcrumb.Item key={index}>
                  {list.name}
                </Breadcrumb.Item>)
              }
            }
          )}
        </Breadcrumb>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    setting: state.setting.data,
  }
};

export default connect(mapStateToProps)(withRouter(BreadcrumbStore));
