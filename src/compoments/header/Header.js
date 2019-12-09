import React,{ Component } from 'react';
import logo from '../../logo.svg';
import Home from '../../pages/Home';
import Stores from '../../pages/Stores';
import Invoice from '../../pages/Invoice';
import InvoiceDetail from '../../pages/InvoiceDetail';
import CreateStore from '../../pages/CreateStore';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Router>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="/">Home</Link></li>
                        {/*<li className="list-inline-item"><Link to="/stores">Store</Link></li>*/}
                        {/*<li className="list-inline-item"><Link to="/invoice">Invoice</Link></li>*/}
                    </ul>
                    <Switch>
                        <Route path="/createstore" component={CreateStore} exact/>
                        <Route path="/:idstores" exact component={Stores} />
                        <Route path="/:idstores/:idpaymentmethod" exact component={Invoice} />
                        <Route path="/:idstores/:idpaymentmethod/:idinvoice" exact component={InvoiceDetail} />
                        <Route path="/" component={Home} exact/>
                    </Switch>
                </Router>
            </header>
        );
    }
}

export default Header;
