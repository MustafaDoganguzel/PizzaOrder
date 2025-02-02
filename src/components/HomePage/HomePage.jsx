import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../Footer/Footer';

const homeImages = [
    { src: "../images/iteration-2-images/icons/1.svg", text: "YENİ! Kore" },
    { src: "../images/iteration-2-images/icons/2.svg", text: "Pizza" },
    { src: "../images/iteration-2-images/icons/3.svg", text: "Burger" },
    { src: "../images/iteration-2-images/icons/4.svg", text: "French Fries" },
    { src: "../images/iteration-2-images/icons/5.svg", text: "Fast Food" },
    { src: "../images/iteration-2-images/icons/6.svg", text: "Soft Drinks" }
];
const frameImages = [
    { src: "/images/iteration-2-images/pictures/food-1.png", text: 'Terminal Pizza', price: 60 },
    { src: "/images/iteration-2-images/pictures/food-2.png", text: "Position Absolute Aci Pizza", price: 85 },
    { src: "/images/iteration-2-images/pictures/food-3.png", text: "useEffect Tavuklu Burger", price: 75 },
]
export default function HomePage() {
    return (
        <>

            <div className='homepage'>
                <img className='home-banner' src="../images/iteration-1-images/home-banner.png" alt="home-banner" />

                <div className='centered'>
                    <img className='home-banner' src="/images/iteration-1-images/logo.svg" alt="home-logo" />
                    <div className='baslik1' style={{ fontFamily: 'Satisfy', color: '#FDC913', fontWeight: 400, fontSize: 25 }}>firsati kacirma</div>
                    <div className='baslik' >
                        <h1 >KOD ACIKTIRIR</h1>
                        <h1 >PIZZA, DOYURUR</h1>
                    </div>
                    <Link to="/OrderPage">
                        <button data-cy='btn-aciktim' className='btn-aciktim'  >ACIKTIM</button>
                    </Link>
                </div>
            </div>

            <div className='home-images'>
                {homeImages.map((item, index) => {
                    return <div key={index} className='home-items'>
                        <img src={item.src} />
                        <p><strong>{item.text}</strong> </p>
                    </div>
                })}
            </div>
            <div className='cta'>
                <div>
                    <img src="images/iteration-2-images/cta/kart-1.png" alt="card1" />
                    <div className='card1-desc'>
                        <h1>Özel </h1>
                        <h1>Lezzetus</h1>
                        <p>Position: Absolute Aci Burger</p>
                        <Link to="/OrderPage">
                            <button>Siparis Ver</button>
                        </Link>
                    </div>
                </div>
                <div className='cta-left'>
                    <div className='cta-2'>
                        <img src="images/iteration-2-images/cta/kart-2.png" alt="card2" />
                        <div className='card2-desc'>
                            <h1>Hackathlon </h1>
                            <h1>Burger Menu</h1>
                            <Link to="/OrderPage">
                                <button>Siparis Ver</button>
                            </Link>
                        </div>
                    </div>
                    <div className='cta-3'>
                        <img src="images/iteration-2-images/cta/kart-3.png" alt="card2" />
                        <div className='card3-desc'>
                            <h1> <span className='red'>Çoooook</span> hizli </h1>
                            <h1>npm gibi kurye</h1>
                            <Link to="/OrderPage">
                                <button>Siparis Ver</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='food-sections'>
                <div className='food-sections-headings'>
                    <h7 style={{ fontFamily: 'Satisfy', color: '#CE2829', fontWeight: 100 }}>en cok paketlenen menuler</h7>
                    <h1 style={{ fontFamily: 'Satisfy', color: '#CE2829', fontWeight: 100 }}>Aciktiran Kodlara Doyuran Lezzetler</h1>
                </div>
                <div className='food-icons'>
                    {homeImages.map((item, index) => {
                        return <div key={index} className='food-icons-items'>
                            <img src={item.src} />
                            <p><strong>{item.text}</strong> </p>
                        </div>
                    })}
                </div>

            </div>
            <div className='last-section' >
                {frameImages.map((item, index) => {
                    return <div className='last-section-items'>
                        <img key={index} src={item.src} />

                        <div className='last-section-items-text'>{item.text}</div>
                        <div className='last-section-items-rating'>4,8 <span>(200)</span> <strong>{item.price}TL</strong></div>
                    </div>
                })}

            </div>

            <Footer />
        </>
    )
}
