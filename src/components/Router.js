import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuSeries from './Series/MenuSeries';
import Serie from './Series/Serie';
import InsertarPersonaje from './Series/InsertarPersonaje';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuSeries />
                    <Switch>
                        <Route exact path="/serie/:id" component={Serie} />
                        <Route exact path="/insertar" component={InsertarPersonaje} />
                        {/* <Route exact path="/" component={Peliculas} />
                        <Route exact path="/create" component={InsertarPelicula} />
                        <Route exact path="/detalles/:id" render={props => {
                            var id = props.match.params.id;
                            return <DetallesPelicula id={id} />
                        }} />
                        <Route exact path="/update/:id" render={props => {
                            var id = props.match.params.id;
                            return <UpdatePelicula id={id} />
                        }} />
                        <Route exact path="/delete/:id" render={props => {
                            var id = props.match.params.id;
                            return <DeletePelicula id={id} />
                        }}/> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}