import { Link } from 'react-router-dom';
import React from "react";
import { connect } from 'react-redux';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { changeMetric } from '../redux/actions';

class Top extends React.Component {

    render() {
        return (
            <div >
                <Navbar className='title' bg="white" >
                    <Container className='top'>
                        <Navbar.Brand >WHAT'S<span id="the">the</span>WEATHER</Navbar.Brand>
                        <Nav className='links'>
                            <span id='switch'>F<Form.Check type="switch" defaultChecked={this.props.metric} onChange={this.props.changeMetric} />C</span>
                            <Link className='nav' to='/' > Home</Link>
                            <Link className='nav' to='/favs'> Favorites</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        metric: state.metric,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMetric: () => dispatch(changeMetric()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)

