import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form, Modal } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Context } from '../../main';

import { registration, signIn } from '../../function/http/UserApi';
import { ADMIN_DASHBOARD_ROUTE, USER_DASHBOARD_ROUTE, HOME_ROUTE } from '../../utils/consts';

import Logo_Light from "../../assets/img/logo_light.webp";
import Login_img from "../../assets/img/login.png";


const Auth = observer(() => {
    const { user } = useContext(Context);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [whois, setWhoIs] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const redirectToDashboard = () => {
            if (user) {
                if (user._user.role === 'Admin') {
                    navigate(ADMIN_DASHBOARD_ROUTE);
                } else if (['User', 'Lawyer'].includes(user._user.role)) {
                    navigate(USER_DASHBOARD_ROUTE);
                }
            } else {
                navigate(HOME_ROUTE);
            }
        };

        redirectToDashboard();
    }, [user, navigate]);

    const handleCheckboxChange = (e) => setWhoIs(e.target.checked);

    const register = async () => {

        try {
            if (password !== repeatPassword || password.length != 9 && repeatPassword.length != 9) {
                toast.error(t("General:Auth:Registration:RePasswordError"), {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
              });
              return;
            }

            const formData = new FormData();
            formData.append('name', name);
            formData.append('surname', surname);
            formData.append('phone', phone);
            formData.append('password', password);
            formData.append('whois', whois ? 'Lawyer' : 'User');

            let data = await registration(formData);

            if (data) {
              user.setUser(data);
              user.setIsAuth(true);
              navigate(USER_DASHBOARD_ROUTE);
            }

        } catch (e) {
            toast.error(t(e.response?.data?.message), {
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

    const login = async () => {
        if (!phone || !password) {
            toast.error(t("Please enter valid phone number and password"), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        try {
          const data = await signIn(phone, password);

          if (data) {
              user.setUser(data);
              user.setIsAuth(true);
  
              if (data.role === "Admin") {
                  navigate(ADMIN_DASHBOARD_ROUTE);
              } else if (['User', 'Lawyer'].includes(data.role)) {
                  navigate(USER_DASHBOARD_ROUTE);
              }
          }
        } catch (e) {
            toast.error(t(e.response?.data?.message), {
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
            if (event.key === 'Enter') {
                if (!show) {
                    register();
                } else {
                    login();
                }
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [name, surname, phone, password, whois, show]);

    return (
        <>
            <Helmet>
              <title>{t("General:Auth:Registration:PageTitle")}</title>
            </Helmet>
            <div>
                <header>
                    <nav>
                        <Link to={HOME_ROUTE} className="logo">
                            <img src={Logo_Light} alt="1doc.uz Logo" />
                            <h1>1doc.uz</h1>
                        </Link>
                    </nav>
                </header>

                <main>
                    <div className='main-img'>
                        <img src={Login_img} alt="Login" />
                    </div>

                    <form className="main-content" onSubmit={(e) => { e.preventDefault(); register(); }}>
                        <div className="form-group">
                            <label htmlFor="nameInput">Ism</label>
                            <input type="text" className="form-control" id="nameInput" placeholder="Asadbek" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="surnameInput">Familya</label>
                            <input type="text" className="form-control" id="surnameInput" placeholder="Aliyev" onChange={(e) => setSurname(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneInput">Telefon raqamingizni kiriting</label>
                            <input type="text" className="form-control" id="phoneInput" placeholder="+998 xx xxx xx xx" onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwordInput">Parolni kiriting</label>
                            <input type="password" className="form-control" id="passwordInput" placeholder="********" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repeatPasswordInput">Takrorlang</label>
                            <input type="password" className="form-control" id="repeatPasswordInput" placeholder="********" onChange={(e) => setRepeatPassword(e.target.value)} />
                        </div>

                        <div className="d-flex justify-content-center align-items-center form-group">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="whoisCheck"
                                    checked={whois}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="form-check-label" htmlFor="whoisCheck">Yuridik shaxsman</label>
                            </div>

                            <a className="forgot-pass" onClick={handleShow}>Akkauntim bor</a>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">RO’YXATDAN O’TISH</button>
                        </div>
                    </form>
                </main>

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
                            <Form.Group className="mb-3">
                                <Form.Label>{t("General:Auth:phone")}</Form.Label>
                                <Form.Control
                                    placeholder={t("General:Auth:phonePlaceholder")}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
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
                                    type="checkbox"
                                    label={t("General:Auth:remember")}
                                />
                                <span>{t("General:Auth:forget")}</span>
                            </div>
                            <div className="d-grid gap-1">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="mt-3 align-self-end"
                                    onClick={login}
                                >
                                    {t("General:Auth:button")}
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
                <ToastContainer />
            </div>
        </>
    );
});

export default Auth;
