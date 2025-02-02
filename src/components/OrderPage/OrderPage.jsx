import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./OrderPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, ButtonGroup } from 'reactstrap';

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

const initialData = {
    thickness: '',
    size: '',
    additional: [],
    adSoyad: '',
    note: '',
    count: 1,
    fiyat: 85.5,
}
const errorsMessage = {
    thickness: "Pizzaniz icin hamur kalinligi  secmelisiniz.",
    size: 'Pizzaniz icin boyutlardan birini secmelisiniz.',
    additional: 'En az 4 adet, En fazla 10 adet ek malzeme secebilirsiniz.',
    adSoyad: 'Siparisiniz icin, isim soyisim alani en az 3 harften olusmalidir.',

}



export default function OrderPage({ setResponseData }) {

    let history = useHistory();
    // const [count, setCount] = useState(1);
    const [formData, setFormData] = useState(initialData)
    const [isValid, setIsValid] = useState(false)
    const [errors, setErrors] = useState({
        thickness: false,
        size: false,
        additional: false,
        adSoyad: false,

    })


    // const {thickness, size, additional, adSoyad, count, vb........} = formData; ********* destruct edip formData.size gibi seyler yazmaktan kurtaracak!!! ********

    const toplam = (formData.fiyat * formData.count) + (formData.additional.length * 5)

    function handleCounter(type) {
        if (type === "art") {
            // setCount(count + 1);
            setFormData({ ...formData, count: formData.count + 1 })
        } else if (type === "azalt") {
            if (formData.count > 0) {
                // setCount(count - 1);
                setFormData({ ...formData, count: formData.count - 1 })
            } else {
                alert("Sipariş sayınız negatif olamaz!");
            }
        }
    }



    async function handleSubmit(e) {

        e.preventDefault();
        if (!isValid) return;
        console.log("BURADA FD", formData)
        try {
            const response = await axios.post('https://reqres.in/api/pizza', formData);
            if (response.status === 201) {
                console.log("FormData: ", response.data)
                setResponseData(response.data)
                history.push("/Success") //redirect
            }

        }
        catch (err) {
            console.log(err)
        }



    }

    useEffect(() => {
        if ((formData.additional.length >= 4 && formData.additional.length <= 10)) {
            setErrors({ ...errors, additional: false });
        } else {
            setErrors({ ...errors, additional: true });
        }
    }, [formData.additional]);



    function handleChange(e) {
        const { type, value, name } = e.target;


        if (name === 'additional') {
            if (formData.additional.includes(value)) {
                // Eğer değer zaten varsa, çıkar
                setFormData({ ...formData, [name]: formData.additional.filter((f) => f !== value) }) // esit olmayan elemanlari arrayde tut
            } else {
                // Değer yoksa, ekle
                setFormData({ ...formData, [name]: [...formData.additional, value] });
            }
        } else {
            // Diğer alanları güncelle
            // setFormData({ ...formData, [name]: value });
            setFormData((prev) => ({ ...prev, [name]: value })) //// 
        }
        /// state obj ve array ise prev kullan yukaridaki gibi 


        {/* validation icin Errors guncelleme */ }

        if (name === 'thickness') {
            if (value !== "") {
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }

        if (name === 'size') {
            if (value !== "") {
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }

        if (name === 'adSoyad') {
            if (value.trim().length >= 3) {
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }

    }


    useEffect(() => {
        if (formData.adSoyad.trim().length >= 3 &&
            formData.additional.length >= 3 &&
            formData.additional.length < 10 &&
            formData.size !== "" &&
            formData.thickness !== '') {
            setIsValid(true);
        } else {
            setIsValid(false)
        }
    }, [formData])

    return (<>
        <header className='header'>
            <img className='header-logo' src="../images/iteration-1-images/logo.svg" alt="home-logo" />
        </header>



        <form onSubmit={handleSubmit}>

            <div className='container'>

                <div className='main-page'>
                    <div className='container-first'>
                        <img className='header-logo' src="../images/iteration-2-images/pictures/form-banner.png" alt="form-banner" />
                        <div className='nav-links'>

                            <Link aria-current="page" to='/'>Anasayfa </Link>
                            <Link to='/OrderPage'> –<span style={{ color: '#CE2829', fontWeight: '300' }}> Siparis olustur</span></Link>
                        </div>
                        <h4>Position Absolute Acı Pizza</h4>
                        <br />
                        <div className='description'>
                            <h5><strong> 85.50₺</strong></h5>
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

                    </div>
                    <br />
                    <br />
                    <div className='form1'>
                        <div className='size'>
                            <h5>Boyut Sec</h5>
                            {/* radio button */}
                            <div className='radio'>
                                <div className='small'>
                                    <input type='radio'
                                        id='small'
                                        name='size'
                                        onChange={handleChange}
                                        value='Small'
                                        data-cy='small-size'

                                    />
                                    <label className='size-label' htmlFor='small'> S </label>
                                </div>
                                <div>
                                    <input type='radio'
                                        id='medium'
                                        name='size'
                                        onChange={handleChange}
                                        value='Medium'
                                        data-cy='medium-size'

                                    />
                                    <label className='size-label' htmlFor='medium'> M </label>
                                </div>

                                <div>
                                    <input type='radio'
                                        id='large'
                                        name='size'
                                        onChange={handleChange}
                                        value='Large'
                                        data-cy='large-size'

                                    />
                                    <label className='size-label' htmlFor='large'>
                                        L
                                    </label>
                                </div>
                                <div className='erorrs' data-cy='size-msg'>
                                    {errors.size && <p style={{ color: "#dc3545" }}>{errorsMessage.size}</p>}
                                </div>
                            </div>

                        </div>
                        {/* Select-options  */}
                        <div className='thickness'>
                            <h5>Hamur Sec</h5>
                            <select className='thickness-label' onChange={handleChange} name='thickness' value={formData.thickness} data-cy="thickness-input">
                                <option className='thickness-label' value="" disabled>
                                    -- Hamur Kalınlığı Seç --
                                </option>
                                <option className='thickness-label' value="Ince Hamur">Ince Hamur</option>
                                <option className='thickness-label' value="Klasik Hamur">Klasik Hamur</option>

                            </select>
                            <div className='erorrs'>
                                {errors.thickness && <p style={{ color: "#dc3545" }}>{errorsMessage.thickness}</p>}
                            </div>
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

                                    <input data-cy={`additional-input-${item}`} value={item} onChange={handleChange}
                                        name='additional' type="checkbox" id={`malzeme-${index}`} />
                                    <div class="custom-checkbox"></div>

                                    <label htmlFor={`malzeme-${index}`}>{item}</label>

                                </div>

                            })}
                        </div>
                        <div className='erorrs'>
                            {errors.additional && <p style={{ color: "#dc3545" }}>{errorsMessage.additional}</p>}
                        </div>
                        <br /><br />
                        <div className='adSoyad'>
                            <label htmlFor="adSoyad">Isim Soyim : </label>
                            <input id='adSoyad'
                                name='adSoyad'
                                type='text'
                                placeholder='Lutfen isminizi ve soyisminizi giriniz...'
                                value={formData.adSoyad}
                                onChange={handleChange}
                                data-cy='adSoyad-input'
                            />

                        </div>
                        <div className='erorrs'>
                            {errors.adSoyad && <p style={{ color: "#dc3545" }}>{errorsMessage.adSoyad}</p>}
                        </div>

                        <br />

                        <br /><br />
                        <div className='order-Note'>
                            <h5>Siparis Notu</h5>
                            <textarea onChange={handleChange} name='note' className='textarea' placeholder='Siparise eklemek istedigin bir not var mi?'></textarea>

                        </div>


                        <hr />
                        <div className='checkout'>
                            <div>
                                <div className='order-btn'>
                                    <button type="button" onClick={() => handleCounter("azalt")}>-</button>
                                    <div onChange={handleChange} className='count'>{formData.count} </div>
                                    <button type="button" onClick={() => handleCounter("art")}>+</button>
                                </div>

                            </div>
                            <div className='hesaplama'>
                                <h5>Siparis Toplami</h5>
                                <p>Secimler <span>{formData.additional.length * 5}</span></p>
                                <p>Toplam  <span>{toplam}₺</span></p>
                                <button type="submit" disabled={!isValid} data-cy="siparis-btn" className='siparis-btn'>SIPARIS VER</button>
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
