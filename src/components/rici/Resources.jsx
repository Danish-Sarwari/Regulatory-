import React, { useState, useEffect } from "react";
import "./resources.css"
import RecourcesItem from "./RecourcesItem";
import Select from "react-select";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
export const Resources = () => {

    const [data, setData] = useState([])

    const [countriesdata, setCountriesdata] = useState([])
    const [countries, setCountries] = useState("")

    const [sectionsData, setSectionData] = useState([])
    const [section, setSection] = useState("")

    const [alldata, setAllData] = useState([])


    const getData = async () => {
        const result1 = await axios.get("http://localhost:5000/alldatas")
        // console.log(result1.data)
        setData(result1.data)
    }

    useEffect(()=>{
        getData()
    },[])


    return (
        <React.Fragment>
            <h1 className="heading">Human Drugs and biologics</h1>

            <Grid container spacing={1}>

                <Grid item xs={3} className="findcity1">
                    <TextField label="Search here" variant="outlined" fullWidth/>
                </Grid>

                {/* <Grid item xs={3} className="findcity1">
                    <Select options={sectionsData} onChange={(val) => setSection(val.label)} />
                </Grid>

                <Grid item xs={3} className="findcity2">
                    <Select options={countriesdata} onChange={(val) => setCountries(val.label)} />
                </Grid> */}


                <Grid item xs={12} sx={{ marginTop: "280px" }}>
                    {
                        data.map((item) => {
                            return (
                                <RecourcesItem item={item} />
                            )
                        })
                    }
                </Grid>

            </Grid>








        </React.Fragment>
    )
}