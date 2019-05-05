import React from 'react';
import axios from 'axios';

import Problems from '../components/Problem';

class ProblemList extends React.Component {

    state = {
        problems: []
    }

    componentDidMount() {
        // this queries server and populates the problems 
        // list with all students
        axios.get('http://localhost:8000/api/problems/')
            .then(res => {
                this.setState({
                    problems: res.data
                });
            })
    }

    render() {
        return (
            <Problems style={{ background: '#fff' }} data={this.state.problems} />
        )
    }
}

export default ProblemList;