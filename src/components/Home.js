import City from './City';
import Week from './Week';
import React from "react";
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        if (this.props.day[0]) {
            return (
                <div id="home">
                    <div id="home-container">
                        <City
                            cityKey={this.props.cityKey}
                            name={this.props.cityName}
                            img={`https://www.accuweather.com/images/weathericons/${this.props.day[0].WeatherIcon}.svg`}
                            text={this.props.day[0].WeatherText}
                            temp={Math.round(this.props.day[0].Temperature.Metric.Value)} />
                    </div>
                    <div id='week'>
                        <Week />
                    </div>
                </div>

            );
        } else {
            return (
                <></>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        day: state.day,
        cityName: state.cityName,
        cityKey: state.cityKey
    }
}

export default connect(mapStateToProps)(Home)
