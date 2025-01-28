import React from 'react'
import './Success.css'
export default function Success(props) {
    const { responseData } = props;
    const { thickness,
        size,
        additional,
        adSoyad,
        note } = responseData
    return (<>

        <header className='success'>
            <img className='success-logo' src="../images/iteration-1-images/logo.svg" alt="home-logo" />
        </header>

        <div className='congrats'>
            <h1>TEBRIKLER</h1>
            <h1>SIPARISINIZ ALINDI!</h1>
            <div>
                <p>Boyut: <span>{size}</span></p>
                <p>Hamur: <span>{thickness}</span></p>
                <p>Ek Malzemeler: <span>{additional.join(", ")}</span></p>
            </div>

        </div>

    </>
    )
}
