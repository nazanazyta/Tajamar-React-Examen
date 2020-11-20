import React, { Component } from 'react';
import Global from './../../Global';
import axios from 'axios';

export default class InsertarPersonaje extends Component {

    cajaNomRef = React.createRef();
    cajaImaRef = React.createRef();
    cajaSerRef = React.createRef();

    state = { status: false }

    nuevaSerie = (e) => {
        e.preventDefault();
        var nom = this.cajaNomRef.current.value;
        var ima = this.cajaDirRef.current.value;
        var ser = this.cajaClaRef.current.value;
        var personaje = {
            nombre: nom
            , imagen: ima
            , idSerie: ser
        };
        var url = Global.urlseries + 'api/personaje';
        axios.post(url, personaje).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        return (
            <div>
                <h1>Nuevo personaje</h1>
                <form onSubmit={this.nuevaSerie} style={{width: "50%", margin: "auto"}}>
                    <label>Nombre: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaNomRef} />
                    <label>Imagen: </label>
                    <input type="text" name="cajaima" className="form-control" ref={this.cajaImaRef} />
                    <label>Serie: </label>
                    <input type="text" name="cajaser" className="form-control" ref={this.cajaSerRef} /><br />
                    <button className="btn btn-success">Añadir</button>
                </form>
            </div>
        )
    }
}
