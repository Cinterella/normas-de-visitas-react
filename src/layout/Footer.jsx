import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="main-footer">
            {/*Column1*/}
            <div className="col">
                <FontAwesomeIcon icon={faMapMarkerAlt} id="IconoMenu" />
                <FontAwesomeIcon icon={faMapMarkerAlt} id="IconoMenu" />
                <FontAwesomeIcon icon={faMapMarkerAlt} id="IconoMenu" />
            </div>
            <div className="col">
                {/*Column1*/}
                <FontAwesomeIcon icon={faMapMarkerAlt} id="IconoMenu" />
                <FontAwesomeIcon icon={faMapMarkerAlt} id="IconoMenu" />
                <FontAwesomeIcon icon={faMapMarkerAlt} id="IconoMenu" />
            </div>
        </div>
    )
}

export default Footer;
