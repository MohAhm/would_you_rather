import React, { Component } from 'react'
import { connect } from 'react-redux';
import PollCard from './PollCard';


class Home extends Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <h3>Questions</h3>
                <ul className="home-list">
                    {this.props.pollsIds.map((id) => (
                        <li key={id}>
                            <PollCard id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = ({ polls }) => ({
    pollsIds: Object.keys(polls)
        .sort((a, b) => polls[b].timestamp - polls[a].timestamp)
})


export default connect(mapStateToProps)(Home)