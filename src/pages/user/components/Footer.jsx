import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ToastContainer, toast } from 'react-toastify';

const UserDashboardFooter = observer(() => {

  return (
    <>
        <footer className="bg-dark text-light">
            <Container>
                <Row>
                <Col className="text-center py-3">
                    <p>&copy;2023 - {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </Col>
                </Row>
            </Container>
        </footer>
    </>
  );
});

export default UserDashboardFooter;
