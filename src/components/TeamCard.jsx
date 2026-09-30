import React from "react";
const TeamCard = ({ nombre, escudo, poster }) => {
    // funcionalidad
    return (
        // contenido
        <div className="card bg-dark text-white">
            <img className="card-img" src={poster}
                alt="Title" />
            <div className="card-img-overlay">
                <div className="w-20 text-center rounded-circle p-2 bg-dark bg-opacity-50">
                    <img src={escudo}
                        alt="" width="100" height="100" />
                    <h5 className="card-title">{nombre}</h5>
                </div>
            </div>
        </div>
    );
}
export default TeamCard;
