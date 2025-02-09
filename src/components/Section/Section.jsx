import { Component } from "react";
import PropTypes from "prop-types";

export class Section extends Component{

        render(){
            const {children} = this.props;
            return  <section>
                        {children}
                    </section>
        }

}

Section.propTypes = {
    children: PropTypes.node.isRequired,
}