import React from "react";
import { Grid } from "@mui/material";
import "./TopBar.css"

export const TopBar = () => {
    return (
        <React.Fragment>

            <Grid container spacing={3}>
                <Grid item xs={2} className="top1">
                    <h2>RICI</h2>
                </Grid>

                <Grid item xs={8} className="top2">
                    <h2>Regulatory Intelligence-Compiliance Insight</h2>
                </Grid>

                <Grid item xs={3} className="top3">
                    <h2>User Login</h2>
                </Grid>
            </Grid>

           {/* <div className="top-container">
                <div className="box-1">
                    <p>RICI</p>
                </div>

                <div className="box-2">
                    <p>Regulatory Intelligence-Compiliance Insight</p>
                </div>

                <div className="box-3" >
                    <p>User Login</p>
                </div>
           </div> */}

           
        </React.Fragment>
    )
}