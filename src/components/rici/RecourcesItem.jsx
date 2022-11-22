import React from 'react';
import { Grid, Card, CardContent } from "@mui/material"
import "./resources.css"


const RecourcesItem = ({ item }) => {
    return (
        <div>
            <Grid item xs={12}>
                {/* <Card sx={{width:"1000px", marginLeft:"150px", marginTop:"50px"}}> */}
                <Card sx={{marginLeft:"150px",bgcolor:item.section}}>
                    <CardContent>
                        <h2>{item.name}</h2>
                        <a href={item.toUrl} target="_blank" >{item.toUrl}</a><br />
                        <a href={item.link} target="_blank" >{item.link}</a><br />
                        <a href={item.link1} target="_blank" >{item.link1}</a><br />
                        {/* <a href={item.toUrl}></a> */}
                    </CardContent>
                </Card>
            </Grid>

        </div>
    );
}

export default RecourcesItem;
