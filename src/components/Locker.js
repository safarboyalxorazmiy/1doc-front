import { useTranslation } from 'react-i18next';

const Locker = () => {
	const { t, i18n } = useTranslation();

  return (
    <div className="locker-container locker-page">
      <h3 className="locker-title">{t("locker-title")}</h3>

      <button className="upload-btn btn btn-outline-primary">{t("locker-upload-btn-text")}</button>

      <div className="locker-form-container">
        <h4 className="locker-form-title">{t("locker-form-title")}</h4>
        <h5 className="locker-form-label">{t("locker-form-label")}</h5>
        
        <input className="locker-input" type="text" placeholder={t("locker-password-input-text")} />
        <input className="locker-input" type="text" placeholder={t("locker-password-input-text-2")} />

        <button className="locker-btn btn btn-primary">{t("locker-btn-text")}</button>

        <div className="locker-phone-container">
          <input className="locker-input" type="text" placeholder={t("locker-phone-title")} />
          <button className="send-btn btn btn-primary">{t("send-btn-text")}</button>
        </div>
      </div>
    </div>
  );
};

export default Locker;