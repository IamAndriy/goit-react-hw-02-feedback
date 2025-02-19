import { Component } from "react";
import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export class FeedbackOptions extends Component {

    render (){

        const {options, onLeaveFeedback} = this.props;

        return  <ul className={css["btn-ul"]}>
                    {
                        options.map((item, idx) => <li key={idx} className={css["btn-li"]}>
                                                    <button  className={css.btn} type="button" name={item} onClick={onLeaveFeedback}>{item}</button>
                                                   </li>)
                    }
                </ul>
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}