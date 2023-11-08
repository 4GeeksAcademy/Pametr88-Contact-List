import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<form>
				<h1 id="title">Add a new contact</h1>
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input type="text" className="form-control" placeholder="Full name"/>
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
				</div>
				<div className="mb-3">
					<label className="form-label">Phone</label>
					<input type="numbers" className="form-control" placeholder="Enter phone"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Address</label>
					<input type="text" className="form-control" placeholder="Enter address"/>
				</div>
				<div className="d-grid gap-2">
					<button className="btn btn-primary" type="button">save</button>
				</div>
			</form>
			<br />
			<Link to="/">
				<a className="text-reset">or get back to contacts</a>
			</Link>
		</div>
	);
};
