import React from 'react';
import axios from 'axios';

import Trophies from '../components/Trophy';

class TrophyList extends React.Component {

    state = {
        trophies: []
    }

    componentDidMount() {
        // this queries server and populates the students 
        // list with all students
        axios.get('http://localhost:8000/api/trophies/')
            .then(res => {
                this.setState({
                    trophies: res.data
                });
            })
    }

    render() {
        return (
            <Trophies data={this.state.trophies} />
        )
    }
}

export default TrophyList;