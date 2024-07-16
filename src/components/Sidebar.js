import React, { useState, useEffect } from 'react';
import '../style.css';
import Shartnomalar from './Shartnomalar';
import Arizalar from './Arizalar';
import Murojaatlar from './Murojaatlar';
import Hujjatlar from './Hujjatlar';
import Sms from './Sms';
import Pochta from './Pochta';
import OCR from './OCR';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('shartnomalar');
  const [hoveredLink, setHoveredLink] = useState('shartnomalar');
  const [themeLinkHovered, setThemeLinkHovered] = useState(false);
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState("O'zbekcha");

  useEffect(() => {
    // Alert the page location when the component mounts
    if (window.location == "http://localhost:3000/#app/dashboard") {
      setActiveLink('shartnomalar');
    }
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLinkHover = (link) => {
    setHoveredLink(link);
  };
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="sidebar-nav">
          <a className="logo-expand" href="#">
            <img src="/assets/logo.svg" alt="1doc.uz Logo" />
            <h1>1doc.uz</h1>
          </a>

          <div className="right d-flex">
            <button className='btn btn-outline-primary' onMouseEnter={() => setThemeLinkHovered(true)} onMouseLeave={() => setThemeLinkHovered(false)}>
              Rangni o’zgartirish
              <img src={themeLinkHovered ? "./assets/sidebar/theme-icon-light.svg" : "./assets/sidebar/theme-icon.svg"} alt="" />
            </button>

            <a href="tel:+998999367099" className='tel'>+998 99 936 70 99</a>
        
            <div className="dropdown" onMouseLeave={toggleDropdown} onMouseEnter={toggleDropdown} >
              <button className="dropbtn">
                <span>{language}</span>
                <FontAwesomeIcon icon={faChevronDown} className={`icon ${isOpen ? 'open' : ''}`} />
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  <a className={language === "Ўзбекча" ? "active" : ""} onClick={() => {setLanguage("Ўзбекча"); i18n.changeLanguage("uz_kr");  }}>Ўзбекча</a>
                  <a className={language === "O'zbekcha" ? "active" : ""} onClick={() => {setLanguage("O'zbekcha"); i18n.changeLanguage("uz_la");  }}>O'zbekcha</a>
                  <a className={language === "Русский" ? "active" : ""} onClick={() => {setLanguage("Русский"); i18n.changeLanguage("ru");  }}>Русский</a>
                  <a className={language === "English" ? "active" : ""} onClick={() => {setLanguage("English"); i18n.changeLanguage("en");  }}>English</a>
                </div>
              )}
            </div>

            <a href="#settings">
              <img src="./assets/sidebar/settings-icon.svg" alt="" />
            </a>
          </div>
      </nav>

      <div className="container" id='sidebar'>
        <div className="sidebar">
          {/* <div className="logo">
            
          </div>
          
           */}

          <div className="account-info"> 
            <div className="account-name">Yangi Angren IES</div>
            <div className="account-img">
              {/* <img src="assets/sidebar/account.svg" alt="account" /> */}
            </div>
          </div>
          <div className="balance-wrapper">
            <div className="balance-info">
              <span className="balance-title">Balans:</span>
              
              <div className="balance-value">
                0.00
                <span className="balance-currency"> so’m</span>
              </div>
            </div>

            <button className='btn btn-primary'>
              Hisobni to'ldirish

              <img src="assets/wallet.svg" alt="" />
            </button>
          </div>

          <div className="side-wrapper">
            <div className="side-title">MENU</div>
            <div className="side-menu">
              <a
                className={`sidebar-link shartnomalar ${activeLink === 'shartnomalar' ? 'is-active' : ''}`}
                onClick={() => handleLinkClick('shartnomalar')}
                onMouseEnter={() => handleLinkHover('shartnomalar')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'shartnomalar' || hoveredLink === 'shartnomalar' ? 'assets/sidebar/document-light.svg' : 'assets/sidebar/document.svg'}`} width={30} height={30}  alt="" />
                Shartnomalar
              </a>
              <a
                className={`sidebar-link arizalar ${activeLink === 'arizalar' ? 'is-active' : ''}`}
                onClick={() => handleLinkClick('arizalar')}
                onMouseEnter={() => handleLinkHover('arizalar')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'arizalar' || hoveredLink === 'arizalar' ? 'assets/sidebar/arizalar-light.svg' : 'assets/sidebar/arizalar.svg'}`} width={30} height={30}  alt="" />
                Arizalar
              </a>
              <a 
                className={`sidebar-link murojaatlar ${activeLink === 'murojaatlar' ? 'is-active' : ''}`} 
                onClick={() => handleLinkClick('murojaatlar')}
                onMouseEnter={() => handleLinkHover('murojaatlar')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'murojaatlar' || hoveredLink === 'murojaatlar' ? 'assets/sidebar/murojaatlar-light.svg' : 'assets/sidebar/murojaatlar.svg'}`} width={30} height={30}  alt="" />
                Murojaatlar
              </a>
              <a 
                className={`sidebar-link hujjatlar ${activeLink === 'hujjatlar' ? 'is-active' : ''}`} 
                onClick={() => handleLinkClick('hujjatlar')}
                onMouseEnter={() => handleLinkHover('hujjatlar')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'hujjatlar' || hoveredLink === 'hujjatlar' ? 'assets/sidebar/hujjatlar-light.svg' : 'assets/sidebar/hujjatlar.svg'}`} width={30} height={30}  alt="" />
                Boshqa hujjatlar
              </a>
              <a 
                className={`sidebar-link imzoga ${activeLink === 'imzoga' ? 'is-active' : ''}`} 
                onClick={() => handleLinkClick('imzoga')}
                onMouseEnter={() => handleLinkHover('imzoga')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'imzoga' || hoveredLink === 'imzoga' ? 'assets/sidebar/imzo-light.svg' : 'assets/sidebar/imzo.svg'}`} width={30} height={30}  alt="" />
                Imzoga
              </a>
              <a 
                className={`sidebar-link sms ${activeLink === 'sms' ? 'is-active' : ''}`} 
                onClick={() => handleLinkClick('sms')}
                onMouseEnter={() => handleLinkHover('sms')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'sms' || hoveredLink === 'sms' ? 'assets/sidebar/sms-light.svg' : 'assets/sidebar/sms.svg'}`} width={30} height={30}  alt="" />
                SMS-xabarnoma
              </a>
            </div>
          </div>

          <div className="side-wrapper">
            <div className="side-title">CATEGORY</div>
            <div className="side-menu">
              <a 
                className={`sidebar-link pochta ${activeLink === 'pochta' ? 'is-active' : ''}`} 
                onClick={() => handleLinkClick('pochta')}
                onMouseEnter={() => handleLinkHover('pochta')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'pochta' || hoveredLink === 'pochta' ? 'assets/sidebar/gmail-light.svg' : 'assets/sidebar/gmail.svg'}`} width={30} height={30}  alt="" />
                Korporativ pochta
              </a>

              <a 
                className={`sidebar-link ocr ${activeLink === 'ocr' ? 'is-active' : ''}`} 
                onClick={() => handleLinkClick('ocr')}
                onMouseEnter={() => handleLinkHover('ocr')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'ocr' || hoveredLink === 'ocr' ? 'assets/sidebar/ocr-light.svg' : 'assets/sidebar/ocr.svg'}`} width={30} height={30}  alt="" />
                OCR-Redactor
              </a>
            </div>
          </div>
        </div>

        <div className="wrapper">
          {
            activeLink === 'shartnomalar' ? <Shartnomalar /> : 
            activeLink === 'arizalar' ? <Arizalar /> :
            activeLink === 'murojaatlar' ? <Murojaatlar /> :
            activeLink === 'hujjatlar' ? <Hujjatlar /> :
            activeLink === 'imzoga' ? <Hujjatlar /> :
            activeLink === 'sms' ? <Sms /> :
            activeLink === 'pochta' ? <Pochta /> :
            activeLink === 'ocr' ? <OCR /> :
            null
          }
        </div>
      </div>
    </div>
    
  );
};

export default Sidebar;
