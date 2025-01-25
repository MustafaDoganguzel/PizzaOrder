import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function HomePage() {
    return (
        <div className='homepage'>
            <img className='home-banner' src="../images/iteration-1-images/home-banner.png" alt="home-banner" />
            <div className='centered'>
                <img className='home-banner' src="../images/iteration-1-images/logo.svg" alt="home-logo" />
                <div className='baslik'>
                    <h1>KOD ACIKTIRIR</h1>
                    <h1>PIZZA, DOYURUR</h1>
                </div>
                <Link to="/OrderPage">
                    <button className='btn-aciktim'>ACIKTIM</button>
                </Link>

            </div>
        </div>

    )
}
