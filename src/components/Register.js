import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const Register = () => {
  return (
    <div>
      <header>
					<nav>
						<a href="/" className="logo">
							<img src="/assets/logo.svg" alt="1doc.uz Logo" />
							<h1>1doc.uz</h1>
						</a>
					</nav>
				</header>

        <main>
          <div className='main-img'>
            <img src="/assets/login.png" />
          </div>
          
          <form className="main-content">
              <div className="form-group">
                <label htmlFor="nameInput">Ism</label>
                <input type="email" className="form-control" id="nameInput" placeholder="Asadbek" />
              </div>

              <div className="form-group">
                <label htmlFor="surnameInput">Familya</label>
                <input type="email" className="form-control" id="surnameInput" placeholder="Aliyev" />
              </div>

              <div className="form-group">
                <label htmlFor="phoneInput">Telefon raqamingizni kiriting</label>
                <input type="email" className="form-control" id="phoneInput" placeholder="+998 xx xxx xx xx" />
              </div>

              <div className="form-group">
                <label htmlFor="passwordInput">Parolni kiriting</label>
                <input type="password" className="form-control" id="passwordInput" placeholder="********" />
              </div>
              
              <div className="d-flex justify-content-center align-items-center form-group">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Eslab qolish</label>
                </div>

                <a href="#" className="forgot-pass">Parolni unutdingizmi?</a>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">RO’YXATDAN O’TISH</button>
              </div>

              <p className="reminder">Akkauntingiz bormi? <a href="/login">Kirish</a></p>
          </form>
        </main>
    </div>
  );
};

export default Register;