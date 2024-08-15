
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ToastContainer, toast } from 'react-toastify';


const NotFound = observer(() => {

  return (
    <>
        <Container fluid>
            <Row>
                <Col>
                404
                </Col>
            </Row>
        </Container>
      <ToastContainer />

    </>
  );
});

export default NotFound;
