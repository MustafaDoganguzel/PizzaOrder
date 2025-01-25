import React from 'react'
import "./HomePage.css"
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
                <button className='btn-aciktim'>ACIKTIM</button>
            </div>
        </div>

    )
}
