import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";

import UserContractView from "./view/ContractView";
import UserApplicationView from "./view/ApplicationView";
import UserAppealView from "./view/AppealView";
import UserDocumentView from "./view/DocumentView";
import UserOcrView from "./view/OCR";
import UserLockerView from "./view/LockerView";
import UserSmsView from "./view/SmsView";
import UserSignatureView from "./view/SignatureView";
import UserMailView from "./view/MailView";

import Logo_Light from "../../assets/img/logo_light.webp";

import Contract_icon from "../../assets/img/sidebar/contract.svg";
import Application_icon from "../../assets/img/sidebar/application.svg";
import Appeal_icon from "../../assets/img/sidebar/appeal.svg";
import Document_icon from "../../assets/img/sidebar/document.svg";
import Signature_icon from "../../assets/img/sidebar/signature.svg";
import Sms_icon from "../../assets/img/sidebar/sms.svg";
import Mail_icon from "../../assets/img/sidebar/gmail.svg";
import OCR_icon from "../../assets/img/sidebar/ocr.svg";
import Locker_icon from "../../assets/img/sidebar/locker.svg";
import AI_icon from "../../assets/img/sidebar/ai.svg";

import Contract_icon_light from "../../assets/img/sidebar/contract-light.svg";
import Application_icon_light from "../../assets/img/sidebar/application-light.svg";
import Appeal_icon_light from "../../assets/img/sidebar/appeal-light.svg";
import Document_icon_light from "../../assets/img/sidebar/document-light.svg";
import Signature_icon_light from "../../assets/img/sidebar/signature-light.svg";
import Sms_icon_light from "../../assets/img/sidebar/sms-light.svg";
import Mail_icon_light from "../../assets/img/sidebar/gmail-light.svg";
import OCR_icon_light from "../../assets/img/sidebar/ocr-light.svg";
import Locker_icon_light from "../../assets/img/sidebar/locker-light.svg";

import { HOME_ROUTE } from "../../utils/consts";
import UserAccountView from "./view/AccountView";

import "../../assets/css/_sidebar.scss";

