import React from "react";
// import { Link } from "react-router-dom";
import "../SideData.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";


export const LeftNav = () => {
    return (
        <React.Fragment>
            <div className="side-container">
                <Link to="/Dashboard">
                    <div className="option">
                        <b>Dashboard</b>
                    </div>
                </Link>

                    <Link to="/resources">
                <div className="option">
                        <b>Resources</b>
                </div>
                    </Link>
            </div>
        </React.Fragment>
    )
}