import React, { useState, useEffect } from "react";
import FeedIcon from '@mui/icons-material/Feed';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import "./dashboard.css"
import { Card, CardContent, Grid } from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RouteIcon from '@mui/icons-material/Route';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import Select from "react-select"
import axios from "axios";

export const Dashboard = () => {
    const [name, setName] = useState("Canada5")
    const [links, setLinks] = useState(<a href="https://www.google.com">go to google</a>)
    const [papagraph, setPapagraph] = useState("Access detailed insights to guide you through medical device and in-vitro diagnostics requirements. RAMS Regulatory Reports added four new countries (Canada, Saudi Arabia, Taiwan, Hong Kong) and updated six other markets.")
    const [cityData, setCityData] = useState([])

    const [city, setCity] = useState("")

    const getdata = async () => {
        const result = await axios.get("http://localhost:5000/cities")
        console.log(result.data)
        setCityData(result.data)
    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <React.Fragment>

            <Grid container spacing={3}>
                <Grid item xs={7} className="card1">
                    <Card sx={{ margin: "10px" }}>
                        <CardContent>
                            <FeedIcon fontSize="large" sx={{ marginLeft: "10px" }} />
                            <h2>Heading</h2>

                            <p>
                                <img src={"Images/" + name + ".jpg"} alt={name} />
                            </p>

                            <b>{links}</b>
                            <p>{papagraph}</p>

                            <hr />
                            <div className="click">
                                <input type="radio"
                                    onClick={() => setName("Canada5") & setLinks(<a href="https://www.google.com">google</a>) & setPapagraph("Access detailed insights to guide you through medical device and in-vitro diagnostics requirements. RAMS Regulatory Reports added four new countries (Canada, Saudi Arabia, Taiwan, Hong Kong) and updated six other markets.")}
                                    name="click" id="click" />

                                <input type="radio"
                                    onClick={() => setName("slide1") & setLinks(<a href="https://www.facebook.com">facebook</a>) & setPapagraph("Upcoming IVDR regulations require a thorough Performance Evaluation Plan and Performance Evaluation Report. Two Smart Builders help you comply with IVDR 2017/746 with guided documentation. See how IVDR PEP and PER Smart Builders can simplify compliance.")}
                                    name="click" id="click" />
                            </div>

                        </CardContent>
                    </Card>

                    <Card sx={{ margin: "10px" }}>
                        <CardContent className="Content">
                            <NotificationsActiveOutlinedIcon fontSize="large" sx={{ marginLeft: "10px", marginTop: "10px" }} />
                            <h2>Notification</h2>

                            <div className="cardcontainer2-1">
                                <p>Aug 16,2022</p>
                                <h3>Welcome to RAMS</h3>
                            </div>
                        </CardContent>
                    </Card>

                    <Card sx={{ margin: "10px" }}>
                        <CardContent>
                            <CalendarTodayOutlinedIcon fontSize="large" sx={{ marginLeft: "10px" }} />
                            <h2>Featured Content</h2>

                            <div className="picture-para">
                                <div className="pic">
                                    <img src="Images/ideabulb.jpeg" alt="" />
                                </div>

                                <div className="para">
                                    <p>Plan your market expansion with RAMS Regulatory Intelligence. You can now find valuable market insights like process charts and FAQs in the updated Regulatory Intelligence premium service. This service is free to all active Consulting Clients and Rep Clients.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={5}>
                    <div className="Rcontainer">
                        <div className="R-box-1">

                            <h2>Explore RAAMS</h2>

                            <img src="Images/RICI 1.jpg" alt="" />

                            <div className="input-search">

                                <label htmlFor="">Country</label>
                                 <Select options={cityData} onChange={(val) => setCityData(val.label)} />
                                <button>Go</button>
                            </div>

                            <div className="R-Box-2">
                                <h2>Primum Services</h2>

                                <div className="R-Box-3">
                                    <div className="icon-box-1">
                                        <AccountTreeIcon fontSize="large" />
                                    </div>

                                    <div className="textbox-1">
                                        <h3>Product Classification</h3>
                                        <p>Quickly identify device classification to clarify regulatory requirements.</p>
                                    </div>
                                </div>

                                <div className="R-Box-3">
                                    <div className="icon-box-1">
                                        <RouteIcon fontSize="large" />
                                    </div>
                                    <div className="textbox-1">
                                        <h3>Regulatory Reports</h3>
                                        <p>Access Regulatory Essentials reports that outline key requirements by market.</p>
                                    </div>
                                </div>

                                <div className="R-Box-3">
                                    <div className="icon-box-1">
                                        <AddToDriveIcon fontSize="large" />
                                    </div>

                                    <div className="textbox-1">
                                        <h3>Registration Tracker</h3>
                                        <p>Simplify your work with automated registration and certification tracking.</p>
                                    </div>
                                </div>

                                <div className="R-Box-3">
                                    <div className="icon-box-1">
                                        <PlaylistAddCheckIcon fontSize="large" />
                                    </div>
                                    <div className="textbox-1">
                                        <h3>Smart Builder</h3>
                                        <p>Build documentation faster and reduce errors using templates that provide step-by-step guidance.</p>
                                    </div>
                                </div>

                            </div>



                        </div>

                    </div>

                </Grid>
            </Grid>
            {/* <div className="cardcontaier">
                <FeedIcon fontSize="large" sx={{marginLeft:"10px"}}/>
                <h2>Heading</h2>
                <p>
                    <img src={"Images/" + name + ".jpg"} alt={name} />
                </p>
                <b>{links}</b>
               <p>{papagraph}</p>
                <p>{papagraph}</p>
               <p>{papagraph}</p> 
            
                <hr />

                <div className="btn">

                    <input type="radio" onClick={() => setName("Canada5") & setPapagraph("Access detailed insights to guide you through medical device and in-vitro diagnostics requirements. RAMS Regulatory Reports added four new countries (Canada, Saudi Arabia, Taiwan, Hong Kong) and updated six other markets.")& setLinks(<a href="https://www.google.com">go to google</a>)} name="click" id="" />

                    <input type="radio" onClick={() => setName("slide1") & setPapagraph("Upcoming IVDR regulations require a thorough Performance Evaluation Plan and Performance Evaluation Report. Two Smart Builders help you comply with IVDR 2017/746 with guided documentation. See how IVDR PEP and PER Smart Builders can simplify compliance.")&setLinks(<a href="https://www.google.com">go to google</a>)}  name="click" id="" />
                    
                    <input type="radio" onClick={() => setName("slide2") & setPapagraph("Lorem ipsum dolor sit amet consectetur adipisicing elit.amet consectetur adipisicing elit,it amet consectetur adipisicing elit.amet") & setLinks(<a href="https://www.google.com">go to google</a>)} name="click" id="" />

                </div>

            </div>

            <div className="cardcontaier2">
                <NotificationsActiveOutlinedIcon fontSize="large" sx={{ marginLeft: "10px", marginTop: "10px" }} />
                <h2>Notification</h2>

                <div className="cardcontainer2-1">
                    <p>Aug 16,2022</p>
                    <h3>Welcome to RAMS</h3>
                </div>
            </div>

            <div className="cardcontaier3">
                <CalendarTodayOutlinedIcon fontSize="large" sx={{marginLeft:"10px"}}/>
                <h2>Featured Content</h2>

                <div className="picture-para">
                    <div className="pic">
                        <img src="Images/ideabulb.jpeg" alt="" />
                    </div>

                    <div className="para">
                        <p>Plan your market expansion with RAMS Regulatory Intelligence. You can now find valuable market insights like process charts and FAQs in the updated Regulatory Intelligence premium service. This service is free to all active Consulting Clients and Rep Clients.</p>
                    </div>
                </div>
                
               
            </div> */}


        </React.Fragment>
    )
}