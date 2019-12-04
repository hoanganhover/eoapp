import React from 'react';
import {getProduct} from '../../modules/setting/service';

class comProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    async componentDidMount() {
        try {
            const {item} = this.props;
            const productId = item.ProductId;
            if (productId) {
                const dataProduct = await getProduct(productId);
                this.setState({
                    data : dataProduct
                })

            }
        } catch (e) {

        }
    }

    render() {
        const {data} = this.state;
        return (
            <tr>
                <td>
                    {data.Name}
                </td>
                <td>
                    {data.Price}
                </td>
                <td>
                    {/*{data.Quantity}*/} 1
                </td>
                <td>
                    {data.Quantity}
                </td>
            </tr>
        )
    }
}

export default comProduct;