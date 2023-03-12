import "./style.css";
import telegram from "./../../assets/telegram.png";
import viber from "./../../assets/viber.png";
import whatsapp from "./../../assets/whatsapp.png";

const Footer = () => {
	
	return (
		<div className="container__footer">
			<div className="container__footer__company">
				<ul className="container__footer__company-list">
					<li className="container__footer__company-name">О КОМПАНИИ</li>
					<li className="container__footer__company-subname">
						Партнерская программа
					</li>
					<li className="container__footer__company-subname">Вакансии</li>
				</ul>
			</div>
			<div className="container__footer__menu">
				<div>
					<ul className="container__footer__menu-list">
						<li className="container__footer__menu-name">МЕНЮ</li>
						<li className="container__footer__menu-subname">
							Расчёт стоимости
						</li>
						<li className="container__footer__menu-subname">Услуги</li>
						<li className="container__footer__menu-subname">Виджеты</li>
						<li className="container__footer__menu-subname">Интеграции</li>
						<li className="container__footer__menu-subname">Наши клиенты</li>
					</ul>
				</div>
				<ul className="container__footer__case-list">
					<li className="container__footer__case-subname">Кейсы</li>
					<li className="container__footer__case-subname">
						Благодарственные письма
					</li>
					<li className="container__footer__case-subname">Сертификаты</li>
					<li className="container__footer__case-subname">Блог на YouTube</li>
					<li className="container__footer__case-subname">Вопрос / Ответ</li>
				</ul>
				<div></div>
			</div>
			<div className="container__footer__contact">
				<div className="container__footer__contact-block">
					<ul className="container__footer__contact-list">
						<li className="container__footer__contact-name">Контакты</li>
						<li className="container__footer__contact-subname">
							<a href="tel:+7 (555) 555-55-55">+7 (555) 555-55-55a</a>
						</li>
						<li className="container__footer__contact-sociallinks">
							<a href="https://web.telegram.org/k/">
								<img src={telegram} alt="Telegram"></img>
							</a>
							<a href="https://www.viber.com/ru/">
								<img src={viber} alt="Viber" />
							</a>
							<a href="https://www.viber.com/ru/">
								<img src={whatsapp} alt="WhatsApp" />
							</a>
						</li>
						<li className="container__footer__contact-subname">
							Москва, Путевой проезд 3с1, к 902
						</li>
					</ul>
				</div>
				<div className="container__footer__contact-blocklabel">
					<span className="container__footer__contact-welbex">
						WELBEX 2023. Все права защищены.
						<br />
						Политика конфиденциальности
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
