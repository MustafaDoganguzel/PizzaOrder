import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./OrderPage.css"
import { Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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



export default function OrderPage(props) {
    const { setResponseData } = props;
    let history = useHistory();
    const [formData, setFormData] = useState(initialData)
    const [isValid, setIsValid] = useState(false)
    const [errors, setErrors] = useState({
        thickness: false,
        size: false,
        additional: false,
        adSoyad: false,
        note: false
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



    function handleSubmit(e) {

        e.preventDefault();
        console.log(" isValid burada " + isValid)
        if (!isValid) return;

        axios.post('https://reqres.in/api/pizza', formData)
            .then(response => {
                setResponseData(response.data)
                setFormData(initialData)
            })
            .catch(error => console.error(error));
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
            setFormData({ ...formData, [name]: value });
        }

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

        // if (name === 'additional') {
        //     if (value.length >= 3 && value.length < 10) {
        //         setErrors({ ...errors, [name]: false });
        //     } else {
        //         setErrors({ ...errors, [name]: true })
        //     }
        // }
        if (name === 'adSoyad') {
            if (value.trim().length >= 3) {
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true })
            }
        }
        // if (formData.thickness !== '') {
        //     setErrors({ ...errors, thickness: false })
        // } else {
        //     setErrors({ ...errors, thickness: true })
        // }
        // if (formData.size !== "") {
        //     setErrors({ ...errors, size: false })
        // } else {
        //     setErrors({ ...errors, size: true })
        // }
        // if (formData.additional.length >= 3 && formData.additional.length < 10) {
        //     setErrors({ ...errors, additional: false })
        // } else {
        //     setErrors({ ...errors, additional: true })
        // }
        // if (formData.adSoyad.trim().length >= 3) {
        //     setErrors({ ...errors, adSoyad: false })
        // } else {
        //     setErrors({ ...errors, adSoyad: true })
        // }
        console.log(formData)
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
        // setErrors({
        //     ...errors,
        //     thickness: formData.thickness !== '' ? false : true,
        //     size: formData.size ? false : true,
        //     additional: formData.additional.length >= 3 && formData.additional.length < 10 ? false : true,
        //     adSoyad: formData.adSoyad.trim().length > 3 ? false : true
        // })
        // setIsValid(!errorsMessage.adSoyad && !errorsMessage.thickness && !errorsMessage.size && !errorsMessage.additional)

    }, [formData])

    return (<>

        <header className='header'>
            <img className='header-logo' src="../images/iteration-1-images/logo.svg" alt="home-logo" />
            <div className='nav-links'>
                <Link to="/">Anasayfa</Link>
                <Link to="/OrderPage">Secenekler</Link>
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
                                        name='size' // e.target'tan hangi inputu almamizi gosteren attribute e.target.name gibi
                                        onChange={handleChange}
                                        value='small'

                                    />
                                    <label htmlFor='small'> Küçük </label>
                                </div>

                                <div>
                                    <input type='radio'
                                        id='medium'
                                        name='size'
                                        onChange={handleChange}
                                        value='medium'

                                    />
                                    <label htmlFor='medium'> Orta </label>
                                </div>

                                <div>
                                    <input type='radio'
                                        id='large'
                                        name='size'
                                        onChange={handleChange}
                                        value='large'

                                    />
                                    <label htmlFor='large'> Büyük</label>
                                </div>
                                <div className='erorrs'>
                                    {errors.size && <p style={{ color: "#dc3545" }}>{errorsMessage.size}</p>}
                                </div>
                            </div>

                        </div>
                        {/* Select-options  */}
                        <div className='thickness'>
                            <h5>Hamur Sec</h5>
                            <select onChange={handleChange} name='thickness' value={formData.thickness}>

                                <option value="Ince Hamur">Ince Hamur</option>
                                <option value="Klasik Hamur">Klasik Hamur</option>
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
                                    <input value={item} onChange={handleChange}
                                        name='additional' type="checkbox" id={`malzeme-${index}`} />
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
                            <hr />
                        </div>
                        <div className='checkout'>
                            <div className='order-btn'>
                                <button onClick={() => handleCounter("azalt")}>-</button>
                                <div className='count'>{formData.count}</div>
                                <button onClick={() => handleCounter("art")}>+</button>
                            </div>
                            <div className='hesaplama'>
                                <h5>Siparis Toplami</h5>
                                <p>Secimler <span>{formData.additional.length * 5}</span></p>
                                <p>Toplam  <span>{toplam}₺</span></p>
                                <Link to='/Success'>
                                    <button disabled={!isValid} className='siparis-btn'>SIPARIS VER</button>
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
