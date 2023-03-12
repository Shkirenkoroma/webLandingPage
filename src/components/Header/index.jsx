import "./style.css";
import logo from "./../../assets/logo.png";
import telegram from "./../../assets/telegram.png";
import viber from "./../../assets/viber.png";
import whatsapp from "./../../assets/whatsapp.png";

const Header = () => {
	
	return (
		<div className="container__header">
			<div className="container__content-header">
				<div className="container__content-label">
					<a href="https://welbex.tech/ru/">
						<img src={logo} alt="logo" />
					</a>
				</div>
				<div className="container__content__navigation">
					<ul className="container__content__navigation-links">
						<li className="container__content__navigation-item">
							<span className="container__content__navigation-name">
								Услуги
							</span>
						</li>
						<li className="container__content__navigation-item">
							<span className="container__content__navigation-name">
								Виджеты
							</span>
						</li>
						<li className="container__content__navigation-item">
							<span className="container__content__navigation-name">
								Интеграции
							</span>
						</li>
						<li className="container__content__navigation-item">
							<span className="container__content__navigation-name">Кейсы</span>
						</li>
						<li className="container__content__navigation-item">
							<span className="container__content__navigation-name disabled">
								Сертификаты
							</span>
						</li>
					</ul>
					<ul className="container__content__contacts">
						<li className="container__content__contacts-item">
							<a href="tel:+ 7 555 555-55-55">+ 7 (555) 555-55-55</a>
						</li>
						<li className="container__content__contacts-item">
							<img src={telegram} alt="Telegram" />
						</li>
						<li className="container__content__contacts-item">
							<img src={viber} alt="Phone" />
						</li>
						<li className="container__content__contacts-item">
							<img src={whatsapp} alt="whatsApp" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