const UserDashboard = observer(() => {
  const { user } = useContext(Context);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("Contract");
  const [hoveredLink, setHoveredLink] = useState("Contract");
  const [themeLinkHovered, setThemeLinkHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "primary",
  );
  const [settingsLinkClicked, setSettingsLinkClicked] = useState(false);

  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("Language") === null ||
      localStorage.getItem("Language") === undefined ||
      localStorage.getItem("Language") === ""
    ) {
      localStorage.setItem("Language", "uz");
    } else {
      i18n.changeLanguage(localStorage.getItem("Language"));
    }

    if (window.location.pathname == "/user") {
      if (localStorage.getItem("pathname")) {
        setActiveLink(localStorage.getItem("pathname"));
      } else {
        setActiveLink("Contract");
        localStorage.setItem("pathname", "Contract");
      }      

      applyTheme(theme);
    }
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("Language", language);
  };

  const logOut = () => {
    localStorage.clear();
    user.setUser({});
    user.setIsAuth(true);
    navigate(HOME_ROUTE);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("pathname", link);
  };

  const handleLinkHover = (link) => {
    setHoveredLink(link);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const themes = {
    primary: {
      "--primary-color": "#0077B6",
      "--primary-color-hover": "#003f61",
    },
    dark: {
      "--primary-color": "#212529",
      "--primary-color-hover": "#212529",
    },
    warning: {
      "--primary-color": "#6C6D1A",
      "--primary-color-hover": "#6C6D1A",
    },
    red: {
      "--primary-color": "#FF5850",
      "--primary-color-hover": "#FF5850",
    },
    purple: {
      "--primary-color": "#A020F0",
      "--primary-color-hover": "#A020F0",
    },
    gold: {
      "--primary-color": "#FDD017",
      "--primary-color-hover": "#FDD017",
    },
  };

  const applyTheme = (themeName) => {
    const selectedTheme = themes[themeName];
    Object.keys(selectedTheme).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        selectedTheme[property],
      );
    });

    localStorage.setItem("theme", themeName);
  };

  const changeTheme = (themeName) => {
    setTheme(themeName);
    setThemeLinkHovered(false); // Assuming setThemeLinkHovered is defined elsewhere
  };

  const toggleMenu = () => {
    setIsNavbarOpened(!isNavbarOpened);
  };

  const languages = [
    { code: "uz", label: "O'zbek" },
    { code: "ru", label: "Русский" },
    { code: "kr", label: "Ўзбек" },
    { code: "qr", label: "Qaraqalpaq" },
    { code: "qrkr", label: "Қарақалпақ" },
  ];

  return (
    <>
      <div>
        <nav className="sidebar-nav">
          <a className="logo-expand" href="#">
            <img src={Logo_Light} alt="1doc.uz Logo" />
            <h1>1doc.uz</h1>
          </a>

          <div
            className="menu-expand"
            onClick={() => {
              toggleMenu();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
            </svg>
          </div>

          <div className="right d-flex">
            <div
              className="theme"
              onMouseEnter={() => setThemeLinkHovered(true)}
              onMouseLeave={() => setThemeLinkHovered(false)}
            >
              <button className="theme-btn btn btn-outline-primary">
                <span>{t("User:Theme_change")}</span>

                <svg
                  width="17"
                  height="17"
                  className="theme-icon"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.6371 2.62381C14.5864 2.5706 14.5351 2.51787 14.483 2.46567C14.4773 2.45993 14.4709 2.45497 14.465 2.44941C12.8644 0.869682 10.7471 0 8.4959 0C6.22544 0 4.09093 0.884151 2.48555 2.48965C-0.828518 5.80378 -0.828518 11.1963 2.48555 14.5104C4.09099 16.1159 6.2255 17.0001 8.4959 17.0001C10.7663 17.0001 12.9009 16.1159 14.5063 14.5104C17.7761 11.2406 17.8195 5.94769 14.6371 2.62381ZM3.75379 3.75794C5.02046 2.49126 6.70458 1.79365 8.4959 1.79365C9.9728 1.79365 11.3765 2.26825 12.5338 3.14457L3.14006 12.5361C1.15873 9.91041 1.36297 6.14882 3.75379 3.75794Z" />
                </svg>
              </button>

              {themeLinkHovered && (
                <div className="theme-dropdown">
                  {Object.keys(themes).map((themeName) => (
                    <button
                      key={themeName}
                      className={theme === themeName ? "active" : ""}
                      onClick={() => changeTheme(themeName)}
                    >
                      <img
                        src={`./assets/sidebar/theme-icon-${themeName}.svg`}
                        alt={`${themeName} theme`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a className="tel">
              +998 {user.user.phone}
            </a>

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

            <a
              className="settings"
              onMouseEnter={() => {
                setSettingsLinkClicked(true);
              }}
              onMouseLeave={() => {
                setSettingsLinkClicked(false);
              }}
            >
              <svg
                className="settings-icon"
                width="28"
                height="30"
                viewBox="0 0 28 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25.1285 16.7111C24.6043 16.3189 24.2912 15.6889 24.2912 15.0251C24.2912 14.3613 24.6043 13.7313 25.1277 13.3398L27.5491 11.5285C27.935 11.239 28.0945 10.7297 27.9438 10.2655C27.3205 8.35441 26.3347 6.61136 25.013 5.08357C24.6948 4.71756 24.1817 4.60206 23.7428 4.79856L21.0164 6.02184C20.4224 6.28885 19.7307 6.2506 19.1669 5.91834C18.6038 5.58683 18.226 4.99582 18.1547 4.33655L17.8269 1.28247C17.7747 0.796452 17.4203 0.400441 16.9514 0.302188C15.0423 -0.0960726 13.0363 -0.102823 11.0935 0.294688C10.6215 0.391441 10.2665 0.787452 10.2143 1.27572L9.8894 4.3103C9.8181 4.97032 9.44026 5.56133 8.87572 5.89284C8.31264 6.22435 7.62313 6.2641 7.02698 5.99634L4.28585 4.76631C3.85068 4.56981 3.33612 4.68381 3.01783 5.04907C1.69173 6.57086 0.701572 8.31166 0.0716036 10.2212C-0.0812941 10.6847 0.0774842 11.197 0.464874 11.4872L2.87081 13.2873C3.39566 13.6803 3.70881 14.3103 3.70881 14.9741C3.70881 15.6379 3.39566 16.2679 2.87228 16.6594L0.450907 18.4707C0.0649877 18.7602 -0.0945256 19.2695 0.0561669 19.7337C0.679519 21.6448 1.66527 23.3878 2.98695 24.9156C3.30524 25.2824 3.8198 25.3986 4.25718 25.2006L6.98361 23.9773C7.57756 23.7103 8.26854 23.7486 8.83308 24.0808C9.39616 24.4123 9.77399 25.0034 9.8453 25.6626L10.1731 28.7167C10.2253 29.2027 10.5796 29.5987 11.0486 29.697C12.0145 29.898 13.0069 30 14 30C14.9688 30 15.9465 29.9002 16.9058 29.7037C17.3777 29.607 17.7328 29.211 17.785 28.7227L18.1106 25.6881C18.1819 25.0281 18.5597 24.4371 19.1243 24.1056C19.6874 23.7748 20.3776 23.7358 20.973 24.0021L23.7142 25.2321C24.1508 25.4294 24.6639 25.3154 24.9822 24.9494C26.3083 23.4276 27.2984 21.6868 27.9284 19.7772C28.0813 19.3137 27.9225 18.8014 27.5351 18.5112L25.1285 16.7111ZM14 20.2497C11.1582 20.2497 8.8544 17.8992 8.8544 14.9996C8.8544 12.1 11.1582 9.74945 14 9.74945C16.8418 9.74945 19.1456 12.1 19.1456 14.9996C19.1456 17.8992 16.8418 20.2497 14 20.2497Z" />
              </svg>

              {settingsLinkClicked && (
                <div className="settings-dropdown">
                  <ul>
                    <li onClick={() => handleLinkClick("Account")}>
                      {t("User:Update_content")}
                    </li>
                    <li onClick={() => logOut()}>{t("User:Exit")}</li>
                  </ul>
                </div>
              )}
            </a>
          </div>
        </nav>

        <div className={`container`} id="sidebar">
          <div className={`sidebar ${isNavbarOpened ? `opened` : ``}`}>
            <div className="account-info">
              <div className="account-name">
                {user.user?.role === "User" ? 
                  user.user.name
                :
                  user.user?.companyName === "" ?
                    "Korxona ma'lumotlari kiritilmagan"
                  :
                    user.user?.companyName
                }
              </div>
              <div className="account-img">
                {/* <img src="assets/sidebar/account.svg" alt="account" /> */}
              </div>
            </div>
            <div className="balance-wrapper">
              <div className="balance-info">
                <span className="balance-title">{t("User:Balance")}</span>

                <div className="balance-value">
                  {user.user.money}
                  <span className="balance-currency"> uzs</span>
                </div>
              </div>

              <button className="btn btn-primary">
                {t("User:Pay_button")}

                <img src="assets/wallet.svg" alt="" />
              </button>
            </div>

            <div className="side-wrapper">
              <div className="side-title">MENU</div>
              <div className="side-menu">
                <a
                  className={`sidebar-link shartnomalar ${activeLink === "Contract" ? "is-active" : ""}`}
                  onClick={() => handleLinkClick("Contract")}
                  onMouseEnter={() => handleLinkHover("Contract")}
                  onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Contract" || hoveredLink === "Contract" ? Contract_icon_light : Contract_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:Contract:Title")}
                </a>
                <a
                  className={`sidebar-link arizalar ${activeLink === "Application" ? "is-active" : ""}`}
                  onClick={() => handleLinkClick("Application")}
                  onMouseEnter={() => handleLinkHover("Application")}
                  onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Application" || hoveredLink === "Application" ? Application_icon_light : Application_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:Application:Title")}
                </a>
                <a
                  className={`sidebar-link murojaatlar ${activeLink === "Appeal" ? "is-active" : ""}`}
                  onClick={() => handleLinkClick("Appeal")}
                  onMouseEnter={() => handleLinkHover("Appeal")}
                  onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Appeal" || hoveredLink === "Appeal" ? Appeal_icon_light : Appeal_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:Appeal:Title")}
                </a>
                <a
                  className={`sidebar-link hujjatlar ${activeLink === "Document" ? "is-active" : ""}`}
                  onClick={() => handleLinkClick("Document")}
                  onMouseEnter={() => handleLinkHover("Document")}
                  onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Document" || hoveredLink === "Document" ? Document_icon_light : Document_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:Document:Title")}
                </a>
                <a
                  className={`sidebar-link imzoga ${activeLink === "Signature" ? "is-active" : ""}`}
                  onClick={() => handleLinkClick("Signature")}
                  onMouseEnter={() => handleLinkHover("Signature")}
                  onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Signature" || hoveredLink === "Signature" ? Signature_icon_light : Signature_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:Signature:Title")}
                </a>
                <a
                  className={`sidebar-link sms ${activeLink === "Sms" ? "is-active" : ""}`}
                  onClick={() => handleLinkClick("Sms")}
                  onMouseEnter={() => handleLinkHover("Sms")}
                  onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Sms" || hoveredLink === "Sms" ? Sms_icon_light : Sms_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:Sms:Title")}
                </a>
              </div>
            </div>

            <div className="side-wrapper">
              <div className="side-title">CATEGORY</div>
              <div className="side-menu">
                <a
                  className={`sidebar-link pochta ${activeLink === "Mail" ? "is-active" : ""}`}
                  // onClick={() => handleLinkClick('Mail')}
                  // onMouseEnter={() => handleLinkHover('Mail')}
                  // onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Mail" || hoveredLink === "Mail" ? Mail_icon_light : Mail_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:Mail:Title")}
                </a>

                <a
                  className={`sidebar-link pochta ${activeLink === "AI" ? "is-active" : ""}`}
                  // onClick={() => handleLinkClick('Mail')}
                  // onMouseEnter={() => handleLinkHover('Mail')}
                  // onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "AI" || hoveredLink === "AI" ? AI_icon : AI_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:AI:Title")}
                </a>

                <a
                  className={`sidebar-link ocr ${activeLink === "Ocr" ? "is-active" : ""}`}
                  onClick={() => handleLinkClick("Ocr")}
                  onMouseEnter={() => handleLinkHover("Ocr")}
                  onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Ocr" || hoveredLink === "Ocr" ? OCR_icon_light : OCR_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:OCR:Title")}
                </a>

                <a
                  className={`sidebar-link locker ${activeLink === "Locker" ? "is-active" : ""}`}
                  onClick={() => handleLinkClick("Locker")}
                  onMouseEnter={() => handleLinkHover("Locker")}
                  onMouseLeave={() => handleLinkHover("")}
                >
                  <img
                    src={`${activeLink === "Locker" || hoveredLink === "Locker" ? Locker_icon_light : Locker_icon}`}
                    width={30}
                    height={30}
                    alt=""
                  />
                  {t("User:Locker:Title")}
                </a>
              </div>
            </div>
          </div>

          <div className="wrapper">
            {activeLink === "Contract" ? (
              <UserContractView />
            ) : activeLink === "Application" ? (
              <UserApplicationView />
            ) : activeLink === "Appeal" ? (
              <UserAppealView />
            ) : activeLink === "Document" ? (
              <UserDocumentView />
            ) : activeLink === "Signature" ? (
              <UserSignatureView />
            ) : activeLink === "Sms" ? (
              <UserSmsView />
            ) : activeLink === "Mail" ? (
              <UserMailView />
            ) : activeLink === "Ocr" ? (
              <UserOcrView />
            ) : activeLink === "Locker" ? (
              <UserLockerView />
            ) : activeLink === "Account" ? (
              <UserAccountView />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
});

export default UserDashboard;
