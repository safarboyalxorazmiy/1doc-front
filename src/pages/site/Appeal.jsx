import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import Logo_Light          from "../../assets/img/logo_light.webp";
import Login_img           from "../../assets/img/login.png";
import { Container, Col, Row } from 'react-bootstrap';
import { ADMIN_DASHBOARD_ROUTE, USER_DASHBOARD_ROUTE, HOME_ROUTE } from '../../utils/consts';
import { registration } from '../../function/http/UserApi';

const HomeAppeal = observer(() => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [whois, setWhoIs] = useState(false);

    const handleCheckboxChange = (e) => {
      setWhoIs(e.target.checked);
    };
  
    const click = async () => {
        try {
            let data;
            const formData = new FormData();

            formData.append('name', name);
            formData.append('surname', surname);
            formData.append('phone', phone);
            formData.append('password', password);
            formData.append('whois', whois ? 'Lawyer' : 'User');

            data = await registration(formData);
          
            navigate(USER_DASHBOARD_ROUTE);

        } catch (e) {
            toast.error(`ddd`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    
    useEffect(() => {
        const keyDownHandler = event => {
    
          if (event.key === 'Enter') {
            click();
          }

        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
        
    }, [name, surname, phone, password, repeatPassword, whois]);

    return (
        <Container>
            <Row>
                <Col>
                    Murojaat yuborish
                </Col>
            </Row>
        </Container>
    );
});

export default HomeAppeal;