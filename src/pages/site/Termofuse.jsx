import { Container, Col, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import Logo_Light          from "../../assets/img/logo_light.webp";
import Login_img           from "../../assets/img/login.png";


const HomeTermofuse = observer(() => {
    const { t } = useTranslation();

    return (
        <Container>
            <Row>
                <Col>
                   1
                </Col>
            </Row>
        </Container>
    );
});

export default HomeTermofuse;