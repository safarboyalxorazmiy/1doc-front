import { Col, Nav } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { RxGear } from "react-icons/rx";
import { MdPayment } from "react-icons/md";
import { FaFileContract } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { USER_DASHBOARD_ACCOUNT_ROUTE, USER_DASHBOARD_CONTRACT_ROUTE, USER_DASHBOARD_OCR_ROUTE, USER_DASHBOARD_PAY_ROUTE, USER_DASHBOARD_ROUTE } from '../../../utils/consts';

import { FaRegEye } from "react-icons/fa";

const UserDashboardSideBar = observer(() => {

  return (
    <>
      <Col xxl={1} xl={1} lg={1} md={1} sm={1} className="sidebar">
        <Nav className="flex-column">
          <NavLink to={USER_DASHBOARD_ROUTE}>
            <MdOutlineDashboard />
            <span>Bosh oyna</span>
          </NavLink>
          <NavLink to={USER_DASHBOARD_CONTRACT_ROUTE}>
            <FaFileContract />
            <span>Shartnomalar</span>
          </NavLink>
          <NavLink to={USER_DASHBOARD_PAY_ROUTE}>
            <MdPayment />
            <span>Tolovlar</span>
          </NavLink>
          <NavLink to={USER_DASHBOARD_ACCOUNT_ROUTE}>
            <RxGear />
            <span>Sozlarmalar</span>
          </NavLink>
          <NavLink to={USER_DASHBOARD_OCR_ROUTE}>
            <FaRegEye />
            <span>OCR</span>
          </NavLink>
        </Nav>
      </Col>
    </>
  );
});

export default UserDashboardSideBar;
