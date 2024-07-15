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

	const forceRerender = () => {
    this.forceUpdate(); // Avoid using forceUpdate unless absolutely necessary
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
							<button className="btn btn-primary">BEPUL BOSHLASH</button>
							<button className="btn btn-outline-primary">KIRISH</button>
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
							<a className="btn btn-primary" href="/#app/#tariflar">Tariflar</a>
						</div>
					</div>

					<img src="../assets/tel.png" className="tel" />
				</header>

				<section className="tabs">
					<Tabs defaultActiveKey="shartnomalar" id="uncontrolled-tab-example">
						<Tab eventKey="shartnomalar" title="Shartnomalar">
							<div className="tab-content mt-3">
									<Row>
											<Col md={5}>
												<img src="/assets/tabs/shartnomalar.jpg" className="img-fluid" alt="Shartnomalar" />
											</Col>
											<Col md={6}>
												<ul className="feature-list list-unstyled">
													<li> Istalgan shartnomalarni mustaqil yarating.</li>
													<li> 100 dan ziyod soha va yo'nalishlar bo'yicha yaratilgan shartnoma shablonlaridan foydalaning.</li>
													<li> Talab qilingan ma'lumotlarni kiriting.</li>
													<li> IMZO chekuvchilarni belgilang, shartnoma havolasini yuboring va qulay uslubda imzolang.</li>
												</ul>
											</Col>
									</Row>
								</div>
						</Tab>
						
						<Tab eventKey="arizalar" title="Arizalar">
							<div className="tab-content mt-3">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/arizalar.jpg" className="img-fluid" alt="Arizalar" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li> Istalgan tashkilotlarga rasmiy arizalar yuboring.</li>
											<li> 50 dan ziyod tashkilot, vazirlik va qo'mitalar talab va nizomlari asosida yaratilgan shablonlardan foydalaning.</li>
											<li> Talab qilingan ma'lumotlarni kiriting.</li>
											<li> Qulay elektron imzolash turlaridan birini tanlang va imzolang.</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="korporativ-hujjatlar" title="Korporativ Hujjatlar">
							<div className="tab-content mt-3">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/korparativ-hujjat.jpg" className="img-fluid" alt="Korporativ Hujjatlar" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li> Korxonangiz faoliyatidagi ruxsatnoma, ishonchnoma, bayyonnoma, buyruqlar, dalolatnoma va barcha boshqa hujjatlarni elektron shakllantiring.</li>
											<li> 50 dan ziyod soha va yo'nalishlar bo'yicha yaratilgan hujjatlar shablonlaridan foydalaning.</li>
											<li> Talab qilingan ma'lumotlarni kiriting.</li>
											<li> Imzo chekuvchilarni belgilang, hujjat havolasini yuboring va qulay uslubda imzolang.</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="murojatlar" title="Murojatlar">
							<div className="tab-content">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/qr.jpg" className="img-fluid" alt="Murojatlar" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li> Mijozlaringiz, xodim va hamkorlaringizdan murojaatlarni tezkor qabul qilib oling.</li>
											<li> Siz uchun individual taqdim etiladigan shablonlar asosida murojaatlarni qabul qiling va zudlik bilan javob bering</li>
											<li> Javob berish bo'limi orqali hech qaysi murojaatlarni e'tibordan qoldirmang.</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="imzo" title="IMZO">
							<div className="tab-content">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/подпис.jpg" className="img-fluid" alt="IMZO" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li> Biznesingiz uzluksiz ishlashi uchun barcha hujjatlarni tezkor imzolang.</li>
											<li> Xizmat safarida bo'lsangiz ham, barcha muhim hujjatlar siz bilan.</li>
											<li> Tayyor Word yoki PDF formatidagi hujjatni yuklang va imzo chekuvchini belgilang.</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="sms" title="SMS Habarnoma">
							<div className="tab-content">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/sms.jpg" className="img-fluid" alt="SMS Habarnoma" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li> Faoliyatingiz davomidagi yangiliklar, xabarlar va muhim ma'lumotlarni matn shaklda qisqa raqamlar orqali yuboring.</li>
											<li> Ogohlantirish xatlari va boshqa muhim yuridik hujjatlarni PDF shaklda qisqa raqamlar orqali yuboring.</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

						<Tab eventKey="ocr" title="OCR Redactor">
							<div className="tab-content">
								<Row>
									<Col md={5}>
										<img src="/assets/tabs/ocr.jpg" className="img-fluid" alt="OCR Redactor" />
									</Col>
									<Col md={6}>
										<ul className="feature-list list-unstyled">
											<li> OCR (optical character recognition) texnologiyasi yordamida suratlardagi yozuvlarni matn holatiga keltiring.</li>
											<li> Matnlarni qiyinchiliksiz tahrirlang, ko'chirib oling yoki Word formatida yuklab oling.</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Tab>

					</Tabs>
				</section>

				<section className="info-content d-flex justify-content-center align-items-center">
					<h3>O'ZBEKISTON RESPUBLIKASI OLIY SUDI TOMONIDAN QAYD ETILGAN MA'LUMOTLARGA KO'RA 2023-YILDA O'ZBEKISTON IQTISODIY SUDLARI TOMONIDAN 271 748 TA ISHLAR KO'RIB CHIQILGAN HAMDA DAVOGARLAR FOYDASIGA 23,5 TRLN SO'M MIQDORDA MABLAG'LAR UNDIRUVI BO'YICHA QARORLAR CHIQARILGAN. DAVO ARIZALARINI SOXALAR VA MUAMMOLAR BO'YICHA GURUHLARGA BO'LINGANDA, SHARTNOMAVIY MUNOSABATLAR, XUSUSAN SHARTNOMA SHARTLARI ANIQ KO'RSATILMAGANLIGI , KO'P HOLATLARDA SHARTNOMALAR MUTLAQO MAVJUD EMASLIGI KO'RSATILGAN.</h3>
					<a href="https://www.stat.uz">STAT.UZ</a>
				</section>

				<section className="second-slider">
					<Carousel 
							interval={2000} 
							touch 
							variant='dark'
							prevIcon={<img src="assets/left-arrow.svg" />}
							nextIcon={<img src="assets/right-arrow.svg" />}>
								<Carousel.Item className="carousel-item">
										<h1>MEHMONXONA VA HOTELLAR, DALA HOVLI VA SANATORIYALAR</h1>

										<Row className="item-content">
											<Col md={6}>
												<img className="d-block" src="./assets/hotel.svg" />
											</Col>
											<Col md={6}>
												<p>
													Qisqa muddatga mehmonlarni joylashtirish va ko'chmas mulkni qisman yoki butunlay mo‘jiza ishonib topshirish bugungi kundagi eng xatarli bizneslardan biri bo'lib qolmoqda. “ZAKS” talabi bekor bo'lgandan keyin, xavf darajasi yanada ortadi.
													<br />
													<br />
													Shartnomangizni bir zumda tezkor, oson va qonuniy tasdiqlab mol-mulkingiz va shaxsiy reputatsiyangizni saqlab qoling.
												</p>
											</Col>
										</Row>
								</Carousel.Item>

								<Carousel.Item>
										<h1>O'quv yurtlari kasb hunar va ta'lim markazlari.</h1>

										<Row className='item-content'>
											<Col md={6}>
												<img className="d-block" src="./assets/edu.svg" />
											</Col>
											<Col md={6}>
												<p>Deyarli barcha ta’lim markazlariga o’quvchilarni o’z vasiylari(ota-onasi yaqin qarindoshi yoki buvi buvasi) olib keladi. Ta’lim markazlarida dastlabki 2 ta dars bepul bo’lganligi sababli shartnomalar ko’p holda voyaga yetmagan o’quvchilar tomonidan berib yuboriladi va shartnomaning huquqiy statusi boshqarilmaydi.
													<br />
													<br />
												1doc.uz bilan siz shartnomani onlayn istalgan joydan istalgan adresatga(vasiyga) aniq va oson yetkazasiz.</p>
											</Col>
										</Row>
								</Carousel.Item>

								<Carousel.Item>
										<h1>Ta'mirlash tiklash va qurilish ishlari bilan shug'illanuvchi ustalan brigadasi yoki katta qurilish kompaniyalari.</h1>

										<Row className='item-content'>
											<Col md={6}>
												<img className="d-block" src="./assets/building.svg" />
											</Col>
											<Col md={6}>
												<p>
													Iqtisodiyot tarmoqlari orasida eng ko'p huquqiy nizolar ko'tariladigan sohalardan biri bu qurilishdir. Qurilish hamisha kechikadi, rejalar unutiladi, sifat holati saqlanmaydi, yoki aksincha mijoz tomonidan mahsulotlar ta'minoti o'z vaqtida yetib kelmaydi. Hattoki qilingan ishlar uchun pul ham ola olmay qolishingiz mumkin.
													<br />
													<br />
													1doc.uz - sizga qurilish sohasi uchun kerakli barcha hujjatlar to'plami yoki, obyektingiz uchun maxsus shartnoma berishga tayyor.
												</p>
											</Col>
										</Row>
								</Carousel.Item>

								<Carousel.Item>
										<h1>Bo'lib to'lash va mukromoliya tashkilotlari, lambard va kredit byurolari.</h1>

										<Row className='item-content'>
											<Col md={6}>
												<img className="d-block" src="./assets/bank.svg" />
											</Col>
											<Col md={6}>
												<p>
													Siz qimmatbaho buyumingizni mijozga bo'lib to'lashga ishonib topshirmoqdasiz. Mijozning tolov majburiyatini ifodalash, xavf-xatarni jilovlash uchun maksimal himoyalangan shartnomalar taqdim eting..
													<br />
													<br />
													Qonuniy ravishda adresat bilan shartnomalar imzolang. Yetkazib berish xatlari va yo'l xatlarini yoqimli bonus sifatida qabul qilib oling.
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
								ISTALGAN SHARTNOMANI QULAY <b>YARATING</b> VA QULAY <b>TASDIQLANG</b>
							</p>
						</Col>
						<Col md={8} className="d-flex justify-content-center">
							<Row className="stat-wrapper">
								<Col md={4} className="stat-col d-flex justify-content-end align-items-end flex-column">
									<h1>+1000</h1>
									<h4>JAMI FOYDALANUVCHILAR</h4>
								</Col>
								<Col md={4} className="stat-col d-flex justify-content-center align-items-end flex-column">
									<h1>+100</h1>
									<h4>PLATFORMADA MAVJUD SHARTNOMA SHABLONLARI</h4>
								</Col>
								<Col md={4} className="stat-col d-flex justify-content-center align-items-end flex-column">
									<h1>+50</h1>
									<h4>PLATFORMADA MAVJUD ARIZA NAMUNALARI</h4>
								</Col>
							</Row>
						</Col>
					</Row>
				</section>

				<section className="signing-types">
					<h2>IMZOLASH USULLARI</h2>
					<Row className="signing-types-content">
						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/faksimile-icon.svg" alt="Glass Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">FAKSIMILE</h4>
							</div>
						</Col>

						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/phone-icon.svg" alt="Law Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">SMS</h4>
							</div>
						</Col>

						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/telegram-icon.svg" alt="Signature Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">TELEGRAM</h4>
							</div>
						</Col>
						
						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/face-icon.svg" alt="Signature Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">FACE ID</h4>
							</div>
						</Col>
						
						<Col md={2} className="signing-types-col d-flex justify-content-center align-items-center flex-column">
							<div className="signing-types-col-header d-flex justify-content-center align-items-center">
								<img src="assets/eimzo-icon.svg" alt="Signature Icon" />
							</div>
							<div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
								<h4 className="text-center">E-IMZO</h4>
							</div>
						</Col>
					</Row>
				</section>

				<section className="companies">
					<h2 className='text-center'>BIZ BILAN BIRGA</h2>

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
					<h2 className="text-center">O'Z TARIFINGIZNI TANLANG</h2>
					
					<div className="pricing-content d-flex justify-content-center align-items-center">
						<div className="price-box">
							<h4>YaTT 50</h4>
							<h3>149.000 <span>uzs</span></h3>
							<p>50 dona hujjatlar</p>
							<p>50 dona sms-habarnoma</p>

							<Form className="price-types">
								<div className="type-1">
									<Form.Check
										inline
										label="1 oy"
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-1`}
										checked
									/>
								</div>

								<div className="type-2">
									<Form.Check
										inline
										label="6 oy"
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-2`}
									/>
								</div>

								<div className="type-3">
									<Form.Check
										inline
										label="12 oy"
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-3`}
									/>
								</div>
							</Form>

							<button className="btn btn-primary">Tanlash</button>
						</div>
						
						<div className="price-box">
							<h4>BIZNES 250</h4>
							<h3>399.000 <span>uzs</span></h3>
							<p>250 dona hujjatlar</p>
							<p>250 dona sms-habarnoma</p>

							<Form className="price-types">
								<div className="type-1">
									<Form.Check
										inline
										label="1 oy"
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-1`}
										checked
									/>
								</div>

								<div className="type-2">
									<Form.Check
										inline
										label="6 oy"
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-2`}
									/>
								</div>

								<div className="type-3">
									<Form.Check
										inline
										label="12 oy"
										name="group2"
										type={'radio'}
										id={`inline-${'radio'}-3`}
									/>
								</div>
							</Form>

							<button className="btn btn-primary">Tanlash</button>
						</div>

						<div className="price-box">
							<h4>SENAT 500</h4>
							<h3>500.000 <span>uzs</span></h3>
							<p>500 dona hujjatlar</p>
							<p>500 dona sms-habarnoma</p>

							<Form className="price-types">
								<div className="type-1">
									<Form.Check
										inline
										label="1 oy"
										name="group3"
										type={'radio'}
										id={`inline-${'radio'}-2`}
										checked
									/>
								</div>

								<div className="type-2">
									<Form.Check
										inline
										label="6 oy"
										name="group3"
										type={'radio'}
										id={`inline-${'radio'}-2`}
									/>
								</div>

								<div className="type-3">
									<Form.Check
										inline
										label="12 oy"
										name="group3"
										type={'radio'}
										id={`inline-${'radio'}-2`}
									/>
								</div>
							</Form>

							<button className="btn btn-primary">Tanlash</button>
						</div>

						<div className="price-box">
							<h4>President</h4>
							<h3>750.000 <span>uzs</span></h3>
							<p>1000 dona hujjatlar</p>
							<p>1000 dona sms-xabarnoma</p>

							<Form className="price-types">
								<div className="type-1">
									<Form.Check
										inline
										label="1 oy"
										name="group4"
										type={'radio'}
										id={`inline-${'radio'}-3`}
										checked
									/>
								</div>

								<div className="type-2">
									<Form.Check
										inline
										label="6 oy"
										name="group4"
										type={'radio'}
										id={`inline-${'radio'}-3`}
									/>
								</div>

								<div className="type-3">
									<Form.Check
										inline
										label="12 oy"
										name="group4"
										type={'radio'}
										id={`inline-${'radio'}-3`}
									/>
								</div>
							</Form>

							<button className="btn btn-primary">Tanlash</button>
						</div>
					</div>
				</section>


				<section className="banner">
					<a href="#" className="logo">
						<img src="assets/logo.svg" />
					</a>

					<div className="content">
						<h2>1doc.uz</h2>
						<h4>Barcha hujjatlarga bir yechim!</h4>
					</div>
				</section>

				<footer>
					<Row>
						<Col md={3}>
							<h4>Biz haqimizda</h4>
							<ul>
								<li><a href="">Ma'lumotlarning maxviylik siyosati</a></li>
								<li><a href="">Ommaviy oferta</a></li>
								<li><a href="">Rahbariyat</a></li>
								<li><a href="">Shartnomalar</a></li>
								<li><a href="">Arizalar</a></li>
							</ul>
						</Col>

						<Col md={6}>
							<h4>Qonuniylik asoslari</h4>

							<ul>
								<li><a href="http://lex.uz//docs/6213382">“Elektron tijorat ” toʼgʼrisidagi “Oʼzbekiston Respublikasi Qonuni.</a></li>
								<li><a href="http://lex.uz//docs/6234904">Elektron imzo toʼgʼrisidagi” “Oʼzbekiston Respublikasi Qonuni.</a></li>
								<li><a href="http://lex.uz//docs/6840502">Tadbirkorlik subʼektlariga xalqaro platformalar orqali raqamli texnologiyalar uchun qulay shart-sharoitlar yaratish chora tadbirlari toʼgʼrisidagi ”gi qarori.</a></li>
								<li><a href="http://lex.uz//ru/docs/-3336169">“Jismoniy va yuridik shaxslarning murojaatlari to'g'risiga”gi Qonun</a></li>
							</ul>
						</Col>
						
						<Col md={3}>
							<h4>Aloqa</h4>

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