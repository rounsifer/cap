import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ProblemDetail extends React.Component {

    state = {
        problem: {}
    }

    componentDidMount() {
        // this queries server and populates the problems detail page
        // with all of the 
        const problemID = this.props.match.params.problemID;
        axios.get('http://localhost:8000/api/problems/' + problemID)
            .then(res => {
                this.setState({
                    problem: res.data
                });
            })
    }

    render() {
        return (
            <Card title={this.state.problem.title}>
                <p>All of the <b>{this.state.problem.title}</b> problems will be listed here.</p>
            </Card>
        )
    }
}

export default ProblemDetail;