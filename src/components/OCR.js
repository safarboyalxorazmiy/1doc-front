import { useTranslation } from 'react-i18next';

const OCR = () => {
	const { t, i18n } = useTranslation();

  return (
    <div className="ocr-page">
      <button className="upload-btn btn btn-outline-primary">{t("ocr-upload-btn-text")} (.jpg, .pdf)</button>      

      <button className="convert-btn btn btn-primary">{t("ocr-convert-btn-text")}</button>

      <div className="ocr-result"></div>

      <div className="btn-group">
        <button className="extract-btn btn btn-primary">{t("ocr-extract-btn-text")}</button>
        <button className="download-btn btn btn-primary">{t("ocr-download-btn-text")}</button>
      </div>
    </div>  
  );
};

export default OCR;