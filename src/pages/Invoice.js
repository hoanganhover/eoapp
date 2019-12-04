import React from 'react';
import {withRouter} from 'react-router';
import {getPaymentID} from '../modules/setting/service';
import {connect} from "react-redux";
import ComProduct from "../compoments/products/ComProduct";
//import {parseUrl} from "../helper/query-string"
import {Link} from "react-router-dom";

class Invoice extends React.Component {
    constructor(props){
        super();
        const pathname = props.location.search;
        console.log('pathname',pathname);
        const splitStringId = pathname.split('',10);
        const splitStringMethod = pathname.split('');
        this.paymentMethodId = splitStringMethod[splitStringMethod.length -1];
        this.storeId = splitStringId[splitStringId.length -1];

        this.state = {
            data : []
        }
    }
    async componentDidMount(){
        try {
            if (this.storeId) {
                const data = await getPaymentID(this.paymentMethodId,this.storeId);
                // const dataproduct = await getProduct(this.Id);
                this.setState({
                    data: data ? data : [],
                })
            }

        } catch (e) {

        }

    }
    render() {
        const {data} = this.state;
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price/ea</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Line Total</th>
                    </tr>
                    </thead>
                    {data.map((item, index) => <tbody key={item.Id}>

                        {item.LineItems.map((lineItem, index) =>
                            <ComProduct item={lineItem} key={lineItem.Id}/>
                        )}
                        <tr>
                            <td>{item.TaxRate}</td>
                        </tr>
                    </tbody>)}
                </table>
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

export default connect(mapStateToProps) (withRouter(Invoice));
