import { FaPlus, FaSearch, FaFileExcel } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Imzo = () => {
	const { t, i18n } = useTranslation();

  return (
    <div className="imzo-page">
      <div className="row align-items-center top-bar">
          <div className="col-auto upload-btn-wrapper">
            <button className="btn btn-outline-primary">
              <span>{t("upload-btn-text")}</span>
            </button>
          </div>

          <div className="col signature-count-wrapper">
            <span  className="title">{t("signature-count-wrapper-title")}</span>
            <div className="signature-count-group" role="group">
              <button type="button" className="signature-count">
                <span>{t("signature-count-title-1")}</span>
              </button>
              
              <button type="button" className="signature-count">
                <span>{t("signature-count-title-2")}</span>
              </button>

              <button type="button" className="signature-count">
                <span>{t("signature-count-title-3")}</span>
              </button>
              
              <button type="button" className="signature-count">
                <span>{t("signature-count-title-4")}</span>
              </button>
            </div>
          </div>
          
          <div className="col-auto signature-info-wrapper">
            <div className="input-group signature-info">
              <span className="title">{t("signature-info-title")}</span>
              <div className="info">
                <span>1</span>
                <input type="text" placeholder={t("signature-info-input-text-1")} />
                <input type="text" placeholder={t("signature-info-input-text-2")} />
                <input type="text" placeholder={t("signature-info-input-text-3")} />
              </div>
              <div className="info">
                <span>2</span>
                <input type="text" placeholder={t("signature-info-input-text-1")} />
                <input type="text" placeholder={t("signature-info-input-text-2")} />
                <input type="text" placeholder={t("signature-info-input-text-3")} />
              </div>

              <div className='btns'>
                <button>{t("signature-info-btn-1")}</button>
                <button>{t("signature-info-btn-2")}</button>
              </div>
            </div>
          </div>
      </div>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th scope="col" rowSpan="2">No</th>
            <th scope="col" rowSpan="2">Arizalar</th>
            <th scope="col" colSpan="3">Arizalar</th>
            <th scope="col" colSpan="2" rowSpan={2}>Yuborilgan tashkilot nomi korxona mijoz</th>
            <th scope="col" rowSpan="2">Holati</th>
          </tr>
          <tr>
            <th scope="col">sanasi</th>
            <th scope="col">muddati</th>
            <th scope="col">muddati</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tibbiy xizmatlarni ko’rsatish bo’yicha shartnoma</td>
            <td>30.06.2024</td>
            <td>1</td>
            <td>29.06.2024</td>
            <td>30.06.2024</td>
            <td>30.06.2024</td>
            <td>To’liq tasdiqlangan</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mehnat shartnomasi</td>
            <td>30.06.2024</td>
            <td>2</td>
            <td>29.06.2024</td>
            <td>30.06.2024</td>
            <td>30.06.2024</td>
            <td>To’liq tasdiqlangan</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tibbiy xizmatlarni ko’rsatish bo’yicha shartnoma</td>
            <td>30.06.2024</td>
            <td>3</td>
            <td>29.06.2024</td>
            <td>30.06.2024</td>
            <td>30.06.2024</td>
            <td>To’liq tasdiqlangan</td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button className="excel-button">
          <FaFileExcel />
          Excel faylni yuklab olish
      </button>

    </div>
    
  );
};

export default Imzo;
