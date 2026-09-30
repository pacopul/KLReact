import React from "react";
const TeamCard = ({ nombre, escudo, poster }) => {
    // funcionalidad
    return (
        // contenido
        <div className="card bg-dark text-white">
            <img className="card-img" src={poster}
                alt="Title" />
            <div class="card-img-overlay d-flex justify-content-end align-items-end">
                <div class="w-25 text-center rounded-pill p-2 bg-dark bg-opacity-75">
                    <img src={escudo}
                        alt="" width="100" height="100" />
                    <h5 className="card-title">{nombre}</h5>
                </div>
            </div>
        </div>
    );
}
export default TeamCard;
