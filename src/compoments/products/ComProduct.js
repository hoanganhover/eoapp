import React from 'react';
import {connect} from 'react-redux';
import {getProduct} from '../../modules/products/service';
import {saveProducts} from '../../modules/products/actions';

class comProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    async componentDidMount() {
        try {
            const {item,data} = this.props;
            const productId = item.ProductId;
            console.log('xxx1',productId,data);
            if (productId) {
                const findProduct = data.find(product => product.Id == productId);
                console.log('11111',findProduct,data);
                if(findProduct){
                    this.setState({
                        data: findProduct
                    })
                } else{
                    console.log('2222');
                    const dataProduct = await getProduct(productId);
                    this.setState({
                        data : dataProduct
                    })
                    this.props.dispatch(saveProducts(dataProduct));
                }
            }
        } catch (e) {

        }
    }

    render() {
        const {data} = this.state;
        const {item} = this.props;
        return (
            <tr>
                <td>{data.Name}</td>
                <td>${item.Price}</td>
                <td>{item.Quantity}</td>
                <td>${(item.Price)*(item.Quantity)}</td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state.setting)
    return {
        data: state.products.data,
    }
};
export default connect(mapStateToProps)(comProduct);