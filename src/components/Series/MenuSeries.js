import React, { Component } from 'react';
import Global from './../../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class MenuSeries extends Component {
    state = {
        series: []
        , status: false
    }

    cargarSeries = () => {
        var url = Global.urlseries;
        var request = "api/series";
        axios.get(url + request).then(res => {
            this.setState({
                series: res.data
                , status: true
            });
        });
        console.log(url);
    }

    componentDidMount = () => {
        this.cargarSeries();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/insertar">Nuevo Personaje</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/modificar">Modificar personaje</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Series
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {this.state.series.map((serie, i) => {
                                return(
                                    <NavLink key={i} className="nav-link" to={"/serie/" + serie.idSerie}>{serie.nombre}</NavLink>
                                );
                            })}
                        </div>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}
