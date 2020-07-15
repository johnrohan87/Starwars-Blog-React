import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Favorite = ({ myFavorite }) => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div
				className="btn btn-primary d-flex justify-content-between"
				type="button"
				onClick={() => alert(myFavorite.name)}>
				☆
			</div>
		</nav>
	);
};

Favorite.propTypes = {
	myFavorite: PropTypes.func
};
