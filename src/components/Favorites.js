import City from './City';
import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { choose, showDay, showWeek } from '../redux/actions';

class Favorites extends React.Component {
    handleClick = (city) => {
        this.props.choose({ name: city.name, key: city.key })
        this.props.showDay()
        this.props.showWeek()
    }

    render() {

        return (
            <div id="city-container">
                {this.props.local.map((item, i) => {
                    return (
                        <Link to={`/`} onClick={() => this.handleClick({ name: item.city, key: item.cityKey })}>
                            <City key={i} cityKey={item.cityKey}
                                name={item.city}
                                img={item.img}
                                text={item.text}
                                temp={Math.round(item.temp)} />
                        </Link>
                    );
                })}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        local: state.local,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        choose: (city) => dispatch(choose(city)),
        showDay: () => dispatch(showDay()),
        showWeek: () => dispatch(showWeek()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)


