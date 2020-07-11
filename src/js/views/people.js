import React, { useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const People = props => {
	const { actions, store } = useContext(Context);
	const { urlHash } = useParams();
	const currentPeron = store.people.find(p => btoa(p.url) == urlHash);
	//console.log(props);
	//console.log(urlHash);
	if (typeof currentPeron == "undefined") return "Loading";
	return <div>Hello {currentPeron.name}</div>;
};
People.propTypes = {
	history: PropTypes.any
};
