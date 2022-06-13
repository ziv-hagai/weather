import React from "react";
import { connect } from 'react-redux';
import Day from './Day';

class Week extends React.Component {
    render() {
        if (this.props.week) {
            return (
                this.props.week.DailyForecasts.map((day, i) => {
                    return (
                        <Day key={i}
                            name={day.Date}
                            icon={day.Day.Icon}
                            min={Math.round(day.Temperature.Minimum.Value)}
                            max={Math.round(day.Temperature.Maximum.Value)} />
                    )
                })
            )
        }

    }
}
const mapStateToProps = (state) => {
    return {
        week: state.week,
    }
}

export default connect(mapStateToProps)(Week)