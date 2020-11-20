import React, { Component } from 'react';
import Global from './../../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Serie extends Component {

    state = {
        serie: {}
        , status: false
    }

    mostrarSerie = () => {
        var request = "api/series/" + this.props.id;
        var url = Global.urlseries + request;
        axios.get(url).then(res => {
            this.setState({
                serie: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarSerie();
    }

    render() {
        return (
            <div>
                {this.state.status === true &&
                (
                    <React.Fragment>
                        <h1>Hola</h1>
                        {/* <br />
                        <img src="{serie.imagen}" />
                        <NavLink to="/" className="btn btn-sm btn-dark">Listado</NavLink>
                        <br /><br />
                        <h3>Nombre: <span style={{color: "green", fontWeight: "bold"}}>{this.state.pelicula.nombre}</span></h3>
                        <h3>Director: <span style={{color: "green", fontWeight: "bold"}}>{this.state.pelicula.director}</span></h3>
                        <h3>Clasificación: <span style={{color: "green", fontWeight: "bold"}}>{this.state.pelicula.clasificacion}</span></h3>
                        <NavLink to={"/update/" + this.state.pelicula.id} className="btn btn-primary">Modificar</NavLink> &nbsp;&nbsp;
                        <NavLink to={"/delete/" + this.state.pelicula.id} className="btn btn-danger">Borrar</NavLink> */}
                    </React.Fragment>
                )}
                {/* <img src="{{ serie.imagen }}" /><br />
                <h1>{{ serie.nombre }}</h1><br />
                <a [routerLink]="['/personajes', serie.idSerie]" class="btn btn-success">Personajes</a> */}
            </div>
        )
    }
}
