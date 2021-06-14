import React, {Component} from 'react'
import {connect} from "react-redux";
import {loadDetectStat, loadDetectStatBaseOnPeriodReceive} from "../store/DetecDStat";
import {breadcrumbChange} from "../store/Breadcrumb";
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import {Loader, Types} from 'react-loaders';
import StockChartsForPPS from "./stockChartsForPPS";
import {getDashboardCollegeScore} from "../service/dashboardService";
import {toast} from "react-toastify";
import _ from 'lodash'


class Dashboard extends Component {
    state = {
        loading: false,
        chart: []
    }

    componentDidMount = async () => {
        await this.getChartData()
    }

    getChartData = async () => {
        const {data} = await getDashboardCollegeScore()
        if (data.isSuccess) {
            this.setState({
                chart: data.result.resultDetail,
            })
        } else {
            toast.error(data.errorMessage)
        }
    }

    render() {
        const group = _.groupBy(this.state.chart, 'collegeName')
        console.log("group",group)
        return (
            <div>
                <BlockUi tag="div" blocking={this.state.loading} message="لطفا منتظر بمانید"
                         keepInView={true}>
                    <div className="row">

                            {Object.entries(group).map(([key, value]) => (
                                <div className="col-lg-6 col-xxl-6">
                                    <div id={key} className="card card-custom bg-gray-100 gutter-b">
                                        <StockChartsForPPS data={value} name={key}/>
                                    </div>
                                </div>


                            ))}
                    </div>
                </BlockUi>

            </div>

        )
    }
}

export default Dashboard