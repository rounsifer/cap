import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class TrophyDetail extends React.Component {

    state = {
        trophy: {}
    }

    componentDidMount() {
        // this queries server and populates the students 
        // list with all students
        const trophyID = this.props.match.params.trophyID;
        axios.get('http://localhost:8000/api/trophies/' + trophyID)
            .then(res => {
                this.setState({
                    trophy: res.data
                });
            })
    }

    render() {
        return (
            <Card title={this.state.trophy.title}>
                <p>{this.state.trophy.content}</p>
            </Card>
        )
    }
}

export default TrophyDetail;