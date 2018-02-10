import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getName } from "../actions";
import { Action } from "../actions";
import { AppState } from "../reducers";

interface HelloProps {
    name: string;
    getName: () => Action<string>;
}
interface HelloState {
    greeting: string;
}

class HelloComponent extends Component<HelloProps, HelloState> {

    constructor(props: HelloProps) {
        super(props);
        this.props.getName();
        this.state = {
            greeting: "Hello"
        };
    }

    render() {
        return <div>
            {this.state.greeting} {this.props.name}!
        </div>;
    }

}

function mapStateToProps(appState: AppState) {
    console.log("State = ", appState);
    return {
        name: appState.nameData.name
    };
}

export default connect(mapStateToProps, { getName })(HelloComponent);
