import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

function convertPeopleIntoHTML(people) {
	//<p key={planet.name}>{planet.name}</p>;
	return (
		<div className="card">
			<div className="card-body">
				<img src="https://via.placeholder.com/400x200" />
				<h5 className="card-title">{people.name}</h5>
				<p className="card-text">
					<div>Gender: {people.gender}</div>
					<div>Hair Color: {people.hair_color}</div>
					<div>Eye Color: {people.eye_color}</div>
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

function convertPlanetIntoHTML(planet) {
	//<p key={planet.name}>{planet.name}</p>;
	return (
		<div className="card">
			<div className="card-body">
				<img src="https://via.placeholder.com/400x200" />
				<h5 className="card-title">{planet.name}</h5>
				<p className="card-text">
					<div>Population: {planet.population}</div>
					<div>Terrain: {planet.terrain}</div>
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export const Home = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<button
				type="button"
				onClick={() => {
					actions.getPlanets();
					actions.getPeople();
				}}>
				get API list
			</button>
			{store.planets.length == 0 ? <p>No planets</p> : ""}
			<div className="w-100 people">
				{store.planets.length == 0 ? "" : <h1 className="d-flex text-danger p4">Characters</h1>}
				<div className="d-inline-flex">{store.people.map(convertPeopleIntoHTML)}</div>
			</div>
			<div className="w-100 planets">
				{store.planets.length == 0 ? "" : <h1 className="d-flex text-danger p4">Planets</h1>}
				<div className="d-inline-flex">{store.planets.map(convertPlanetIntoHTML)}</div>
			</div>
		</div>
	);
};
