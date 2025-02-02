import React, { useEffect } from 'react'
import './Success.css'
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function Success({ responseData }) {


    const { thickness, size, additional, adSoyad, note, count, fiyat } = responseData

    console.log(responseData)
    if (!responseData) {
        return <p>yukleniyorr...</p>
    }
    return (<>

        <header className='success'>
            <img className='success-logo' src="../images/iteration-1-images/logo.svg" alt="home-logo" />
        </header>

        <div className='congrats'>

            <div className='congrats-0'>
                <h1 style={{ fontFamily: 'Satisfy', color: '#FDC913', fontWeight: 400 }}>lezzetin yolda...</h1>
                <h1 style={{ fontFamily: 'Quattrocento', color: 'white' }}>SIPARISINIZ ALINDI!</h1>

                <h4 style={{ color: "white", fontFamily: 'Barlow' }}>Position Absolute Aci Pizza</h4>
            </div>

            <div className='congrats-1'>
                <div>Boyut: <strong>{size}</strong></div>
                <div>Hamur: <strong>{thickness}</strong></div>
                <div>Ek Malzemeler: <strong>{additional && additional.length > 0 ? additional.join(",") : "Yok"} </strong></div>
            </div>

            <div className='congrats-2'>
                <div><strong> Siparis Toplami</strong></div>
                <div>{note && <p>Siparis Notu: <span>{note}</span></p>}</div>
                <div>Secimler: <strong>{additional.length * 5} ₺ </strong></div>
                <div>Siparis Tutari: <strong>{count * fiyat + (additional.length * 5)} ₺</strong></div>

            </div>



            <br />
            <br />


        </div>
        <Footer />

    </>
    )
}
