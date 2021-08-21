import { Component } from 'react';

class BuggyComponent extends Component<{}, any> {
    // BuggyComponent throws error as state of BuggyComponent is not defined
    render() {
        return <h1>{this.state.title}</h1>;
    }
}

export default BuggyComponent;
