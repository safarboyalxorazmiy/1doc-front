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
import Locker from './Locker';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('shartnomalar');
  const [hoveredLink, setHoveredLink] = useState('shartnomalar');
  const [themeLinkHovered, setThemeLinkHovered] = useState(false);
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState("O'zbekcha");
	const [theme, setTheme] = useState("primary");

  useEffect(() => {
    // Alert the page location when the component mounts
    if (window.location == "http://localhost:3000/#app/dashboard") {
      setActiveLink('shartnomalar');

      let theme = localStorage.getItem("theme");
      switch(theme) {
        case "primary":
          changeToPrimary();
          break;
        case "dark":
          changeToDark();
          break;
        case "warning":
          changeToWarning();
          break;
        case "red":
          changeToRed();
          break;
        case "gold":
          changeToGold();
          break;
        case "purple":
          changeToPurple();
          break;
        default:
          changeToPrimary();
      }
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

  const changeToPrimary = () => {
    document.documentElement.style.setProperty('--primary-color', '#0077B6');
    document.documentElement.style.setProperty('--primary-color-hover', '#003f61');
    setTheme('primary');
    setThemeLinkHovered(false);
    localStorage.setItem("theme", "primary");
  } 

  const changeToDark = () => {
    document.documentElement.style.setProperty('--primary-color', '#212529');
    document.documentElement.style.setProperty('--primary-color-hover', '#212529');
    setTheme('dark');
    setThemeLinkHovered(false);
    localStorage.setItem("theme", "dark");
  }  

  const changeToWarning = () => {
    document.documentElement.style.setProperty('--primary-color', '#6C6D1A');
    document.documentElement.style.setProperty('--primary-color-hover', '#6C6D1A');
    setTheme('warning');
    setThemeLinkHovered(false);
    localStorage.setItem("theme", "warning");
  }

  const changeToRed = () => {
    document.documentElement.style.setProperty('--primary-color', '#FF5850');
    document.documentElement.style.setProperty('--primary-color-hover', '#FF5850');
    setTheme('red');
    setThemeLinkHovered(false);
    localStorage.setItem("theme", "red");
  }

  const changeToPurple = () => {
    document.documentElement.style.setProperty('--primary-color', '#A020F0');
    document.documentElement.style.setProperty('--primary-color-hover', '#A020F0');
    setTheme('purple');
    setThemeLinkHovered(false);
    localStorage.setItem("theme", "purple");
  }

  const changeToGold = () => {
    document.documentElement.style.setProperty('--primary-color', '#FDD017');
    document.documentElement.style.setProperty('--primary-color-hover', '#FDD017');
    setTheme('gold');
    setThemeLinkHovered(false);
    localStorage.setItem("theme", "gold");
  }

  return (
    <div>
      <nav className="sidebar-nav">
          <a className="logo-expand" href="#">
            <img src="/assets/logo.svg" alt="1doc.uz Logo" />
            <h1>1doc.uz</h1>
          </a>

          <div className="right d-flex">
            <div className="theme" onMouseEnter={() => setThemeLinkHovered(true)} onMouseLeave={() => setThemeLinkHovered(false)}>
              <button className='theme-btn btn btn-outline-primary'>
                <span>Rangni o’zgartirish</span>
                
                <svg width="17" height="17" className="theme-icon" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6371 2.62381C14.5864 2.5706 14.5351 2.51787 14.483 2.46567C14.4773 2.45993 14.4709 2.45497 14.465 2.44941C12.8644 0.869682 10.7471 0 8.4959 0C6.22544 0 4.09093 0.884151 2.48555 2.48965C-0.828518 5.80378 -0.828518 11.1963 2.48555 14.5104C4.09099 16.1159 6.2255 17.0001 8.4959 17.0001C10.7663 17.0001 12.9009 16.1159 14.5063 14.5104C17.7761 11.2406 17.8195 5.94769 14.6371 2.62381ZM3.75379 3.75794C5.02046 2.49126 6.70458 1.79365 8.4959 1.79365C9.9728 1.79365 11.3765 2.26825 12.5338 3.14457L3.14006 12.5361C1.15873 9.91041 1.36297 6.14882 3.75379 3.75794Z" />
                </svg>
              </button>

              {
                themeLinkHovered && (
                  <div className="theme-dropdown">
                    <button 
                      className={`primary ${theme === "primary" ? "active" : ""}`} 
                      onClick={changeToPrimary}>
                      <img src="./assets/sidebar/theme-icon-primary.svg" alt="" />
                    </button>

                    <button 
                      className={`dark ${theme === "dark" ? "active" : ""}`} 
                      onClick={changeToDark}>
                      <img src="./assets/sidebar/theme-icon-dark.svg" alt="" />
                    </button>

                    <button 
                      className={`warning ${theme === "warning" ? "active" : ""}`}
                      onClick={changeToWarning}>
                      <img src="./assets/sidebar/theme-icon-warning.svg"  alt="" />
                    </button>

                    <button 
                      className={`red ${theme === "red" ? "active" : ""}`}
                      onClick={changeToRed}>
                      <img src="./assets/sidebar/theme-icon-red.svg" alt="" />
                    </button>

                    <button 
                      className={`purple ${theme === "purple" ? "active" : ""}`}
                      onClick={changeToPurple}>
                      <img src="./assets/sidebar/theme-icon-purple.svg" alt="" />
                    </button>

                    <button 
                      className={`gold ${theme === "gold" ? "active" : ""}`}
                      onClick={changeToGold}>
                      <img src="./assets/sidebar/theme-icon-gold.svg" alt="" />
                    </button>
                  </div>
                )
              }
            </div>
            

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
              <svg className="settings-icon" width="28" height="30" viewBox="0 0 28 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.1285 16.7111C24.6043 16.3189 24.2912 15.6889 24.2912 15.0251C24.2912 14.3613 24.6043 13.7313 25.1277 13.3398L27.5491 11.5285C27.935 11.239 28.0945 10.7297 27.9438 10.2655C27.3205 8.35441 26.3347 6.61136 25.013 5.08357C24.6948 4.71756 24.1817 4.60206 23.7428 4.79856L21.0164 6.02184C20.4224 6.28885 19.7307 6.2506 19.1669 5.91834C18.6038 5.58683 18.226 4.99582 18.1547 4.33655L17.8269 1.28247C17.7747 0.796452 17.4203 0.400441 16.9514 0.302188C15.0423 -0.0960726 13.0363 -0.102823 11.0935 0.294688C10.6215 0.391441 10.2665 0.787452 10.2143 1.27572L9.8894 4.3103C9.8181 4.97032 9.44026 5.56133 8.87572 5.89284C8.31264 6.22435 7.62313 6.2641 7.02698 5.99634L4.28585 4.76631C3.85068 4.56981 3.33612 4.68381 3.01783 5.04907C1.69173 6.57086 0.701572 8.31166 0.0716036 10.2212C-0.0812941 10.6847 0.0774842 11.197 0.464874 11.4872L2.87081 13.2873C3.39566 13.6803 3.70881 14.3103 3.70881 14.9741C3.70881 15.6379 3.39566 16.2679 2.87228 16.6594L0.450907 18.4707C0.0649877 18.7602 -0.0945256 19.2695 0.0561669 19.7337C0.679519 21.6448 1.66527 23.3878 2.98695 24.9156C3.30524 25.2824 3.8198 25.3986 4.25718 25.2006L6.98361 23.9773C7.57756 23.7103 8.26854 23.7486 8.83308 24.0808C9.39616 24.4123 9.77399 25.0034 9.8453 25.6626L10.1731 28.7167C10.2253 29.2027 10.5796 29.5987 11.0486 29.697C12.0145 29.898 13.0069 30 14 30C14.9688 30 15.9465 29.9002 16.9058 29.7037C17.3777 29.607 17.7328 29.211 17.785 28.7227L18.1106 25.6881C18.1819 25.0281 18.5597 24.4371 19.1243 24.1056C19.6874 23.7748 20.3776 23.7358 20.973 24.0021L23.7142 25.2321C24.1508 25.4294 24.6639 25.3154 24.9822 24.9494C26.3083 23.4276 27.2984 21.6868 27.9284 19.7772C28.0813 19.3137 27.9225 18.8014 27.5351 18.5112L25.1285 16.7111ZM14 20.2497C11.1582 20.2497 8.8544 17.8992 8.8544 14.9996C8.8544 12.1 11.1582 9.74945 14 9.74945C16.8418 9.74945 19.1456 12.1 19.1456 14.9996C19.1456 17.8992 16.8418 20.2497 14 20.2497Z" />
              </svg>
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

              <a 
                className={`sidebar-link locker ${activeLink === 'locker' ? 'is-active' : ''}`} 
                onClick={() => handleLinkClick('locker')}
                onMouseEnter={() => handleLinkHover('locker')}
                onMouseLeave={() => handleLinkHover("")}
              >
                <img src={`${activeLink === 'locker' || hoveredLink === 'locker' ? 'assets/sidebar/locker-light.svg' : 'assets/sidebar/locker.svg'}`} width={30} height={30}  alt="" />
                Locker
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
            activeLink === 'locker' ? <Locker /> :
            null
          }
        </div>
      </div>
    </div>
    
  );
};

export default Sidebar;
