import React,{ Component } from 'react';
import {Breadcrumb} from 'antd';
import {withRouter} from 'react-router';

class BreadcrumbPage extends Component {

    render() {
        console.log(this.props.location);
        const pathName = this.props.location.pathname;
        const splitString = pathName.split('/');
        return (
            <div>
                <Breadcrumb>
                    {splitString.map((path, index) => {
                        if (index === 0) {
                            return (
                                <Breadcrumb.Item key={index}><a href="/">Home</a></Breadcrumb.Item>
                            )
                        } else {
                            return (<Breadcrumb.Item key={index}>
                                <a href="">{path}</a>
                            </Breadcrumb.Item>)
                        }
                    }
                    )}
                </Breadcrumb>
            </div>
        );
    }
}

export default  withRouter(BreadcrumbPage);
