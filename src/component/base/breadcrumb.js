import React, {Component} from "react";
import {loadDetectStat, loadDetectStatBaseOnPeriodReceive} from "../store/DetecDStat";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class Breadcrumb extends Component {
    componentDidMount() {
        console.log("pp", this.props.breadcrumb)
    }

    render() {
        return (
            <React.Fragment>
                <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">{ this.props.breadcrumb.data.payload.main}</h5>
                <div
                    className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
                <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                    {this.props.breadcrumb.data.payload.part.map(m => (
                        <li className="breadcrumb-item">
                            <Link to={`/${m.link}/`} className="text-muted">{m.name}</Link>
                            {/*<a href={m.link} className="text-muted">{m.link}</a>*/}
                        </li>
                    ))}
                    {/*<li className="breadcrumb-item">*/}
                    {/*    <a href="" className="text-muted">Crud</a>*/}
                    {/*</li>*/}
                    {/*<li className="breadcrumb-item">*/}
                    {/*    <a href="" className="text-muted">KTDatatable</a>*/}
                    {/*</li>*/}
                    {/*<li className="breadcrumb-item">*/}
                    {/*    <a href="" className="text-muted">API</a>*/}
                    {/*</li>*/}
                    {/*<li className="breadcrumb-item">*/}
                    {/*    <a href="" className="text-muted">API Methods</a>*/}
                    {/*</li>*/}
                </ul>

            </React.Fragment>


        );
    }
}

const mapStateToProps = state => ({
    breadcrumb: state.entities.breadcrumb,
})
const mapDispatchToProps = dispatch => ({
    // loadDetectStat: (state) => dispatch(loadDetectStat(state)),
    // loadDetectStatBaseOnPeriodReceive: (start, end) => dispatch(loadDetectStatBaseOnPeriodReceive(start, end)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb)