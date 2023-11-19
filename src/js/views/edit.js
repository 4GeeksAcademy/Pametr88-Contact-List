import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useLocation } from "react-router-dom";


import "../../styles/demo.css";

const edit = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    const location = useLocation()
    const { contact } = location.state
    const [updateName, setUpdateName] = useState(contact.full_name)
    const [updateEmail, setUpdateEmail] = useState(contact.email)
    const [updatePhone, setUpdatePhone] = useState(contact.phone)
    const [updateAddress, setUpdateAddress] = useState(contact.address)

    const navigate = useNavigate()

    const handlerEdit = async () => {
        try {
            if (updateName === "" || updateEmail === "" || updatePhone === "" || updateAddress === "") {
                alert("no se aceptan espacios vacios")
                return;
            }

            const updatedContact = {
                full_name: updateName,
                email: updateEmail,
                phone: updatePhone,
                address: updateAddress,
                agenda_slug: "Pamela"
            };
            await actions.editContact(updatedContact, contact.id);
            navigate("/")
        }

        catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="container" id="formulario">
			<h1 id="title">Editcontact</h1>
            <div className="addContainer">
                <div className="mb-3 entrada">
                    <label className="form-label">Full name:</label>
                    <input type="text" className="form-control" name='full_name' value={updateName} onChange={(e) => setUpdateName(e.target.value)} id="formGroupExampleInput" placeholder="Full name" />
                </div>
                <div className="mb-3 entrada">
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control" name='email' value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} id="formGroupExampleInput" placeholder="Enter Email" />
                </div>
                <div className="mb-3 entrada">
                    <label className="form-label">Phone:</label>
                    <input type="text" className="form-control" name='phone' value={updatePhone} onChange={(e) => setUpdatePhone(e.target.value)} id="formGroupExampleInput" placeholder="Enter Phone" />
                </div>
                <div className="mb-3 entrada">
                    <label className="form-label">Adress:</label>
                    <input type="text" className="form-control" name='address' value={updateAddress} onChange={(e) => setUpdateAddress(e.target.value)} id="formGroupExampleInput" placeholder="Enter Address" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-danger entrada" type="button" onClick={handlerEdit}>save</button>
                </div>

                <br />
                <Link to="/">
                    <a className="text-reset" id="volver"><i class="fa-solid fa-house fa-xl" style={{ color: "#800000" }}></i></a>
                </Link>
            </div >
        </div >
    );
};
export default edit
