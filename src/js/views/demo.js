import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<form>
				<h1>Add a new contact</h1>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Full Name</label>
					<input type="text" className="form-control"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Email</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Phone</label>
					<input type="numbers" className="form-control"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Address</label>
					<input type="text" className="form-control"/>
				</div>
				<div class="d-grid gap-2">
					<button className="btn btn-primary" type="button">Button</button>
				</div>
			</form>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
