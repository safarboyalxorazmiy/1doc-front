import React, { useState, useEffect } from 'react';
import '../style.css';
import Shartnomalar from './Shartnomalar';
import Arizalar from './Arizalar';
import Murojaatlar from './Murojaatlar';
import Hujjatlar from './Hujjatlar';
import Sms from './Sms';
import Pochta from './Pochta';
import OCR from './OCR';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('shartnomalar');
  const [hoveredLink, setHoveredLink] = useState('shartnomalar');

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

  return (
    <div className="container" id='sidebar'>
      <div className="sidebar">
        <div className="logo">
          
        </div>
        
        <a className="logo-expand" href="#">
          <img src="/assets/logo.svg" alt="1doc.uz Logo" />
          <h1>1doc.uz</h1>
        </a>

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
  );
};

export default Sidebar;
