import { Container, Row, Col, Tabs, Tab, Button, Table } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { USER_DASHBOARD_CONTRACT_ADD_ROUTE } from '../../../utils/consts';
import { Helmet } from 'react-helmet-async';
import UserDashboardNavbar from '../components/Navbar';
import UserDashboardSideBar from '../components/SideBar';
import UserDashboardFooter from '../components/Footer';
import { getDatasContractById } from '../../../function/http/ContractAPI';
import { Context } from '../../../main';

const UserMailView = observer(() => {
  const { user } = useContext(Context);
  const [key, setKey] = useState('pay');
  const [contracts, setContracts] = useState([]);
  console.log(user._user.id)
  console.log(contracts)

  useEffect(() => {
    getDatasContractById(user._user.id).then(data => {
      setContracts(data);
    });
}, []);

  return (
    <>
    <Helmet>
      <title>{t("User:Locker:Title")}</title>
    </Helmet>
      <UserDashboardNavbar/>
      <Container fluid>
        <Row>
          <UserDashboardSideBar/>
          <Col xxl={11} xl={11} lg={11} md={11} sm={11} className="main-content">
            <div className='d-flex my-2'>
              <NavLink to={USER_DASHBOARD_CONTRACT_ADD_ROUTE}>
                <Button>Shartnoma yaratish</Button>
              </NavLink>
              <div className='ms-auto'>
                Qidiruv
              </div>
            </div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="pay" title="Jami">

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        contracts.map((contract, index)=>
                            <tr key={contract._id}>
                                <td>{index + 1}</td>
                                <td>{contract.title}</td>
                                <td>{contract.status}</td>
              
                                {/* <td><Button variant='danger' onClick={() => deleteDatas(group.id)}>{t('Admin:Message:Delete')}</Button></td> */}
                            </tr>
                        )
                    }
                  </tbody>
                </Table>

              </Tab>
              <Tab eventKey="history" title="Jarayonda">
                
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <UserDashboardFooter/>
    </>
  );
});

export default UserMailView;