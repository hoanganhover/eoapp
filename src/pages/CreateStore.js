import React from 'react';
import {withRouter} from 'react-router';
import {connect} from "react-redux";
import {creatStore} from '../modules/setting/service';
import {getSetting, addStore} from '../modules/setting/actions';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class CreateStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Description : '',
            Mes : ''
        };
    }
    handleChange = (event,type) => {
        this.setState(
            {
                [type]: event.target.value
            }
        );
    }

    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const {Name,Description} = this.state;
            const data = await creatStore(
                {
                    Name,
                    Description
                }
            );
            //this.props.dispatch(getSetting());
            this.props.dispatch(addStore(data));
            this.setState({
                Mes: "Add New Store Success"
            })
            //alert("Add New Store Success");
        }
        catch (e) {
            event.preventDefault();
            this.setState({
                Mes: e.message
            })
        }
        //console.log('A name was submitted: ', this.state);

    }
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h4 className="mb-4">Create New Store</h4>
                    <form onSubmit={this.handleSubmit} method="POST">
                        <div className="form-group">
                            <label htmlFor="InputName">Name</label>
                            <input type="text" className="form-control" id="InputName" value={this.state.Name} onChange={e => this.handleChange(e,'Name')}/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="InputDescription">Description</label>
                            <input type="text" className="form-control" id="InputDescription" value={this.state.Description} onChange={e => this.handleChange(e,'Description')}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        {
                            this.state.Mes ? <div>
                            {this.state.Mes}
                            </div> : null
                        }
                    </form>
                </div>
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

export default connect(mapStateToProps) (withRouter(CreateStore));
