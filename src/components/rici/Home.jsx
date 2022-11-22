import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import "./home.css"

export const Home = () => {
    return (
        <React.Fragment>
            <h1 className="head">View Documents by Region and Country</h1>

            <Grid container spacing={3} className="homebar">
                <Grid item xs={6}>
                    <TextField label="Search" variant="outlined" fullWidth />
                </Grid>

                <Grid item xs={4}>
                    <Button variant="contained" color="primary" fullWidth>Search</Button>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}