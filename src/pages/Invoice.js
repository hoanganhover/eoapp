import React from 'react';
import {withRouter} from 'react-router';
import {getPaymentID} from '../modules/setting/service';
import {connect} from "react-redux";
//import ComProduct from "../compoments/products/ComProduct";
import {parse} from "../helper/query-string"
import {Link} from "react-router-dom";

class Invoice extends React.Component {
    constructor(props){
        super();
        const pathname = props.location.search;
        //console.log('pathname',parse(pathname));
        this.paymentMethodId = parse(pathname).paymentMethodId;
        //console.log("this.paymentMethodId", this.paymentMethodId);
        this.state = {
            data : []
        }
    }
    async componentDidMount(){
        try {
            if (this.paymentMethodId) {
                const data = await getPaymentID(this.paymentMethodId);
                // const dataproduct = await getProduct(this.Id);
                //console.log('111',data);
                this.setState({
                    data: data ? data : [],
                })
            }

        } catch (e) {

        }

    }
    countQty = (LineItems) =>{
        //console.log('111',LineItems);
            const arrSum =  LineItems.reduce((a,b) => {
                return a+b.Quantity
            },0)
            return arrSum;
    }
    countTotal = (LineItems,TaxRate) =>{
        //console.log('111',LineItems);
        const arrSum =  LineItems.reduce((a,b) => {
            return a+b.Price
        },0)
        return Math.round(arrSum*(1+TaxRate));
    }
    render() {
        const {data} = this.state;
        const {setting:{PaymentMethods,Stores}}= this.props;
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Invoice</th>
                        <th scope="col">Store Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Line Total</th>
                    </tr>
                    </thead>
                    {data.map((item, index) =>{
                        const findNameStore = Stores.find(NameStore => NameStore.Id === item.StoreId);
                        return(
                            <tbody key={item.Id}>

                            {/*{item.LineItems.map((lineItem, index) =>*/}
                            {/*    <ComProduct item={lineItem} key={lineItem.Id}/>*/}
                            {/*)}*/}
                            <tr>
                                <td>{item.Id}</td>
                                <td><Link to={`/invoice-detail?storeId=${item.StoreId}&paymentMethodId=${item.PaymentMethodId}`}>{findNameStore && findNameStore.Name ? findNameStore.Name : ''}</Link></td>
                                <td>{this.countQty(item.LineItems)}</td>
                                <td>${this.countTotal(item.LineItems,item.TaxRate)}</td>

                            </tr>
                            </tbody>
                        )
                    })}
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
