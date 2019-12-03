import React from 'react';
import {withRouter} from 'react-router';
import {getStoreID} from '../modules/setting/service';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Stores extends React.Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
    }
    async componentDidMount(){
        try {
            const pathname = this.props.location.pathname;
            const splitString = pathname.split('/');
            const storeId = splitString[splitString.length -1];
            if (storeId) {
                const data = await getStoreID(storeId);
                console.log('test',data);
                this.setState({
                    data: data,
                })
            }

        } catch (e) {

        }

    }
    render() {
        const {data} = this.state;
        const {setting:{PaymentMethods,Stores}}= this.props;
        return (
            <div>
                {data.map((item, index) => {
                    const findStore = PaymentMethods.find(namemethod => namemethod.Id === item.PaymentMethodId);
                    const findNameStore = Stores.find(namestore => namestore.Id === item.StoreId);
                    return(
                        <div key={index}>
                            <p>{findStore && findStore.Name ? findStore.Name : ''}</p>
                            <p>{findNameStore && findNameStore.Name ? findNameStore.Name : ''}</p>
                            <p>{item.Revenue}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state.setting)
    return {
        setting: state.setting.data,
    }
};

export default connect(mapStateToProps) (withRouter(Stores));
