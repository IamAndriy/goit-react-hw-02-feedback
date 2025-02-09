import { Component } from "react";
import css from "./Notification.module.css";
import PropTypes from "prop-types";

export class Notification extends Component {

    render(){
        const {message} = this.props;
        return  <div className={css["massage-div"]}>
                    <p>{message}</p>
                </div>
    }
}

Notification.propTypes = {
    message: PropTypes.string,
}