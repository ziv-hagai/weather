import React from "react";
import { connect } from 'react-redux';
import { complete, choose, showDay, showWeek } from '../redux/actions';
import { AiOutlineSearch } from "react-icons/ai";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleClick = (city) => {
        this.props.choose({ name: city.LocalizedName, key: city.Key })
        this.props.showDay()
        this.props.showWeek()
        this.setState({ text: '' })
    }

    render() {
        return (
            <div id="search-container">
                <input id="search" type='text' placeholder="search..." onChange={(e) => this.handleChange(e)} value={this.state.text}></input>
                <button onClick={(e) => this.props.complete(this.state.text)} id="search-btn"><AiOutlineSearch /></button>
                <div id='list'>
                    {
                        this.props.cities.map((city, i) => {
                            console.log(city);
                            return (
                                <div key={i} id={city.Key} onClick={() => this.handleClick(city)}><strong>{city.LocalizedName}</strong><span> ({city.Country.ID})</span></div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        complete: (text) => dispatch(complete(text)),
        choose: (city) => dispatch(choose(city)),
        showDay: () => dispatch(showDay()),
        showWeek: () => dispatch(showWeek()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
