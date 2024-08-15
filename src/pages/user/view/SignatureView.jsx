import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';

import { getDatasContractById } from '../../../function/http/ContractAPI';
import { Context } from '../../../main';
import { useTranslation } from 'react-i18next';

import { RiFileExcel2Line } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';

const UserSignatureView = observer(() => {
  const { user } = useContext(Context);
  const [key, setKey] = useState('pay');
  const [contracts, setContracts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getDatasContractById(user._user.id).then(data => {
      setContracts(data);
    });
}, []);

  return (
    <>
    <Helmet>
      <title>{t("User:Signature:Title")}</title>
    </Helmet>
    <div className="imzo-page">
      <div className="row align-items-center top-bar">
          <div className="col-auto upload-btn-wrapper">
            <button className="btn btn-outline-primary">
              <span>{t("User:FileUpload")}</span>
            </button>
          </div>

          <div className="col signature-count-wrapper">
            <span  className="title">{t("User:Signature:Count_wrapper")}</span>
            <div className="signature-count-group" role="group">
              <button type="button" className="signature-count">
                <span>{t("User:Signature:Title")}</span>
              </button>
              
              <button type="button" className="signature-count">
                <span>{t("User:Signature:Title")}</span>
              </button>

              <button type="button" className="signature-count">
                <span>{t("User:Signature:Title")}</span>
              </button>
              
              <button type="button" className="signature-count">
                <span>{t("User:Signature:Title")}</span>
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
          <RiFileExcel2Line />
          Excel faylni yuklab olish
      </button>

    </div>
    </>
  );
});

export default UserSignatureView;