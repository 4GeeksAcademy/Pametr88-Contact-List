import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({full_name:"",email:"",agenda_slug:"Pamela",address: "", phone: ""});
	const info=(event)=>{
		setData({...data, [event.target.name]:event.target.value})
	}
	const Agregar=(event)=>{
		event.preventDefault();
		actions.handlerAdd(data)
	}

	return (
		<div className="container">
			<h1 id="title">Add a new contact</h1>
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input type="text" 
						onChange={info}
						value={data.full_name}
						name="full_name"
						className="form-control" 
						placeholder="Full name"/>
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" 
					onChange={info}
					value={data.email}
					name="email"
					class="form-control" id="exampleInputEmail1" 
					aria-describedby="emailHelp" 
					placeholder="Enter email"/>
				</div>
				<div className="mb-3">
					<label className="form-label">Phone</label>
					<input type="numbers" 
					onChange={info}
					value={data.phone}
					name="phone"
					className="form-control" placeholder="Enter phone"/>
				</div>
				<div className="mb-3">
					<label className="form-label">Agenda</label>
					<input type="text" 
						onChange={info}
						value={data.agenda_slug}
						name="agenda_slug"
						className="form-control" 
						placeholder="Agenda"/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Address</label>
					<input type="text" 
					onChange={info}
					value={data.address}
					name="address"
					className="form-control" placeholder="Enter address"/>
				</div>
				<div className="d-grid gap-2">
					<button className="btn btn-primary" type="button" onClick={Agregar}>save</button>
				</div>
			
			<br />
			<Link to="/">
				<a className="text-reset">or get back to contacts</a>
			</Link>
		</div>
	);
};
