import React from 'react';
import {withRouter} from 'react-router';
import {getInvoice} from '../modules/setting/service';
import {connect} from "react-redux";
import {parse} from "../helper/query-string";
import ComProduct from "../compoments/products/ComProduct";

class InvoiceDetail extends React.Component {
    constructor(props){
        super();
        const pathname = props.location.search;
        this.paymentMethodId = parse(pathname).paymentMethodId;
        this.storeId = parse(pathname).storeId;
        this.state = {
            data : []
        }
    }
    async componentDidMount(){
        try {
            if (this.storeId) {
                const data = await getInvoice(this.storeId,this.paymentMethodId);
                //console.log('111',data);
                this.setState({
                    data: data ? data : [],
                })
            }

        } catch (e) {

        }
    }
    // countQty = (LineItems) =>{
    //     //console.log('111',LineItems);
    //     const arrSum =  LineItems.reduce((a,b) => {
    //         return a+b.Quantity
    //     },0)
    //     return arrSum;
    // }
    countPrice = (LineItems) =>{
        //console.log('111',LineItems);
        const arrSum =  LineItems.reduce((a,b) => {
            return a+(b.Quantity*b.Price)
        },0)
        return arrSum;
    }
    render() {
        const {data} = this.state;
        //const {setting:{PaymentMethods,Stores}}= this.props;
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
                        {data.map((item,index)=>{
                            const price = this.countPrice(item.LineItems);
                            const tax = Math.round(price * item.TaxRate);

                            return(
                                <tbody key={item.Id}>
                                        {item.LineItems.map((lineItem, index) =>
                                            <ComProduct item={lineItem} key={lineItem.Id} />
                                        )}
                                        <tr>
                                            <td colSpan="2"></td>
                                            <td>Sub Total</td>
                                            <td>${price}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"></td>
                                            <td>Tax</td>
                                            <td>${tax}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"></td>
                                            <td>total</td>
                                            <td>${tax+price}</td>
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
    return {
        setting: state.setting.data,
    }
};

export default connect(mapStateToProps) (withRouter(InvoiceDetail));
