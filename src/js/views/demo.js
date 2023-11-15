import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [inputName, setInputName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputNumber, setInputNumber] = useState("");
	const [inputAddress, setInputAddress] = useState("");
	const [inputAgenda, setInputAgenda] = useState("");
		console.log({inputName, inputEmail, inputNumber, inputAddress,inputAgenda});
	return (
		<div className="container">
			<form>
				<h1 id="title">Add a new contact</h1>
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input type="text" 
						onChange={(e) => setInputName(e.target.value)}
						value={inputName}
						className="form-control" 
						placeholder="Full name"/>
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" 
					onChange={(e) => setInputEmail(e.target.value)}
					value={inputEmail}
					class="form-control" id="exampleInputEmail1" 
					aria-describedby="emailHelp" 
					placeholder="Enter email"/>
				</div>
				<div className="mb-3">
					<label className="form-label">Phone</label>
					<input type="numbers" 
					onChange={(e) => setInputNumber(e.target.value)}
					value={inputNumber}
					className="form-control" placeholder="Enter phone"/>
				</div>
				<div className="mb-3">
					<label className="form-label">Agenda</label>
					<input type="text" 
						onChange={(e) => setInputAgenda(e.target.value)}
						value={inputAgenda}
						className="form-control" 
						placeholder="Agenda"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Address</label>
					<input type="text" 
					onChange={(e) => setInputAddress(e.target.value)}
					value={inputAddress}
					className="form-control" placeholder="Enter address"/>
				</div>
				<div className="d-grid gap-2">
					<button className="btn btn-primary" type="button" onClick={() => actions.handlerAdd(inputName, inputEmail, inputNumber, inputAddress, inputAgenda)}>save</button>
				</div>
			</form>
			<br />
			<Link to="/">
				<a className="text-reset">or get back to contacts</a>
			</Link>
		</div>
	);
};
