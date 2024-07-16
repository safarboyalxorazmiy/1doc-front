import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Form from 'react-bootstrap/Form';
import { Tabs, Tab, Row, Col, Carousel } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faFlag, faFlagUsa } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';

const Home = () => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState("O'zbekcha");
	const [reloadKey, setReloadKey] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    return (
			<div>
				<header>
					{/* <div className="small-header">
						<p>Biz bilan bog'laning: +998 91 797 23 85</p>
					</div> */}

					<nav>
						<a href="/" className="logo">
							<img src="/assets/logo.svg" alt="1doc.uz Logo" />
							<h1>1doc.uz</h1>
						</a>
						
						<div className="dropdown" onMouseLeave={toggleDropdown} onMouseEnter={toggleDropdown} >
							<button className="dropbtn">
								<span>{language}</span>
								<FontAwesomeIcon icon={faChevronDown} className={`icon ${isOpen ? 'open' : ''}`} />
							</button>
							{isOpen && (
								<div className="dropdown-content">
									<a className={language === "Ўзбекча" ? "active" : ""} onClick={() => {setLanguage("Ўзбекча"); i18n.changeLanguage("uz_kr"); setReloadKey(prevKey => prevKey + 1); }}>Ўзбекча</a>
									<a className={language === "O'zbekcha" ? "active" : ""} onClick={() => {setLanguage("O'zbekcha"); i18n.changeLanguage("uz_la"); setReloadKey(prevKey => prevKey + 1); }}>O'zbekcha</a>
									<a className={language === "Русский" ? "active" : ""} onClick={() => {setLanguage("Русский"); i18n.changeLanguage("ru"); setReloadKey(prevKey => prevKey + 1); }}>Русский</a>
									<a className={language === "English" ? "active" : ""} onClick={() => {setLanguage("English"); i18n.changeLanguage("en"); setReloadKey(prevKey => prevKey + 1); }}>English</a>
								</div>
							)}
						</div>

						<div className="btns d-flex">
							<button className="btn btn-primary start-btn">{t('start-btn')}</button>
							<button className="btn btn-outline-primary login-btn">{t('login-btn')}</button>
						</div>
					</nav>

					<div className="header-content">
					<TypeAnimation
						key={reloadKey}
						sequence={[
							t('header-title'),
							1000
						]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
						className="header-title"
					/>

						<p>{t('header-description')}</p>
						<div className="btns d-flex">
							<a className="btn btn-primary prices-btn" href="/#app/#tariflar">{t('prices-btn')}</a>
						</div>
					</div>

					<img src="../assets/tel.png" className="tel" />
				</header>

				<section className="tabs">
					<Tabs defaultActiveKey="shartnomalar" id="uncontrolled-tab-example">
						<Tab eventKey="shartnomalar" title={t("shartnomalar")}>
							<div className="tab-content mt-3">
									<Row>
											<Col md={5}>
												<img src="/assets/tabs/shartnomalar.jpg" className="img-fluid" alt="Shartnomalar" />
											</Col>
											<Col md={6}>
												<ul className="feature-list list-unstyled">
													<li>{t("shartnomalar-content-1")}</li>
													<li>{t("shartnomalar-content-2")}</li>
													<li>{t("shartnomalar-content-3")}</li>
													<li>{t("shartnomalar-content-4")}</li>
												</ul>
											</Col>
									</Row>
								</div>
						</Tab>
						
						<Tab eventKey="arizalar" title={t("arizalar")}>
							<div className="tab-content mt-3">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/arizalar.jpg" className="img-fluid" alt="Arizalar" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li>{t("arizalar-content-1")}</li>
											<li>{t("arizalar-content-2")}</li>
											<li>{t("arizalar-content-3")}</li>
											<li>{t("arizalar-content-4")}</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="korporativ-hujjatlar" title={t("korporativ-hujjatlar")}>
							<div className="tab-content mt-3">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/korparativ-hujjat.jpg" className="img-fluid" alt="Korporativ Hujjatlar" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li>{t("korporativ-hujjatlar-content-1")}</li>
											<li>{t("korporativ-hujjatlar-content-2")}</li>
											<li>{t("korporativ-hujjatlar-content-3")}</li>
											<li>{t("korporativ-hujjatlar-content-4")}</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="murojaatlar" title={t("murojaatlar")}>
							<div className="tab-content">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/qr.jpg" className="img-fluid" alt="Murojatlar" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li>{t("murojaatlar-content-1")}</li>
											<li>{t("murojaatlar-content-2")}</li>
											<li>{t("murojaatlar-content-3")}</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="imzo" title={t("imzo")}>
							<div className="tab-content">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/подпис.jpg" className="img-fluid" alt="IMZO" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li>{t("imzo-content-1")}</li>
											<li>{t("imzo-content-2")}</li>
											<li>{t("imzo-content-3")}</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="sms" title={t("sms")}>
							<div className="tab-content">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/sms.jpg" className="img-fluid" alt="SMS Habarnoma" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li>{t("sms-content-1")}</li>
											<li>{t("sms-content-2")}</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="ocr" title={t("ocr")}>
							<div className="tab-content">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/ocr.jpg" className="img-fluid" alt="OCR Redactor" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li>{t("ocr-content-1")}</li>
											<li>{t("ocr-content-2")}</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

					</Tabs>
				</section>

				<section className="info-content d-flex justify-content-center align-items-center">
					<h3>{t("info-content")}</h3>
					<a href="https://stat.sud.uz/">STAT.UZ</a>
				</section>

				<section className="second-slider">
					<Carousel 
							interval={2000} 
							touch 
							variant='dark'
							prevIcon={<img src="assets/left-arrow.svg" />}
							nextIcon={<img src="assets/right-arrow.svg" />}>
								<Carousel.Item className="carousel-item">
										<h1>{t("carousel-item-1__title")}</h1>

										<Row className="item-content">
											<Col md={6}>
												<img className="d-block" src="./assets/hotel.svg" />
											</Col>
											<Col md={6}>
												<p>
													{t("carousel-item-1__content-1")}
													<br />
													<br />
													{t("carousel-item-1__content-2")}
												</p>
											</Col>
										</Row>
								</Carousel.Item>

								<Carousel.Item>
									<h1>{t("carousel-item-2__title")}</h1>

										<Row className='item-content'>
											<Col md={6}>
												<img className="d-block" src="./assets/edu.svg" />
											</Col>
											<Col md={6}>
												<p>
													{t("carousel-item-2__content-1")}
													<br />
													<br />
													{t("carousel-item-2__content-2")}
												</p>
											</Col>
										</Row>
								</Carousel.Item>

								<Carousel.Item>
									<h1>{t("carousel-item-3__title")}</h1>

										<Row className='item-content'>
											<Col md={6}>
												<img className="d-block" src="./assets/building.svg" />
											</Col>
											<Col md={6}>
												<p>
													{t("carousel-item-3__content-1")}
													<br />
													<br />
													{t("carousel-item-3__content-2")}
												</p>
											</Col>
										</Row>
								</Carousel.Item>

								<Carousel.Item>
									<h1>{t("carousel-item-4__title")}</h1>

										<Row className='item-content'>
											<Col md={6}>
												<img className="d-block" src="./assets/bank.svg" />
											</Col>
											<Col md={6}>
												<p>
													{t("carousel-item-4__content-1")}
													<br />
													<br />
													{t("carousel-item-4__content-1")}
												</p>
											</Col>
										</Row>
								</Carousel.Item>
						</Carousel>
				</section>

				<section className="statistics">
					<Row className="d-flex justify-content-center align-items-end">
						<Col md={4} className="d-flex justify-content-center align-items-center statistics-banner">
							<p>
								{t("statistics-main-title")}
							</p>
						</Col>
						<Col md={8} className="d-flex justify-content-center">
							<Row className="stat-wrapper">
								<Col md={4} className="stat-col d-flex justify-content-end align-items-end flex-column">
									<h1>+1000</h1>
									<h4>{t("statistics-title-1")}</h4>
								</Col>
								<Col md={4} className="stat-col d-flex justify-content-center align-items-end flex-column">
									<h1>+100</h1>
									<h4>{t("statistics-title-2")}</h4>
								</Col>
								<Col md={4} className="stat-col d-flex justify-content-center align-items-end flex-column">
									<h1>+50</h1>
									<h4>{t("statistics-title-3")}</h4>
								</Col>
							</Row>
						</Col>
					</Row>
				</section>

				<section className="signing-types">
					<h2>{t("signing-types-title")}</h2>
					<Row className="signing-types-content">
						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/faksimile-icon.svg" alt="Glass Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">{t("signing-types-content-1")}</h4>
							</div>
						</Col>

						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/phone-icon.svg" alt="Law Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">{t("signing-types-content-2")}</h4>
							</div>
						</Col>

						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/telegram-icon.svg" alt="Signature Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">{t("signing-types-content-3")}</h4>
							</div>
						</Col>
						
						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/face-icon.svg" alt="Signature Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">{t("signing-types-content-4")}</h4>
							</div>
						</Col>
						
						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/eimzo-icon.svg" alt="Signature Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">{t("signing-types-content-5")}</h4>
							</div>
						</Col>
					</Row>
				</section>

				<section className="companies">
					<h2 className='text-center'>{t("componies-title")}</h2>

					<div className="companies-content d-flex">
						<div className="company"></div>
						<div className="company"></div>
						<div className="company"></div>
						<div className="company"></div>
						<div className="company"></div>
						<div className="company"></div>
					</div>
				</section>
				
				{/* <section className="benefits">
					<h2>BIZ SIZGA KERAKMIZ!</h2>
					<p>(Jismoniy shaxslar uchun barcha xizmatlar bepul)</p>
					<Row className="benefits-content">
						<Col md={4} className="benefit-col">
							<div className="benefit-col-header d-flex justify-content-center align-items-center">
								<img src="assets/glass-icon.svg" alt="Glass Icon" />
							</div>
							<div className="benefit-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">BEPUL SHARTNOMA</h4>
								<p className="text-center">Qarz bering, qarz oling, uy soting, uy ijaraga bering. Barcha harakatlaringizni qonuniylashtiring.</p>
							</div>
						</Col>

						<Col md={4} className="benefit-col">
							<div className="benefit-col-header d-flex justify-content-center align-items-center">
								<img src="assets/law-icon.svg" alt="Law Icon" />
							</div>
							<div className="benefit-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">ANIQ SHARTNOMA</h4>
								<p className="text-center">Shartnomalarni tanlang, tahrirlang va aniq shartlarni belgilang.</p>
							</div>
						</Col>

						<Col md={4} className="benefit-col d-flex justify-content-center align-items-center flex-column">
							<div className="benefit-col-header d-flex justify-content-center align-items-center">
								<img src="assets/signature-icon.svg" alt="Signature Icon" />
							</div>
							<div className="benefit-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">TASDIQLANGAN SHARTNOMA</h4>
								<p className="text-center">Ijrochilarni ko'rsating tomonlarga yuboring va elektron ravishda tez va qonuniy imzolang</p>
							</div>
						</Col>
					</Row>
				</section> */}


				{/* <section className="opportunities">
					<h2>MAXSUS IMKONIYATLAR</h2>
					<h3>KENG INTEGRATSIYALAR IMKONIYATI</h3>

					<div className="support"></div>
				</section> */}

				<a name="tariflar"></a>

				<section className="pricing">
					<h2 className="text-center">{t("pricing-title")}</h2>
					
					<div className="pricing-content d-flex justify-content-center align-items-center">
						<div className="price-box">
							<h4>{t("price-box-1__title")}</h4>
							<h3>149.000 <span>uzs</span></h3>
							<p>{t("price-box-1__content-1")}</p>
							<p>{t("price-box-1__content-2")}</p>

							<Form className="price-types">
								<div className="type-1">
									<Form.Check
										inline
										label={`1 ${t("month")}`}
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-1`}
										checked
									/>
								</div>

								<div className="type-2">
									<Form.Check
										inline
										label={`6 ${t("month")}`}
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-2`}
									/>
								</div>

								<div className="type-3">
									<Form.Check
										inline
										label={`12 ${t("month")}`}
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-3`}
									/>
								</div>
							</Form>

							<button className="btn btn-primary">{t("price-box-btn-text")}</button>
						</div>
						
						<div className="price-box">
							<h4>{t("price-box-2__title")}</h4>
							<h3>399.000 <span>uzs</span></h3>
							<p>{t("price-box-2__content-1")}</p>
							<p>{t("price-box-2__content-2")}</p>

							<Form className="price-types">
								<div className="type-1">
									<Form.Check
										inline
										label={`1 ${t("month")}`}
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-1`}
										checked
									/>
								</div>

								<div className="type-2">
									<Form.Check
										inline
										label={`6 ${t("month")}`}
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-2`}
									/>
								</div>

								<div className="type-3">
									<Form.Check
										inline
										label={`12 ${t("month")}`}
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-3`}
									/>
								</div>
							</Form>

							<button className="btn btn-primary">{t("price-box-btn-text")}</button>
						</div>

						<div className="price-box">
							<h4>{t("price-box-3__title")}</h4>
							<h3>500.000 <span>uzs</span></h3>
							<p>{t("price-box-3__content-1")}</p>
							<p>{t("price-box-3__content-2")}</p>

							<Form className="price-types">
								<div className="type-1">
									<Form.Check
										inline
										label={`1 ${t("month")}`}
										name="group3"
										type={'radio'}
										id={`inline-${'radio'}-2`}
										checked
									/>
								</div>

								<div className="type-2">
									<Form.Check
										inline
										label={`6 ${t("month")}`}
										name="group3"
										type={'radio'}
										id={`inline-${'radio'}-2`}
									/>
								</div>

								<div className="type-3">
									<Form.Check
										inline
										label={`12 ${t("month")}`}
										name="group3"
										type={'radio'}
										id={`inline-${'radio'}-2`}
									/>
								</div>
							</Form>

							<button className="btn btn-primary">{t("price-box-btn-text")}</button>
						</div>

						<div className="price-box">
							<h4>{t("price-box-4__title")}</h4>
							<h3>750.000 <span>uzs</span></h3>
							<p>{t("price-box-4__content-1")}</p>
							<p>{t("price-box-4__content-2")}</p>

							<Form className="price-types">
								<div className="type-1">
									<Form.Check
										inline
										label={`1 ${t("month")}`}
										name="group4"
										type={'radio'}
										id={`inline-${'radio'}-3`}
										checked
									/>
								</div>

								<div className="type-2">
									<Form.Check
										inline
										label={`6 ${t("month")}`}
										name="group4"
										type={'radio'}
										id={`inline-${'radio'}-3`}
									/>
								</div>

								<div className="type-3">
									<Form.Check
										inline
										label={`12 ${t("month")}`}
										name="group4"
										type={'radio'}
										id={`inline-${'radio'}-3`}
									/>
								</div>
							</Form>

							<button className="btn btn-primary">{t("price-box-btn-text")}</button>
						</div>
					</div>
				</section>


				<section className="banner">
					<a href="#" className="logo">
						<img src="assets/logo.svg" />
					</a>

					<div className="content">
						<h2>1doc.uz</h2>
						<h4>{t("banner-text")}</h4>
					</div>
				</section>

				<footer>
					<Row>
						<Col md={3}>
						<h4>{t("footer-title-1")}</h4>

						<ul>
								<li><a href="">{t("footer-link-1")}</a></li>
								<li><a href="">{t("footer-link-2")}</a></li>
								<li><a href="">{t("footer-link-3")}</a></li>
								<li><a href="">{t("footer-link-4")}</a></li>
								<li><a href="">{t("footer-link-5")}</a></li>
							</ul>
						</Col>

						<Col md={6}>
							<h4>{t("footer-title-2")}</h4>

							<ul>
								<li><a href="http://lex.uz//docs/6213382">{t("footer-link-6")}</a></li>
								<li><a href="http://lex.uz//docs/6234904">{t("footer-link-7")}</a></li>
								<li><a href="http://lex.uz//docs/6840502">{t("footer-link-8")}</a></li>
								<li><a href="http://lex.uz//ru/docs/-3336169">{t("footer-link-9")}</a></li>
							</ul>
						</Col>
						
						<Col md={3}>
							<h4>{t("footer-title-3")}</h4>

							<ul>
								<li><a href="tel:+998917972385">+998 91 797 23 85</a></li>
							</ul>
						</Col>
					</Row>


					<hr/>

					<Row class="row footer-bottom">
						<Col md={6} className="title">
							<p>OOO “1CORP” C 2024</p>
						</Col>

						<Col md={6} className="socials d-flex" style={{justifyContent: 'flex-end', columnGap: 20}}>
							<img src="/assets/youtube-icon.svg" alt="" />
							<img src="/assets/instagram-icon.svg" alt="" />
						</Col>
					</Row>
				</footer>
			</div>
    );
};

export default Home;