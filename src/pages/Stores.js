import React from 'react';
import {withRouter} from 'react-router';
import {getStoreID} from '../modules/setting/service';
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Stores extends React.Component {
    constructor(props){
        super();
        const pathname = props.location.pathname;
        const splitString = pathname.split('/');
        this.storeId = splitString[splitString.length -1];
        this.state = {
            data : []
        }
    }
    async componentDidMount(){
        try {
            if (this.storeId) {
                const data = await getStoreID(this.storeId);
                //console.log('test',data);
                this.setState({
                    data: data ? data : [],
                })
            }
        } catch (e) {

        }

    }
    render() {
        const {data} = this.state;
        const {setting:{PaymentMethods,Stores}}= this.props;
        //console.log('store',Stores);
        const findNameStore = Stores.find(NameStore =>{
            //console.log(NameStore.Id );
            return NameStore.Id == this.storeId;
        });

        return (
            <div>
                <h5>{findNameStore && findNameStore.Name ? findNameStore.Name : ''}</h5>
                {data.map((item, index) => {
                    const findNameMethod = PaymentMethods.find(NameMethod => NameMethod.Id === item.PaymentMethodId);
                    return(
                        <div key={index}>
                            {/*<p>Store : <b>{findNameStore && findNameStore.Name ? findNameStore.Name : ''}</b></p>*/}
                            <Link to={`/invoice?paymentMethodId=${item.PaymentMethodId}`}>Payment Method {item.PaymentMethodId} : {findNameMethod && findNameMethod.Name ? findNameMethod.Name : ''} -> {item.Revenue}</Link>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = state => {
    //console.log(state.setting)
    return {
        setting: state.setting.data,
    }
};

export default connect(mapStateToProps) (withRouter(Stores));
