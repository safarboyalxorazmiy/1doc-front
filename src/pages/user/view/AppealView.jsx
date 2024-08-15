import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { RiFileExcel2Line } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import QRCode from 'qrcode';
import { getDatasContractById } from '../../../function/http/ContractAPI';
import { Context } from '../../../main';

const UserAppealView = observer(() => {
  const { user } = useContext(Context);
  const [contracts, setContracts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getDatasContractById(user._user.id).then(data => {
      setContracts(data);
    });
  }, []);

  const generateQRCode = async (text) => {
    try {
      const canvas = document.createElement('canvas');
      await QRCode.toCanvas(canvas, text, {
        width: 300,
        errorCorrectionLevel: 'H',
      });
      const pngUrl = canvas.toDataURL('image/png');

      // Download the QR code
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      console.log('QR code generated and saved.');
    } catch (err) {
      console.error('Failed to generate QR code:', err);
    }
  };
  console.log(user.user)
  return (
    <>
      <Helmet>
        <title>{t("User:Locker:Title")}</title>
      </Helmet>
      <div className="murojaatlar-page">
        <div className="top-bar">
          <div className="qrcode" onClick={() => generateQRCode(`http://1doc.uz/appeal/${user.user.id}`)}>
            <svg className="qrcode-icon" width="53" height="53" viewBox="0 0 621 621" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_350_23)">
                <path d="M77.625 232.875H232.875V77.625H77.625V232.875ZM103.5 103.5H207V207H103.5V103.5ZM129.375 129.375H181.125V181.125H129.375V129.375ZM388.125 232.875H543.375V77.625H388.125V232.875ZM414 103.5H517.5V207H414V103.5ZM439.875 129.375H491.625V181.125H439.875V129.375ZM77.625 543.375H232.875V388.125H77.625V543.375ZM103.5 414H207V517.5H103.5V414ZM129.375 439.875H181.125V491.625H129.375V439.875ZM517.5 491.625H543.375V543.375H491.625V465.75H517.5V491.625ZM517.5 414H543.375V439.875H517.5V414ZM517.5 388.125V414H491.625V388.125H517.5ZM258.75 439.875H284.625V543.375H258.75V439.875ZM155.25 258.75V310.5H103.5V284.625H77.625V258.75H155.25ZM258.75 181.125H284.625V207H258.75V181.125ZM336.375 103.5V155.25H310.5V77.625H362.25V103.5H336.375ZM258.75 103.5H284.625V129.375H258.75V103.5ZM517.5 310.5H543.375V362.25H491.625V336.375H517.5V310.5ZM491.625 258.75V284.625H439.875V336.375H388.125V310.5H414V258.75H491.625ZM310.5 362.25H284.625V336.375H258.75V310.5H310.5V362.25ZM465.75 414H491.625V439.875H465.75V414ZM517.5 284.625V310.5H491.625V284.625H517.5ZM284.625 362.25V388.125H258.75V362.25H284.625ZM439.875 491.625H465.75V543.375H414V491.625H439.875ZM362.25 491.625H388.125V517.5H362.25V543.375H310.5V517.5H336.375V491.625H362.25ZM362.25 465.75V439.875H414V465.75H362.25ZM362.25 336.375H388.125V414H362.25V439.875H336.375V465.75H310.5V414H284.625V388.125H362.25V362.25H336.375V336.375H362.25ZM129.375 336.375V362.25H103.5V336.375H129.375ZM439.875 439.875H414V414H439.875V439.875ZM465.75 388.125H414V362.25H465.75V388.125ZM207 258.75H232.875V284.625H207V310.5H232.875V362.25H207V336.375H181.125V362.25H155.25V310.5H181.125V258.75H207ZM284.625 258.75V207H362.25V284.625H310.5V258.75H336.375V232.875H310.5V258.75H284.625ZM284.625 155.25H310.5V181.125H284.625V155.25ZM258.75 258.75H284.625V284.625H258.75V258.75ZM336.375 181.125V155.25H362.25V181.125H336.375Z" />
              </g>
              <defs>
                <clipPath id="clip0_350_23">
                  <rect width="621" height="621" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>QR-CODE yaratish</span>
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

export default UserAppealView;
