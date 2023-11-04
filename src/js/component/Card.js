import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Card.css";

export const Card = () => {
    const { store, actions } = useContext(Context)
    useEffect (() =>{
        actions.getcontact()
    },[])
    return (
        <div className="container">
            {store.contact.map((item, index) => (
                <div className="card mb-3" style={{ width: "auto" }} key={index}>
                    <div className="row g-0">
                        <div className="col-lg-4" id="profile">
                            <img src="https://img.freepik.com/fotos-premium/black-circle-with-man-s-head-in-circle_745528-2886.jpg?size=338&ext=jpg&ga=GA1.1.1016474677.1697155200&semt=ais" alt="contacto"/>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-body" id="lista_contact">
                                <h3 className="card-title"> {item.full_name}</h3>
                                <h5 className="card-title text-secondary"><i className="fa-solid fa-envelope"></i>  {item.email}</h5>
                                <h5 className="card-title text-secondary"><i className="fa-solid fa-book"></i>  {item.agenda_slug}</h5>
                                <h6 className="card-title text-secondary"><i className="fa-solid fa-location-dot"></i>   {item.address}</h6>
                                <h5 className="card-title text-secondary"><i className="fa-solid fa-phone"></i>  {item.phone}</h5>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-block col-lg-2" id="botones">
                            <button className="btn btn-success" type="button" id="verde"><i className="fa-solid fa-pencil"></i></button>
                            <button className="btn btn-danger" type="button" id="rojo" onClick={()=>actions.handlerDelete(item.id)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};