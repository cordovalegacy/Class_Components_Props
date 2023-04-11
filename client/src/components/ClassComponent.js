import React, {Component} from "react";

class ClassComponent extends Component {
    render(){

        const{firstName, lastName, age, hairColor} = this.props

        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>Age: {age}</h3>
                <h3>Hair: {hairColor}</h3>
            </div>
        )
    }
}

export default ClassComponent