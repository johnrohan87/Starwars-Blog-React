import React, { useEffect, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function convertPeopleIntoHTML(people) {
	//<p key={planet.name}>{planet.name}</p>;
	//let data = people;
	//console.log(data);

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
				<div className="d-flex justify-content-between">
					<Link to={"./people/" + btoa(people.url)}>
						<div className="btn btn-primary" type="button" id={people.url}>
							Learn More
						</div>
					</Link>
					<div className="btn btn-primary d-flex justify-content-between" id={people.url} type="button">
						☆
					</div>
				</div>
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
				<div href="#" className="btn btn-primary">
					Go somewhere
				</div>
			</div>
		</div>
	);
}

export const Home = () => {
	useEffect(() => {
		//store.planets == [] ? (actions.getPlanets(), actions.getPeople()) : "";
		actions.getPlanets();
		actions.getPeople();
	}, []);

	const { actions, store } = useContext(Context);
	const [favorite, setFavorite] = useState(null);
	return (
		<div className="text-center mt-5">
			{store.planets.length == 0 ? /*<p>No planets</p>*/ "" : ""}
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
