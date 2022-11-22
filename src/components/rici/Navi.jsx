import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./navi.css"

export const Navi = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={2} className="navi1">
            
                    <div className="routing">
                        <Link to="/dashboard">
                            <b>Dashboard</b>
                        </Link>
                    </div>
                    <div className="routing">
                        <Link to="/resources">
                            <b>Resources</b>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}