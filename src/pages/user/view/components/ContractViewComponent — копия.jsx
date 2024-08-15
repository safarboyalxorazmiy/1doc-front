import { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Context } from "../../../../main";
import { IoArrowBack } from "react-icons/io5";
import { fetchDataContractTemplate } from "../../../../function/http/ContractTemplateAPI";
import { getUser } from "../../../../function/http/UserApi";
import '../../../../index.css';

const UserContractViewComponent = observer(({ changeStateContract }) => {
  const { user } = useContext(Context);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});
  const [objects, setObjects] = useState({});
  const [subjects, setSubjects] = useState({});

  const [selectedContractTemplate, setSelectedContractTemplate] = useState("");
  const [contractContent, setContractContent] = useState("<p>Loading...</p>");
  const [contractFormContent, setContractFormContent] = useState("<p>Loading...</p>");
  const [contractTitle, setContractTitle] = useState("Loading...");

  const contracts = [
    { id: "uzb", Title: "O'qish" },
    { id: "uzb_cyrl", Title: "Ish" }
  ];

  useEffect(() => {
    getUser(user._user.id).then(data => {
      setUserInfo(data);
      setObjects({
        where: '',
        date: '',
        whois: `${data.name} ${data.surname}`,
        phone: data.phone
      });
    });
  }, [user._user.id]);

  useEffect(() => {
    if (selectedContractTemplate) {
      fetchDataContractTemplate()
        .then(data => {
          console.log(JSON.parse(data.subjects))
          setObjects(JSON.parse(data.subjects));
          const formattedContent = data.fields
            .replace('{subjects.name}', subjects.name)
            .replace('{subjects.address}', subjects.address)
            .replace('{subjects.number}', subjects.number);

          setContractFormContent(data.forms || "<p>No content available.</p>");
          setContractContent(formattedContent || "<p>No content available.</p>");
          setContractTitle(data.title || "No Title");
        })
        .catch(error => {
          console.error("Error fetching contract template:", error);
          setContractFormContent("<p>Error loading contract.</p>");
          setContractContent("<p>Error loading contract.</p>");
          setContractTitle("Error");
        });
    }
  }, [selectedContractTemplate]);

  return (
    <>
      <Helmet>
        <title>{t("User:Locker:Title")}</title>
      </Helmet>
      <Container fluid>
        <Row className="mt-2">
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} className="d-flex justify-content-center align-items-center"
            onClick={() => changeStateContract("view")}
          >
            <IoArrowBack style={{ fontSize: "24px" }} />
            {t("Orqaga qaytish")}
          </Col>
          <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
            <Form.Select value={selectedContractTemplate} onChange={() => setSelectedContractTemplate(event.target.value)}>
              <option value="">
                {t("Tilni tanglang")}
              </option>
              {contracts.map((contract) => (
                <option key={contract.id} value={contract.id}>
                  {contract.Title}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={6}></Col>
        </Row>
        <Row>
          <Col xxl={4} xl={4} lg={4} md={4} sm={4} dangerouslySetInnerHTML={{ __html: contractFormContent }}></Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={8} dangerouslySetInnerHTML={{ __html: contractContent }}></Col>
        </Row>
      </Container>
    </>
  );
});

export default UserContractViewComponent;
