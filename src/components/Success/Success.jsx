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
            <h1 style={{ fontFamily: 'Satisfy', color: '#FDC913', fontWeight: 400 }}>lezzetin yolda...</h1>
            <h1>SIPARISINIZ ALINDI!</h1>


            <div className='order-details'>
                <div className='order-details-1'>
                    <div>Boyut: <span>{size}</span></div>
                    <div>Hamur: <span>{thickness}</span></div>

                    <p>Ek Malzemeler: <strong >{additional && additional.length > 0 ? additional.join(",") : "Yok"}</strong></p>
                </div>
                <br />
                <div className='order-details-2'>
                    <h6>Siparis Toplami:</h6>
                    {note && <p>Siparis Notu: <span>{note}</span></p>}
                    <div>Ek Secimler: {additional.length * 5} TL</div>
                    <div>Siparis Adeti: <span>{count} adet</span></div>
                    <div>Siparis Tutari: <span>{count * fiyat + (additional.length * 5)} TL</span></div>
                </div>

            </div>

            <br />
            <br />
            <br />
            <br />

        </div>
        <Footer />

    </>
    )
}
