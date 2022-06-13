import React from "react";
import { connect } from 'react-redux';

class Day extends React.Component {
    render() {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className='day'>
                <h3>{days[new Date(this.props.name).getDay()]}</h3>
                <img src={`https://www.accuweather.com/images/weathericons/${this.props.icon}.svg`} />
                <p>{this.props.metric ? this.props.min : Math.round(this.props.min * 1.8 + 32)}&#176;{this.props.metric ? 'C' : 'F'} - {this.props.metric ? this.props.max : Math.round(this.props.max * 1.8 + 32)}&#176;{this.props.metric ? 'C' : 'F'}</p>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        metric: state.metric,
    }
}

export default connect(mapStateToProps)(Day)