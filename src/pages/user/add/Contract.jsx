import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import UserDashboardNavbar from '../components/Navbar';
import UserDashboardSideBar from '../components/SideBar';
import UserDashboardFooter from '../components/Footer';
import ContractOne from '../components/contracts/ContractOne';

const Contract = observer(() => {

  return (
    <>
      <UserDashboardNavbar/>
      <Container fluid>
        <Row className="contract-add-row">
          {/* <UserDashboardSideBar/> */}
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="main-content">
            <ContractOne/>
          </Col>
        </Row>
      </Container>
      <UserDashboardFooter/>
    </>
  );
});

export default Contract;