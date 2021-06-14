import React, {Component} from 'react'
import loadingImage from "../../loading.gif";

export default class Loading extends Component {
    render() {
        if (this.props.status) {
            return (
                <img src={loadingImage} className="loading"/>

            )
        }
        return (
            <span></span>
        )

    }
}