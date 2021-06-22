import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getCars } from '../../redux/actions/getCars';
import Page from './page';

class carsTable extends Component {
    componentWillMount() {
        this.props.findCars()
    }
        
    render() {
        const {
            carsList,
        } = this.props;

        return (
            <Page
                carsList={carsList}                
            />
        );
    }    
}

const mapStateToProps = state => ({
    carsList: state.cars.list,
});

const mapDispatchToProps = {
    findCars: getCars,    
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(carsTable)
);