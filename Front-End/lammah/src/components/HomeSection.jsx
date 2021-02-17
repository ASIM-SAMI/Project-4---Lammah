import API_URL from '../apiConfig.js'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowRight, EyeFill } from 'react-bootstrap-icons';
import Rating from '@material-ui/lab/Rating';



export default function HomeSection() {

    const [dataLoading, setDataLoading] = useState(false)

    const [confirmedFacility, setConfirmedFacility] = useState({})

    const [topFacility, setTopFacility] = useState({})


    //genrate random numbers 

    function randomNumber(min, max) {
        const r = Math.random() * (max - min) + min
        return Math.floor(r)
    }



    useEffect(() => {

        axios.get(`${API_URL}/api/facility/facilities`)
            .then(res => {

                const allFacilities = res.data.facilities.filter(facility => facility.status == 1);

                setConfirmedFacility(allFacilities);

            })

        axios.get(`${API_URL}/api/facility/topFacilities`)
            .then(res => {
                setTopFacility(res.data.facilities);
                setDataLoading(true);
            })



    }, [])


    let index1 = randomNumber(0, confirmedFacility.length)
    let index2 = randomNumber(0, confirmedFacility.length)
    let index3 = randomNumber(0, confirmedFacility.length)
    let index4 = randomNumber(0, confirmedFacility.length)


    return (
        <>
            { dataLoading ? <>


                <div className="section">
{/* 
                    {/* ========================================= */}
                    {/* 1st section "Top Facilities" 1st Row*/}
                    {/* ========================================= */}
                    <div className="top-facilities">
                        <div className="tf-title">
                            <h1>TOP FACILITIES</h1>

                            <h2
                                style={{ color: 'black', fontSize: '1em' }}
                            >THIS Month</h2>
                        </div>
                        <div className="tf-description">
                            <p>
                                Because we Know how social life is important, so Lammah gives you
                                the opportunity to access more than 100 chalets and camps around
                                Kingdom of Saudi Arabia in an easy way to get comfortable meetings
                                with your families and your friends .
                        </p>

                        </div>

                        {/* <Carousel style={{ height: "auto", width: "auto" }}>
                            <Carousel.Item interval={1500}>
                                <Link
                                    style={{ textDecoration: "none" }}>
                                    <Card className="facility-card" >
                                        <Card.Img variant="top"
                                            style={{
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: '50% 50%',

                                            }}
                                            src={topFacility[0].images[0]} />

                                        <Card.Title
                                            style={{
                                                position: 'absolute',
                                                bottom: '20%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                maxWidth: '70%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '1.3em',
                                                maxHeight: '50px',
                                                overflow: 'hidden',

                                            }}>{topFacility[0].name}</Card.Title>
                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                bottom: '10%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            {topFacility[0].city}
                                        </Card.Text>


                                        <small
                                            style={{
                                                position: 'absolute',
                                                bottom: '3%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                backgroundColor: 'rgba(255, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '1.5em',

                                            }}>{topFacility[0].price} SR</small>

                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                top: '2%', left: '0',
                                                color: 'white',
                                                padding: '0 1% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            <Rating readOnly value={topFacility[0].stars} />
                                        </Card.Text>

                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                top: '12%', left: '0',
                                                color: 'white',
                                                padding: '0 1% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            <span /><EyeFill color="white" size={20} /> {topFacility[0].views}
                                        </Card.Text>

                                    </Card>
                                </Link>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <Link


                                    style={{ textDecoration: "none" }}>
                                    <Card className="facility-card" >
                                        <Card.Img variant="top"
                                            style={{
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: '50% 50%',

                                            }}
                                            src={topFacility[0].images[0]} />

                                        <Card.Title
                                            style={{
                                                position: 'absolute',
                                                bottom: '20%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                maxWidth: '70%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '1.3em',
                                                maxHeight: '50px',
                                                overflow: 'hidden',

                                            }}>{topFacility[0].name}</Card.Title>
                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                bottom: '10%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            {topFacility[0].city}
                                        </Card.Text>


                                        <small
                                            style={{
                                                position: 'absolute',
                                                bottom: '3%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                backgroundColor: 'rgba(255, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '1.5em',

                                            }}>{topFacility[0].price} SR</small>

                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                top: '2%', left: '0',
                                                color: 'white',
                                                padding: '0 1% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            <Rating readOnly value={topFacility[0].stars} />
                                        </Card.Text>

                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                top: '12%', left: '0',
                                                color: 'white',
                                                padding: '0 1% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            <span /><EyeFill color="white" size={20} /> {topFacility[0].views}
                                        </Card.Text>

                                    </Card>
                                </Link>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <Link


                                    style={{ textDecoration: "none" }}>
                                    <Card className="facility-card" >
                                        <Card.Img variant="top"
                                            style={{
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: '50% 50%',

                                            }}
                                            src={topFacility[0].images[0]} />

                                        <Card.Title
                                            style={{
                                                position: 'absolute',
                                                bottom: '20%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                maxWidth: '70%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '1.3em',
                                                maxHeight: '50px',
                                                overflow: 'hidden',

                                            }}>{topFacility[0].name}</Card.Title>
                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                bottom: '10%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            {topFacility[0].city}
                                        </Card.Text>


                                        <small
                                            style={{
                                                position: 'absolute',
                                                bottom: '3%',
                                                color: 'white',
                                                padding: '0 5% 0 5%',
                                                backgroundColor: 'rgba(255, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '1.5em',

                                            }}>{topFacility[0].price} SR</small>

                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                top: '2%', left: '0',
                                                color: 'white',
                                                padding: '0 1% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            <Rating readOnly value={topFacility[0].stars} />
                                        </Card.Text>

                                        <Card.Text

                                            style={{
                                                position: 'absolute',
                                                top: '12%', left: '0',
                                                color: 'white',
                                                padding: '0 1% 0 5%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.623)',
                                                fontWeight: 'bold',
                                                fontSize: '0.9em',
                                            }}
                                        >

                                            <span /><EyeFill color="white" size={20} /> {topFacility[2].views}
                                        </Card.Text>

                                    </Card>
                                </Link>
                            </Carousel.Item>



                        </Carousel> */}

                    </div>

                    {/* ========================================= */}


                    {/* ========================================= */}
                    {/* 1st section "Top Facilities" 2st Row */}
                    {/* ========================================= */}
                    <div className="tf-items">
                        <div className="item1">
                            <img src={confirmedFacility[index1].images[0]} />
                        </div>
                        <div className="item2">
                            <img src={confirmedFacility[index2].images[0]} />
                        </div><div className="item3">
                            <img src={confirmedFacility[index3].images[0]} />
                        </div><div className="item4">
                            <img src={confirmedFacility[index4].images[0]} />
                        </div>
                    </div>
                    ========================================= */}


                </div>

            </>
                :
                <></>}
        </>
    )
}