import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import UserDashboardNavbar from '../components/Navbar';
import UserDashboardSideBar from '../components/SideBar';
import UserDashboardFooter from '../components/Footer';
import { useState } from 'react';

const PayView = observer(() => {
  const [key, setKey] = useState('pay');

  return (
    <>
      <UserDashboardNavbar/>
      <Container fluid>
        <Row>
          <UserDashboardSideBar/>
          <Col xxl={11} xl={11} lg={11} md={11} sm={11} className="main-content">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="my-3"
            >
              <Tab eventKey="pay" title="To'lov">
                Payme orqali tolov qil kot
              </Tab>
              <Tab eventKey="history" title="Tarix">
                
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <UserDashboardFooter/>
    </>
  );
});

export default PayView;