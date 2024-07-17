const OCR = () => {
  return (
    <div className="ocr-page">
      <button className="upload-btn btn btn-outline-primary">Faylni yuklash (.jpg, .pdf)</button>      

      <button className="convert-btn btn btn-primary">Kanvertatsiya qilish</button>

      <div className="ocr-result"></div>

      <div className="btn-group">
        <button className="extract-btn btn btn-primary">Nusxa ko'chirish</button>
        <button className="download-btn btn btn-primary">Word shaklida yuklab olish</button>
      </div>
    </div>  
  );
};

export default OCR;