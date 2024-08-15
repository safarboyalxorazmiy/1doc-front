import { Container, Navbar, Nav, Dropdown, Button, NavDropdown } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../../../main";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IoExitOutline } from "react-icons/io5";

import { HOME_ROUTE, USER_DASHBOARD_ACCOUNT_ROUTE, USER_DASHBOARD_ROUTE } from "../../../utils/consts";


const UserDashboardNavbar = observer(() => {
  const { user } = useContext(Context);
  console.log(user)
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("Language") === null || localStorage.getItem("Language") === undefined || localStorage.getItem("Language") === "" ) {
      localStorage.setItem("Language", "uz");
    } else {
      i18n.changeLanguage(localStorage.getItem("Language"));
    }
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("Language", language);
  };

  const logOut = () => {
    localStorage.clear();
    user.setUser({});
    user.setIsAuth(false);
    navigate(HOME_ROUTE);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavLink to={USER_DASHBOARD_ROUTE}>
            <Navbar.Brand>
              OneDoc
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <NavDropdown title={user.user.name} id="basic-nav-dropdown">
                <NavLink to={USER_DASHBOARD_ACCOUNT_ROUTE} className="dropdown-item">
                  Sozlamalar
                </NavLink>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => logOut()}>
                  <IoExitOutline />
                  <span>Chiqish</span>
                </NavDropdown.Item>
              </NavDropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => changeLanguage("ru")}>
                    Русский
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage("kr")}>
                    Ўзбек
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage("qr")}>
                    Qaraqalpaq
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage("qrkr")}>
                    Қарақалпақ
                  </Dropdown.Item>
                </Dropdown.Menu>
                <Button>{user.user.money} som</Button>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
});

export default UserDashboardNavbar;
