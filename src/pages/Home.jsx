import { Button, Modal, Form, Container, Navbar, Nav, Row, Col, Card, Carousel, Tabs, Tab } from 'react-bootstrap';
import { useContext, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../main";
import { signIn } from "../function/http/UserApi";
import { ADMIN_DASHBOARD_ROUTE, HOME_ROUTE, PRIVACYPOLICY_ROUTE, REGISTRATION_ROUTE, USER_DASHBOARD_ROUTE } from "../utils/consts";
import { ToastContainer, toast } from "react-toastify";
import { ReactTyped } from "react-typed";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from 'react-countup';
import 'intersection-observer';

import { BsTelephone } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { LiaSmsSolid } from "react-icons/lia";
import { PiSignatureThin } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { TbFaceId } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

import Logo_Light from "../assets/img/logo_light.webp";
import Logo_Dark from "../assets/img/logo_dark.webp";
import Smartphone from "../assets/img/smartphone.png";

import Carousel_left_icon from "../assets/img/left-arrow.svg";
import Carousel_right_icon from "../assets/img/right-arrow.svg";

import Youtube_icon from "../assets/img/youtube-icon.svg";
import Instagram_icon from "../assets/img/instagram-icon.svg";

import Contract_img from "../assets/img/tabs/shartnomalar.jpg";
import Appeal_img from "../assets/img/tabs/arizalar.jpg";
import Corperation_img from "../assets/img/tabs/korparativ-hujjat.jpg";
import Qr_img from "../assets/img/tabs/qr.jpg";
import Signature_img from "../assets/img/tabs/imzo.jpg";
import Sms_img from "../assets/img/tabs/sms.jpg";
import Ocr_img from "../assets/img/tabs/ocr.jpg";
import AI_img from "../assets/img/tabs/ai.jpg";

import Hotel_img from "../assets/img/hotel.svg";
import Edu_img from "../assets/img/edu.svg";
import Building_img from "../assets/img/building.svg";
import Bank_img from "../assets/img/bank.svg";

import Signature_icon_img from "../assets/img/faksimile-icon.svg";
import Phone_icon_img from "../assets/img/phone-icon.svg";
import Telegram_icon_img from "../assets/img/telegram-icon.svg";
import Face_icon_img from "../assets/img/face-icon.svg";
import ESignature_icon_img from "../assets/img/eimzo-icon.svg";

const Home = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const { t, i18n } = useTranslation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [navbarIsOpened, setNavbarIsOpened] = useState(false);

  const statisticsRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect observer after first trigger
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }

    return () => {
      if (statisticsRef.current) {
        observer.unobserve(statisticsRef.current);
      }
    };
  }, []);


  useEffect(() => {
    if (user.user.role == "User") {
      navigate(USER_DASHBOARD_ROUTE);
    } else if (user.user.role == "Admin") {
      navigate(ADMIN_DASHBOARD_ROUTE);
    }

    if (
      localStorage.getItem("Language") === null ||
      localStorage.getItem("Language") === undefined ||
      localStorage.getItem("Language") === ""
    ) {
      localStorage.setItem("Language", "uz");
    } else {
      i18n.changeLanguage(localStorage.getItem("Language"));
    }
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("Language", language);
  };

  const click = async () => {
    try {
      let data;
      data = await signIn(phone, password);

      if (phone.length != 9) {
        toast.error("login  isze"),
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          };
      }

      if (data) {
        user.setUser(data);
        user.setIsAuth(true);

        if (data.role === "Admin") {
          navigate(ADMIN_DASHBOARD_ROUTE);
        } else if (data.role === "User" || data.role === "Lawyer") {
          navigate(USER_DASHBOARD_ROUTE);
        }
      }
    } catch (e) {
      toast.error(t(`${e.response.data.message}`), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        click();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [phone, password]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function scrollToElement() {
    const target = document.getElementById('target-element');
    const headerOffset = 380;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
  }

  const languages = [
    { code: "uz", label: "O'zbek" },
    { code: "ru", label: "Русский" },
    { code: "kr", label: "Ўзбек" },
    { code: "qr", label: "Qaraqalpaq" },
    { code: "qrkr", label: "Қарақалпақ" },
  ];

  const prices = [
    {
      title: 'General:Home:Price:Price_one:Price_one_title',
      price: '149.000',
      contentOne: 'General:Home:Price:Price_one:Price_one_content_one',
      contentTwo: 'General:Home:Price:Price_one:Price_one_content_two',
      month: 'General:Home:Price:Price_month',
      select: 'General:Home:Price:Price_select',
      groupName: 'group1',
      months: [1, 6, 12],
    },
    {
      title: 'General:Home:Price:Price_two:Price_two_title',
      price: '399.000',
      contentOne: 'General:Home:Price:Price_two:Price_two_content_one',
      contentTwo: 'General:Home:Price:Price_two:Price_two_content_two',
      month: 'General:Home:Price:Price_month',
      select: 'General:Home:Price:Price_select',
      groupName: 'group2',
      months: [1, 6, 12],
    },
    {
      title: 'General:Home:Price:Price_three:Price_three_title',
      price: '500.000',
      contentOne: 'General:Home:Price:Price_three:Price_three_content_one',
      contentTwo: 'General:Home:Price:Price_three:Price_three_content_two',
      month: 'General:Home:Price:Price_month',
      select: 'General:Home:Price:Price_select',
      groupName: 'group3',
      months: [1, 6, 12],
    },
    {
      title: 'General:Home:Price:Price_four:Price_four_title',
      price: '750.000',
      contentOne: 'General:Home:Price:Price_four:Price_four_content_one',
      contentTwo: 'General:Home:Price:Price_four:Price_four_content_two',
      month: 'General:Home:Price:Price_month',
      select: 'General:Home:Price:Price_select',
      groupName: 'group4',
      months: [1, 6, 12],
    },
  ];

  const tabsData = [
    {
      eventKey: "shartnomalar",
      title: "General:Home:Tabs:Contract",
      imgSrc: Contract_img,
      imgAlt: "General:Home:Tabs:Contract",
      listItems: [
        "General:Home:Tabs:Contract_text_one",
        "General:Home:Tabs:Contract_text_two",
        "General:Home:Tabs:Contract_text_three",
        "General:Home:Tabs:Contract_text_four"
      ]
    },
    {
      eventKey: "arizalar",
      title: "General:Home:Tabs:Application",
      imgSrc: Appeal_img,
      imgAlt: "General:Home:Tabs:Application",
      listItems: [
        "General:Home:Tabs:Application_text_one",
        "General:Home:Tabs:Application_text_two",
        "General:Home:Tabs:Application_text_three",
        "General:Home:Tabs:Application_text_four"
      ]
    },
    {
      eventKey: "korporativ-hujjatlar",
      title: "General:Home:Tabs:Document",
      imgSrc: Corperation_img,
      imgAlt: "General:Home:Tabs:Document",
      listItems: [
        "General:Home:Tabs:Document_text_one",
        "General:Home:Tabs:Document_text_two",
        "General:Home:Tabs:Document_text_three",
        "General:Home:Tabs:Document_text_four"
      ]
    },
    {
      eventKey: "murojaatlar",
      title: "General:Home:Tabs:Appeal",
      imgSrc: Qr_img,
      imgAlt: "General:Home:Tabs:Appeal",
      listItems: [
        "General:Home:Tabs:Appeal_text_one",
        "General:Home:Tabs:Appeal_text_two",
        "General:Home:Tabs:Appeal_text_three"
      ]
    },
    {
      eventKey: "imzo",
      title: "General:Home:Tabs:Signature",
      imgSrc: Signature_img,
      imgAlt: "General:Home:Tabs:Signature",
      listItems: [
        "General:Home:Tabs:Signature_text_one",
        "General:Home:Tabs:Signature_text_two",
        "General:Home:Tabs:Signature_text_three"
      ]
    },
    {
      eventKey: "sms",
      title: "General:Home:Tabs:Sms",
      imgSrc: Sms_img,
      imgAlt: "General:Home:Tabs:Sms",
      listItems: [
        "General:Home:Tabs:Sms_text_one",
        "General:Home:Tabs:Sms_text_two"
      ]
    },
    {
      eventKey: "ocr",
      title: "General:Home:Tabs:OCR",
      imgSrc: Ocr_img,
      imgAlt: "General:Home:Tabs:OCR",
      listItems: [
        "General:Home:Tabs:OCR_text_one",
        "General:Home:Tabs:OCR_text_two"
      ]
    },
    {
      eventKey: "ai",
      title: "General:Home:Tabs:AI",
      imgSrc: AI_img,
      imgAlt: "General:Home:Tabs:AI",
      listItems: [
        "General:Home:Tabs:AI_text_one",
        "General:Home:Tabs:AI_text_two"
      ]
    }
  ];

  const carouselItemsData = [
    {
      title: "General:Home:Carousel:Carousel_one",
      imgSrc: Hotel_img,
      imgAlt: "Hotel",
      text: "General:Home:Carousel:Carousel_one_text"
    },
    {
      title: "General:Home:Carousel:Carousel_two",
      imgSrc: Edu_img,
      imgAlt: "Education",
      text: "General:Home:Carousel:Carousel_two_text"
    },
    {
      title: "General:Home:Carousel:Carousel_three",
      imgSrc: Building_img,
      imgAlt: "Building",
      text: "General:Home:Carousel:Carousel_three_text"
    },
    {
      title: "General:Home:Carousel:Carousel_four",
      imgSrc: Bank_img,
      imgAlt: "Bank",
      text: "General:Home:Carousel:Carousel_four_text"
    }
  ];

  return (
    <>
      <div>
        <header>
          <nav>
            <Link to={HOME_ROUTE} className="logo">
              <img src={Logo_Light} alt="1doc.uz Logo" />
              <h1>1doc.uz</h1>
            </Link>

            <div
              className="dropdown"
              onMouseLeave={toggleDropdown}
              onMouseEnter={toggleDropdown}
            >
              <button className="dropbtn">
                <span>
                  {localStorage.getItem("Language") === "uz"
                    ? "O'zbek"
                    : localStorage.getItem("Language") === "ru"
                      ? "Русский"
                      : localStorage.getItem("Language") === "kr"
                        ? "Ўзбек"
                        : localStorage.getItem("Language") === "qr"
                          ? "Qaraqalpaq"
                          : localStorage.getItem("Language") === "qrkr"
                            ? "Қарақалпақ"
                            : "Language"}
                </span>
                <FaChevronDown className={`icon ${isOpen ? 'open' : ''}`} />
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  {languages.map((lang) =>
                    lang.code !== localStorage.getItem("Language") ? (
                      <a
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                      >
                        {lang.label}
                      </a>
                    ) : null,
                  )}
                </div>
              )}
            </div>

            <div className="btns d-flex">
              <Link to={REGISTRATION_ROUTE}>
                <button className="btn btn-primary start-btn">
                  {t("General:Home:Navbar:Demo_button")}
                </button>
              </Link>
              <button
                className="btn btn-outline-primary login-btn"
                onClick={handleShow}
              >
                {t("General:Home:Navbar:Login")}
              </button>
            </div>

            <div className="navbar-icon" onClick={() => setNavbarIsOpened(!navbarIsOpened)}>
              <img src="/src/assets/img/navbar.svg" alt="" />
            </div>

            <div className={`navbar-right ${navbarIsOpened ? 'navbar-opened' : ''}`} >
              <img onClick={() => setNavbarIsOpened(!navbarIsOpened)} className="cross-icon" src="/src/assets/img/cross-icon.svg" alt="" />

              <div className="btn-list">
                <Link to={REGISTRATION_ROUTE}>
                  <button className="btn btn-primary start-btn">
                    {t("General:Home:Navbar:Demo_button")}
                  </button>
                </Link>
                <button
                  className="btn btn-outline-primary login-btn"
                  onClick={handleShow}
                >
                  {t("General:Home:Navbar:Login")}
                </button>
              </div>
            </div>
          </nav>

          <div className="header-content">
            <ReactTyped
              className="header-title"
              strings={[
                t("General:Home:Header:text_one"),
                t("General:Home:Header:text_two"),
                t("General:Home:Header:text_three"),
              ]}
              typeSpeed={30}
              backSpeed={60}
              loop
            />
            <p>{t("General:Home:Header:Header_description")}</p>
            <div className="btns d-flex">
                <a className="btn btn-primary prices-btn"
                onClick={() => scrollToElement()}
                >
                  {t("General:Home:Navbar:Tariffs")}
                </a>
            </div>
          </div>

          <img src={Smartphone} className="tel smartphone" />
        </header>

        <section className="tabs">
          <Tabs
            defaultActiveKey="shartnomalar"
            id="uncontrolled-tab-example"
            className="justify-content-center"
          >
                 {tabsData.map((tab, index) => (
                             <Tab eventKey={tab.eventKey} key={index} title={t(tab.title)}>
                             <div className="tab-content">
                               <Row>
                                 <Col md={5}>
                                   <img
                                     src={tab.imgSrc}
                                     className="img-fluid"
                                     alt={tab.imgAlt}
                                   />
                                 </Col>
                                 <Col md={6}>
                                   <ul className="feature-list list-unstyled">
                                      {tab.listItems.map((item, index) => 
                                        <li key={index}>{t(item)}</li>
                                      )}
                                   </ul>
                                 </Col>
                               </Row>
                             </div>
                           </Tab>
                  ))}
          </Tabs>
        </section>

        <section className="info-content d-flex justify-content-center align-items-center">
          <h3 style={{textDecoration: "uppercase"}}>{t("General:Home:Info:Info_content")}</h3>
          <a href="https://upl.uz/economy/27678-news.html">STAT.UZ</a>
        </section>

        <section className="second-slider">
          <Carousel
            interval={2000}
            touch
            variant="dark"
            prevIcon={<img src={Carousel_left_icon} />}
            nextIcon={<img src={Carousel_right_icon} />}
          >
          {carouselItemsData.map((item, index) => (
            <Carousel.Item className="carousel-item" key={index}>
              <h1>{t(item.title)}</h1>
              <Row className="item-content">
                <Col md={6}>
                  <img className="d-block" src={item.imgSrc} alt={item.imgAlt} />
                </Col>
                <Col md={6}>
                  <p>{t(item.text)}</p>
                </Col>
              </Row>
            </Carousel.Item>
            ))}
          </Carousel>
        </section>

        <section className="statistics" ref={statisticsRef}>
          <Row className="d-flex justify-content-center align-items-end">
            <Col md={4} className="d-flex justify-content-center align-items-center statistics-banner">
              <p>{t('General:Home:Statistics:Statistics_title')}</p>
            </Col>
            <Col md={8} className="d-flex justify-content-center">
              <Row className="stat-wrapper">
                <Col md={4} className="stat-col d-flex justify-content-end align-items-end flex-column">
                  <h1>
                    + <CountUp end={1000} duration={5} delay={1} start={isInView ? 0 : null} />
                  </h1>
                  <h4>{t('General:Home:Statistics:Statistics_title_one')}</h4>
                </Col>
                <Col md={4} className="stat-col d-flex justify-content-center align-items-end flex-column">
                  <h1>
                    + <CountUp end={100} duration={5} delay={1} start={isInView ? 0 : null} />
                  </h1>
                  <h4>{t('General:Home:Statistics:Statistics_title_two')}</h4>
                </Col>
                <Col md={4} className="stat-col d-flex justify-content-center align-items-end flex-column">
                  <h1>
                    + <CountUp end={50} duration={5} delay={1} start={isInView ? 0 : null} />
                  </h1>
                  <h4>{t('General:Home:Statistics:Statistics_title_three')}</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="signing-types">
          <h2>{t("General:Home:Signing:Signing_title")}</h2>
          <Row className="signing-types-content">
            <Col
              md={2}
              className="signing-types-col d-flex justify-content-center align-items-center flex-column"
            >
              <div className="signing-types-col-header d-flex justify-content-center align-items-center">
                <img src={Signature_icon_img} alt="Glass Icon" />
              </div>
              <div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-center">
                  {t("General:Home:Signing:Signing_title_one")}
                </h4>
              </div>
            </Col>

            <Col
              md={2}
              className="signing-types-col d-flex justify-content-center align-items-center flex-column"
            >
              <div className="signing-types-col-header d-flex justify-content-center align-items-center">
                <img src={Phone_icon_img} alt="Law Icon" />
              </div>
              <div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-center">
                  {t("General:Home:Signing:Signing_title_two")}
                </h4>
              </div>
            </Col>

            <Col
              md={2}
              className="signing-types-col d-flex justify-content-center align-items-center flex-column"
            >
              <div className="signing-types-col-header d-flex justify-content-center align-items-center">
                <img src={Telegram_icon_img} alt="Signature Icon" />
              </div>
              <div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-center">
                  {t("General:Home:Signing:Signing_title_three")}
                </h4>
              </div>
            </Col>

            <Col
              md={2}
              className="signing-types-col d-flex justify-content-center align-items-center flex-column"
            >
              <div className="signing-types-col-header d-flex justify-content-center align-items-center">
                <img src={Face_icon_img} alt="Signature Icon" />
              </div>
              <div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-center">
                  {t("General:Home:Signing:Signing_title_four")}
                </h4>
              </div>
            </Col>

            <Col
              md={2}
              className="signing-types-col d-flex justify-content-center align-items-center flex-column"
            >
              <div className="signing-types-col-header d-flex justify-content-center align-items-center">
                <img src={ESignature_icon_img} alt="Signature Icon" />
              </div>
              <div className="signing-types-col-body d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-center">
                  {t("General:Home:Signing:Signing_title_five")}
                </h4>
              </div>
            </Col>
          </Row>
        </section>

        <section className="companies">
          <h2 className="text-center">
            {t("General:Home:Corparations:Corparations_title")}
          </h2>

          <div className="companies-content d-flex">
            <div className="company"></div>
            <div className="company"></div>
            <div className="company"></div>
            <div className="company"></div>
            <div className="company"></div>
            <div className="company"></div>
          </div>
        </section>

        <section className="pricing"  id="target-element">
          <h2 className="text-center">{t("General:Home:Price:Price_title")}</h2>

          <div className="pricing-content d-flex justify-content-center align-items-center">
          {prices.map((priceInfo, index) => (
              <div className="price-box" key={index}>
                <h4>{t(priceInfo.title)}</h4>
                <h3>
                  {priceInfo.price} <span>uzs</span>
                </h3>
                <p>{t(priceInfo.contentOne)}</p>
                <p>{t(priceInfo.contentTwo)}</p>
                <Form className="price-types">
                  {priceInfo.months.map((month, index) => (
                    <div className={`type-${index + 1}`} key={index}>
                      <Form.Check
                        inline
                        label={`${month} ${t(priceInfo.month)}`}
                        name={priceInfo.groupName}
                        type="radio"
                        id={`inline-radio-${priceInfo.groupName}-${index}`}
                        defaultChecked={index === 0}
                      />
                    </div>
                  ))}
                </Form>
                <button className="btn btn-primary">
                  {t(priceInfo.select)}
                </button>
              </div>
          ))}
          </div>
        </section>

        <section className="banner">
          <a href="#" className="logo">
            <img src={Logo_Light} />
          </a>

          <div className="content">
            <h2>1doc.uz</h2>
            <h4>{t("General:Home:Banner:Banner_title")}</h4>
          </div>
        </section>

        <footer>
          <Row>
            <Col md={3}>
              <h4>{t("General:Home:Footer:Column_one:Column_one_title")}</h4>
              <ul>
                <li>
                  <a href={PRIVACYPOLICY_ROUTE} target='_blank'>
                    {t("General:Home:Footer:Column_one:Column_one_text_one")}
                  </a>
                </li>
                <li>
                  <a href={PRIVACYPOLICY_ROUTE} target='_blank'>
                    {t("General:Home:Footer:Column_one:Column_one_text_two")}
                  </a>
                </li>
                <li>
                  <a href={PRIVACYPOLICY_ROUTE} target='_blank'>
                    {t("General:Home:Footer:Column_one:Column_one_text_three")}
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={6}>
              <h4>{t("General:Home:Footer:Column_two:Column_two_title")}</h4>

              <ul>
                <li>
                  <a href="http://lex.uz//docs/6213382" target='_blank'>
                    {t("General:Home:Footer:Column_two:Column_two_text_one")}
                  </a>
                </li>
                <li>
                  <a href="http://lex.uz//docs/6234904" target='_blank'>
                    {t("General:Home:Footer:Column_two:Column_two_text_two")}
                  </a>
                </li>
                <li>
                  <a href="http://lex.uz//docs/6840502" target='_blank'>
                    {t("General:Home:Footer:Column_two:Column_two_text_three")}
                  </a>
                </li>
                <li>
                  <a href="http://lex.uz//ru/docs/-3336169" target='_blank'>
                    {t("General:Home:Footer:Column_two:Column_two_text_four")}
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3}>
              <h4>
                {t("General:Home:Footer:Column_three:Column_three_title")}
              </h4>

              <ul>
                <li>
                  <a href="tel:+998917972385">+998 91 797 23 85</a>
                </li>
              </ul>
            </Col>
          </Row>

          <hr />

          <Row className="row footer-bottom">
            <Col md={6} className="title">
              <p>OOO “1CORP” C 2024</p>
            </Col>

            <Col
              md={6}
              className="socials d-flex"
              style={{ justifyContent: "flex-end", columnGap: 20 }}
            >
              <img src={Youtube_icon} alt="" />
              <img src={Instagram_icon} alt="" />
            </Col>
          </Row>
        </footer>
      </div>

      <Modal
        className="py-4"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <div className="d-inline align-items-center justify-content-center">
            <Modal.Title>{t("General:Auth:pageTitle")}</Modal.Title>
            <span>
              {t("General:Auth:notRegister")}{" "}
              <Link to="/registration">{t("General:Auth:register")}</Link>
            </span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t("General:Auth:phone")}</Form.Label>
              <Form.Control
                placeholder={t("General:Auth:phonePlaceholder")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t("General:Auth:password")}</Form.Label>
              <Form.Control
                placeholder={t("General:Auth:passwordPlaceholder")}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Form.Check
                type={"checkbox"}
                label={t("General:Auth:remember")}
              />
              <span>{t("General:Auth:forget")}</span>
            </div>
            <div className="d-grid gap-1">
              <Button
                variant="primary"
                size="lg"
                className="mt-3 align-self-end"
                onClick={click}
              >
                {t("General:Auth:button")}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
});

export default Home;
