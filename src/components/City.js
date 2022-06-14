import React from "react";
import { connect } from 'react-redux';
import { getLocal } from '../redux/actions';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
// import { IconCheckbox } from "react-icon-checkbox";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFav: false,
        }
    }

    componentDidMount() {
        const found = this.props.local.find(i => i.cityKey == this.props.cityKey);
        if (found) {
            this.setState({ isFav: true })
        } else {
            this.setState({ isFav: false })
        }
    }

    componentDidUpdate(prevPros) {
        if (this.props.cityKey != prevPros.cityKey) {
            const found = this.props.local.find(i => i.cityKey == this.props.cityKey);
            if (found) {
                this.setState({ isFav: true })
            } else {
                this.setState({ isFav: false })
            }
        }
    }

    changeFav = () => {
        if (this.state.isFav) {
            const found = this.props.local.find(i => i.cityKey == this.props.cityKey);
            const newFavs = this.props.local
            newFavs.pop(this.props.local[found])
            localStorage.setItem('favs', JSON.stringify(newFavs))
            this.props.getLocal()
            this.setState({ isFav: false })

        } else {
            const favCity = {
                isFav: true,
                cityKey: this.props.cityKey,
                city: this.props.name,
                img: this.props.img,
                text: this.props.text,
                temp: this.props.temp
            }
            const newFavs = this.props.local
            newFavs.push(favCity)
            localStorage.setItem('favs', JSON.stringify(newFavs));
            this.setState({ isFav: true })
        }
        console.log(this.state.isFav);

    }


    render() {
        return (
            <div className="city">
                {/* <IconCheckbox
                    checked={this.state.isFav}
                    checkedIcon={<BsHeartFill className='heart' type="heart" />}
                    uncheckedIcon={<BsHeart className='heart' type="heart-o" />}
                    onClick={this.changeFav} /> */}
                <h1>{this.props.name}</h1>

                <img src={this.props.img} />
                <p>{this.props.text}</p>
                <p>{this.props.metric ? this.props.temp : Math.round(this.props.temp * 1.8 + 32)} &#176;{this.props.metric ? 'C' : 'F'}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        local: state.local,
        metric: state.metric
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLocal: () => dispatch(getLocal()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)

// "react-icon-checkbox": "^1.0.1",
