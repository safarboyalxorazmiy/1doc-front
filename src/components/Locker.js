const Locker = () => {
  return (
    <div className="locker-container locker-page">
      <h3 className="locker-title">Hujjatlarni online bloklash</h3>

      <button className="upload-btn btn btn-outline-primary">Fayllarni bu yerga yuklang</button>

      <div className="locker-form-container">
        <h4 className="locker-form-title">Zaklad tog'risidagi kelishuv</h4>
        <h5 className="locker-form-label">Iltimos faylni bloklash uchun parolni kiriting</h5>
        
        <input className="locker-input" type="text" placeholder="Parolni kiriting" />
        <input className="locker-input" type="text" placeholder="Parolni qayta kiriting" />

        <button className="locker-btn btn btn-primary">Bloklash</button>

        <div className="locker-phone-container">
          <input className="locker-input" type="text" placeholder="Telefon raqam" />
          <button className="send-btn btn btn-primary">Yuborish</button>
        </div>
      </div>
    </div>
  );
};

export default Locker;