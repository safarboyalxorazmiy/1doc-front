import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { getUser, updateUser, updateUserCompany } from "../../../function/http/UserApi";
import { Context } from "../../../main";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const UserAccountView = observer(() => {
  const { user } = useContext(Context);
  const [userInfo, setUserInfo] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [passport, setPassport] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companySTIR, setCompanySTIR] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    getUser(user._user.id).then((data) => {
      setUserInfo(data);
    });
  }, []);

  const updateUserInfo = async () => {
    try {
      let data;

      const formData = new FormData();

      formData.append("id", user._user.id);
      formData.append("name", name == "" ? userInfo.name : name);
      formData.append("surname", surname == "" ? userInfo.surname : surname);
      formData.append(
        "birthday",
        birthday == "" ? userInfo.birthday : birthday,
      );
      formData.append(
        "passport",
        passport == "" ? userInfo.passport : passport,
      );

      data = await updateUser(formData);

      if (data == "success") {
        toast.success("e.response.data.message", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("e.response.data.message", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (e) {
      toast.error(e.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const updateCompanyInfo = async () => {
    try {
      let data;

      const formData = new FormData();

      formData.append("id", user._user.id);
      formData.append(
        "companyName",
        companyName == "" ? userInfo.companyName : companyName,
      );
      formData.append(
        "companySTIR",
        companySTIR == "" ? userInfo.companySTIR : companySTIR,
      );
      formData.append(
        "companyAddress",
        companyAddress == "" ? userInfo.companyAddress : companyAddress,
      );
      formData.append(
        "companyPhone",
        companyPhone == "" ? userInfo.companyPhone : companyPhone,
      );

      data = await updateUserCompany(formData);

      if (data == "success") {
        toast.success("e.response.data.message", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("e", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (e) {
      toast.error(e.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("User:Account:PageTitle")}</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col
            xxl={11}
            xl={11}
            lg={11}
            md={11}
            sm={11}
            className="main-content"
          >
            <Container fluid>
              <Row>
                <Col>
                  <Card>
                    <Card.Title>{t("User:Account:Subject:Title")}</Card.Title>
                    <Card.Body>
                      <Form>
                        {userInfo.name === "" ? (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              {t("User:Account:Subject:Name")}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Ismizni yozing"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </Form.Group>
                        ) : (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              {t("User:Account:Subject:Name")}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Ismizni yozing"
                              value={userInfo.name}
                              disabled
                            />
                          </Form.Group>
                        )}
                        {userInfo.surname === "" ? (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              {t("User:Account:Subject:Surname")}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Familiya yozing"
                              value={surname}
                              onChange={(e) => setSurname(e.target.value)}
                            />
                          </Form.Group>
                        ) : (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              {t("User:Account:Subject:Surname")}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Familiya yozing"
                              value={userInfo.surname}
                              disabled
                            />
                          </Form.Group>
                        )}
                        {userInfo.birthday === "" ? (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              {t("User:Account:Subject:Date")}
                            </Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Tug'ilgan kunizni tanglang"
                              value={birthday}
                              onChange={(e) => setBirthday(e.target.value)}
                            />
                          </Form.Group>
                        ) : (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              {t("User:Account:Subject:Date")}
                            </Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Tug'ilgan kunizni tanglang"
                              value={userInfo.birthday}
                              disabled
                            />
                          </Form.Group>
                        )}
                        {userInfo.passport === "" ? (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              {t("User:Account:Subject:Passport")}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Passport yozing"
                              value={passport}
                              onChange={(e) => setPassport(e.target.value)}
                            />
                          </Form.Group>
                        ) : (
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>
                              {t("User:Account:Subject:Passport")}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Passport yozing"
                              value={userInfo.passport}
                              disabled
                            />
                          </Form.Group>
                        )}

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            {t("User:Account:Subject:Phone")}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Telefon raqam"
                            value={userInfo.phone}
                            disabled
                          />
                        </Form.Group>
                      </Form>
                      <Button onClick={updateUserInfo}>
                        {t("User:Account:UpdateButton")}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {user._user.role == "Lawyer" ? (
                    <>
                      <Card>
                        <Card.Title>
                          {t("User:Account:Object:Title")}
                        </Card.Title>
                        <Card.Body>
                          <Form>
                            {userInfo.companyName === "" ? (
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>
                                  {t("User:Account:Object:CompanyName")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="AJ UzAvto"
                                  value={companyName}
                                  onChange={(e) =>
                                    setCompanyName(e.target.value)
                                  }
                                />
                              </Form.Group>
                            ) : (
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>
                                  {t("User:Account:Object:CompanyName")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="AJ UzAvto"
                                  value={userInfo.companyName}
                                  disabled
                                />
                              </Form.Group>
                            )}

                            {userInfo.companySTIR === "" ? (
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>
                                  {t("User:Account:Object:CompanySTIR")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="7789871"
                                  value={companySTIR}
                                  onChange={(e) =>
                                    setCompanySTIR(e.target.value)
                                  }
                                />
                              </Form.Group>
                            ) : (
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>
                                  {t("User:Account:Object:CompanySTIR")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="7789871"
                                  value={userInfo.companySTIR}
                                  disabled
                                />
                              </Form.Group>
                            )}

                            {userInfo.companyAddress === "" ? (
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>
                                  {t("User:Account:Object:CompanyAddress")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Andijon ehtirom 32"
                                  value={companyAddress}
                                  onChange={(e) =>
                                    setCompanyAddress(e.target.value)
                                  }
                                />
                              </Form.Group>
                            ) : (
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>
                                  {t("User:Account:Object:CompanyAddress")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Andijon ehtirom 32"
                                  value={userInfo.companyAddress}
                                  disabled
                                />
                              </Form.Group>
                            )}

                            {userInfo.companyPhone === "" ? (
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>
                                  {t("User:Account:Object:CompanyPhone")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="78 141-77-77"
                                  value={companyPhone}
                                  onChange={(e) =>
                                    setCompanyPhone(e.target.value)
                                  }
                                />
                              </Form.Group>
                            ) : (
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>
                                  {t("User:Account:Object:CompanyPhone")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="78 141-77-77"
                                  value={userInfo.companyPhone}
                                  disabled
                                />
                              </Form.Group>
                            )}
                          </Form>
                          <Button onClick={updateCompanyInfo}>
                            {t("User:Account:UpdateButton")}
                          </Button>
                        </Card.Body>
                      </Card>
                    </>
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
});

export default UserAccountView;
