import "./style.css";
import line from "./../../assets/line.png";
const Main = () => {
	
	return (
		<div className="container__main">
			<div className="container__main__left">
				<span className="container__main__left-sallary">
					Зарабатывайте больше
				</span>
				<span className="container__main__left-welbex">
					<br />с WELBEX
				</span>
				<br />
				<span className="container__main__left-sight">
					Развиваем и контролируем продажи за вас
				</span>
			</div>
			<div className="container__main__right">
				<div className="container__main__right-title">
					<span className="container__main__right-text">
						Вместе с
						<span className="container__main__right-color">
							БЕСПЛАТНОЙ
							<br />
							КОНСУЛЬТАЦИЕЙ
						</span>
						мы дарим:
					</span>
				</div>
				<div className="container__main__right-cards">
					<div className="container__main__right-suppose">
						<span className="container__main__right-titlename">Виджеты</span>
						<span className="container__main__right-name">
							30 готовых решений
						</span>
					</div>
					<div className="container__main__right-suppose">
						<span className="container__main__right-titlename">DASHBOARD</span>
						<span className="container__main__right-name">
							с показателями вашего бизнеса
						</span>
					</div>
					<div className="container__main__right-suppose">
						<span className="container__main__right-titlename">
							SKYPE АУДИТ
						</span>
						<span className="container__main__right-name">
							отдела продаж и CRM системы
						</span>
					</div>
					<div className="container__main__right-suppose">
						<span className="container__main__right-titlename">35 ДНЕЙ</span>
						<span className="container__main__right-name">
							использования CRM
						</span>
					</div>
				</div>
				<div>
					<div className="container__main__right-supposes">
						<span className="container__main__right-titlename">
							<img className="poliline" src={line} alt="line" />
							SKYPE АУДИТ
						</span>
						<span className="container__main__right-titlename">
							<img className="poliline" src={line} alt="line" />
							30 ВИДЖЕТОВ
						</span>
						<span className="container__main__right-titlename">
							<img className="poliline" src={line} alt="line" />
							DASHBOARD
						</span>
						<span className="container__main__right-titlename">
							<img className="poliline" src={line} alt="line" />
							МЕСЯЦ AMOCRM
						</span>
					</div>
				</div>
				<div className="container__main__right-buttons">
					<button className="container__main__right-button">
						Получить консультацию
					</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
