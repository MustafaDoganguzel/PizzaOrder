import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./OrderPage.css"
import { Form, FormGroup, Input, Label } from 'reactstrap';
const ekMalzemeler = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak"
];


export default function OrderPage() {
    const [count, setCount] = useState(0)

    function handleCounter(type) {
        if (type === "art") {
            setCount(count + 1)
        } else if (type === "azalt") {
            if (count >= 1)
                setCount(count - 1)
        }

    }

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (<>

        <header className='header'>
            <img className='header-logo' src="../images/iteration-1-images/logo.svg" alt="home-logo" />
            <div className='nav-links'>
                <Link to="/">Anasayfa</Link>
                <Link to="/Secenekler">Secenekler</Link>
                <Link to="/OrderPage">Siparis Olustur</Link>
            </div>
        </header>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className='main-page'>
                    <h4>Position Absolute Acı Pizza</h4>
                    <br />
                    <div className='description'>
                        <h5>85.50₺</h5>
                        <div className='right'>
                            <p> 4.9</p>
                            <p> (200)</p>
                        </div>

                    </div>
                    <p className='orta'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
                        daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                        genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
                        lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
                    <br />
                    <br />
                    <div className='form1'>
                        <div className='size'>
                            <h5>Boyut Sec</h5>
                            {/* radio button */}
                            <div className='radio'>
                                <div>
                                    <input type='radio'
                                        id='small'
                                        name='size'
                                    // onChange={}
                                    // value={}
                                    />
                                    <label htmlFor='small'> Küçük </label>
                                </div>

                                <div>

                                    <input type='radio'
                                        id='medium'
                                        name='size'
                                    // onChange={}
                                    // value={}
                                    />
                                    <label htmlFor='medium'> Orta </label>
                                </div>

                                <div>

                                    <input type='radio'
                                        id='large'
                                        name='size'
                                    // onChange={}
                                    // value={}
                                    />
                                    <label htmlFor='large'> Büyük</label>
                                </div>
                            </div>
                        </div>
                        {/* Select-options  */}
                        <div className='thickness'>
                            <h5>Hamur Sec</h5>
                            <select>   {/* onChange ve value verilecek */}
                                <option value="default">Hamur Kalinligi seciniz</option>
                                <option value="Ince Hamur">Ince Hamur</option>
                                <option value="Klasik Hamur">Klasik Hamur</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <br />

                    {/* Ek Malzemeler */}
                    <div className='additional'>
                        <h5>Ek Malzemeler</h5>
                        <p>En fazla 10 malzeme secebilirsiniz. 5TL</p>

                        <div className='ek-malzemeler'>
                            {ekMalzemeler.map((item, index) => {
                                return <div className='ek-items' key={index}>
                                    <input type="checkbox" id={`malzeme-${index}`} />
                                    <label htmlFor={`malzeme-${index}`}>{item}</label>
                                </div>

                            })}
                        </div>
                        <br /><br />
                        <h5>Siparis Notu</h5>
                        <textarea className='textarea' placeholder='Siparise eklemek istedigin bir not var mi?'></textarea>
                        <hr />
                        <div className='checkout'>
                            <div className='order-btn'>
                                <button onClick={() => handleCounter("azalt")}>-</button>
                                <div className='count'>{count}</div>
                                <button onClick={() => handleCounter("art")}>+</button>
                            </div>
                            <div className='hesaplama'>
                                <h5>Siparis Toplami</h5>
                                <p>Secimler <span>xxx EKFIYAT EKLENECEK</span></p>
                                <p>Toplam  <span>TOPLAM+EKFIYAT</span></p>
                                <Link to='/final'>
                                    <button className='siparis-btn'>SIPARIS VER</button>
                                </Link>

                            </div>

                        </div>
                        <br /><br /><br />

                    </div>
                </div>
            </div>
        </form>
    </>
    )
}
