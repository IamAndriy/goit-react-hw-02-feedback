import { Component } from "react";

export class Section extends Component{

        render(){
            const {children} = this.props;
            return  <section>
                        {children}
                    </section>
        }

}