import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
	state = {
		noticias: []
	}

	componentDidMount() {
		this.consultarNoticias();

	}

	consultarNoticias = async (categoria = 'general') => {
		const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=36&apiKey=f351d0269b0e4d6c89beec3bf201de5c`;

		const respuesta = await fetch(url);
		const noticias = await respuesta.json();
		console.log(noticias.articles);

		this.setState({
			noticias : noticias.articles
		})
	}

	render() {
		return (
			<Fragment>
				<Header
					titulo="Noticias React API"
				/>
				<div className="container white contenedor-noticias">
					<Formulario 
						consultarNoticias={this.consultarNoticias}	
					/>
					<ListaNoticias 
						noticias={this.state.noticias}
					/>
				</div>
			</Fragment>
		)
	}
}



export default App;
