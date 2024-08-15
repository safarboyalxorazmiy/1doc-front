
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ToastContainer, toast } from 'react-toastify';

const AdminDashboard = observer(() => {

  return (
    <>
        <Container fluid>
            <Row>
                <Col>
                1
                </Col>
            </Row>
        </Container>
      <ToastContainer />

    </>
  );
});

export default AdminDashboard;
