import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="contact">
                <div className="address">
                    <img src='../../images/iteration-2-images/footer/logo-footer.svg' id='logo' />
                    <div className='address-item'>
                        <img src='../../images/iteration-2-images/footer/icons/icon-1.png' />
                        <p> 341 Londonderry Road, Istanbul Turkey</p>
                    </div>
                    <div className='address-item'>
                        <img src='../../images/iteration-2-images/footer/icons/icon-2.png' />
                        <p> aciktim@teknolojikyemekler.com</p>
                    </div>
                    <div className='address-item'>
                        <img src='../../images/iteration-2-images/footer/icons/icon-3.png' />
                        <p> +90 216 123 45 67</p>
                    </div>
                </div>

                <div className="hot-menu">
                    <h5>Hot Menu</h5>
                    <ul>
                        <li><a href="#">Terminal Pizza</a></li>
                        <li><a href="#">5 Kişilik Hackathlon Pizza</a></li>
                        <li><a href="#">useEffect Tavuklu Pizza</a></li>
                        <li><a href="#">Beyaz Console Pizza</a></li>
                        <li><a href="#">Testler Geçti Mutlu Burger</a></li>
                        <li><a href="#">Position Absolute Acı Burger</a></li>
                    </ul>
                </div>
                <div className="instagram">
                    <h5>Instagram</h5>
                    <div className="img-container">
                        <img src='../../images/iteration-2-images/footer/insta/li-0.png' />
                        <img src='../../images/iteration-2-images/footer/insta/li-1.png' />
                        <img src='../../images/iteration-2-images/footer/insta/li-2.png' />
                        <img src='../../images/iteration-2-images/footer/insta/li-3.png' />
                        <img src='../../images/iteration-2-images/footer/insta/li-4.png' />
                        <img src='../../images/iteration-2-images/footer/insta/li-5.png' />
                    </div>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>@2023 Teknolojik Yemekler.</p>

            </div>
        </footer>
    );
}