import React from 'react';

import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Home extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         data : {
    //             PaymentMethods : [],
    //             Stores : []
    //         }
    //     }
    // }

    // componentDidMount() {
    //     request
    //         .get('/iis/iotstuff/api/eops/bootstrap')
    //         //.get('/products')
    //         .then(response => response.data)
    //         .then(data => {
    //             //console.log(data)
    //             // const {PaymentMethods,Stores} = data;
    //             // const paymentstore = PaymentMethods.map(value => {
    //             //     const findStore = Stores.find(store => store.Id === value.Id);
    //             //     return {
    //             //         ...value,
    //             //         ...findStore
    //             //     }
    //             // });
    //             this.setState(
    //                 {
    //                     data:data
    //                 }
    //             )}
    //         )
    //         .catch(e => console.log('error',e))
    // }

    render() {
        //const {data} = this.state;
        const {setting,getRev=[]} = this.props;
        //console.log(setting);
        return (
            <div>
                {/*<h3>List PaymentMethods</h3>*/}
                {/*<div>*/}
                {/*    {setting.PaymentMethods.map(item => (*/}
                {/*        <div key={item.Id}>*/}
                {/*            <span>{item.Id}</span><br />*/}
                {/*            <span>{item.Name}</span><br />*/}
                {/*            <hr/>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <h3>List Stores</h3>
                <div>
                    {setting.Stores.map(item => {
                        const findStore = getRev.find(revstore => revstore.StoreId === item.Id);
                        return(
                            <div key={item.Id}>
                                <Link to={`/stores/${item.Id}`} className="badge badge-success">{item.Name}</Link><br />
                                <p>{item.Description}</p>
                                <span>Revenue : <span className="text-primary">{findStore.Revenue}</span></span>
                                <hr/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.setting)
    return {
        setting: state.setting.data,
        getRev: state.setting.dataRev,
    }
};
export default connect(mapStateToProps) (Home);
