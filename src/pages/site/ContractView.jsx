import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from "react-toastify";
import SignatureCanvas from 'react-signature-canvas'
import { isMobile, isTablet, isDesktop, osName, osVersion, browserName, browserVersion, isChrome, isFirefox, isSafari, isOpera, isIE, isEdge, isYandex, isChromium,  isMobileSafari, sSamsungBrowser, getUA, isWindows, isMacOs, isLinux, mobileVendor, isAndroid, isWinPhone, isIOS, mobileModel } from 'react-device-detect';
import { publicIp } from 'public-ip';
import QRCode from 'qrcode'
import jsPDF from 'jspdf';

import { getDataCode, getDataContract, verifyDataCode, verifyDataSignature } from '../../function/http/ContractAPI';

const ContractView = observer(() => {
  const { id } = useParams();
  const [contractData, setContractData] = useState(null);
  const [code, setCode] = useState('');
  const [signature, setSignature] = useState('');


  const [CodeShow, setCodeShow] = useState(false);
  const [SignatureShow, setSignatureShow] = useState(false);

  const CodeModelClose = () => setCodeShow(false);
  const CodeModelShow = () => setCodeShow(true);

  const SignatureModelClose = () => setSignatureShow(false);
  const SignatureModelShow = () => setSignatureShow(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await getDataContract(id);
        setContractData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [id]);

  const contractObject = JSON.parse(contractData?.contractObject || '{}');
  const contractSubject = JSON.parse(contractData?.contractSubject || '{}');

  const getSmsCode = async () => {
    try {
      const formData = new FormData();
      formData.append('contractId', contractData._id);

      const response = await getDataCode(formData);
      if (response.data && response.data.code) {
        toast.success(`SMS code sent successfully to ${response.data.recipient}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Failed to send SMS code", {
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
    } catch (error) {
      toast.error('Failed to send SMS code. Please try again later.', {
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
  };

  const acceptCode = async () => {
    try {
      const formData = new FormData();

      const deviceInfo = await checkDevice();

      formData.append('contractId', contractData._id);
      formData.append('code', code);
      formData.append('device', JSON.stringify(deviceInfo));

      const response = await verifyDataCode(formData);
      if (response.data && response.data.success) {
        toast.success('Contract verification successful!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setContractData(response.data.updatedContractData);
      } else {
        toast.error('Failed to verify contract. Please check the code and try again.', {
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
    } catch (error) {
      toast.error('Failed to verify contract. Please try again later.', {
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
  };


  const SignatureClear = async () => {
    try {
      signature.clear()

    } catch (error) {
      toast.error('Failed to verify contract. Please try again later.', {
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
  };

  const acceptSignature = async () => {
    try {
      const formData = new FormData();

      const deviceInfo = await checkDevice();

      formData.append('contractId', contractData._id);
      formData.append('image', signature.getTrimmedCanvas().toDataURL('image/png'));
      formData.append('device', JSON.stringify(deviceInfo));

      const response = await verifyDataSignature(formData);

      if (response.data && response.data.success) {
        toast.success('Contract verification successful!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setContractData(response.data.updatedContractData);
      } else {
        toast.error('Failed to verify contract. Please check the code and try again.', {
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
    } catch (error) {
      toast.error('Failed to verify contract. Please try again later.', {
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
  };

  const checkDevice = async () => {
    try {
      const ip = await publicIp(); // Assuming publicIp.v4() returns a promise
      return {
        Device: isMobile ? 'Мобильное' : isTablet ? 'Планшет' : isDesktop ? 'Настольное ПК' : 'Другое',
        Platform: isWindows ? 'Windows' : isMacOs ? 'MacOS' : isLinux ? 'Linux' : isAndroid ? 'Linux' : isWinPhone ? 'Linux' : isIOS ? 'Linux' : 'Другое',
        OS: `${osName} ${osVersion}`,
        Browser: `${browserName} ${browserVersion}`,
        BrowserType: isChrome ? 'Chrome' : isFirefox ? 'Firefox' : isSafari ? 'Safari' : isOpera ? 'Opera' : isIE ? 'IE' : isEdge ? 'Edge' : isYandex ? 'Yandex' : isChromium ? 'Chromium' : isMobileSafari ? 'MobileSafari' : isSamsungBrowser ? 'SamsungBrowser' : 'Другое',
        MobileInfo: `${mobileVendor} ${mobileModel}`,
        Agent: getUA,
        IP: ip
      };
    } catch (error) {
      console.error('Error fetching device info:', error);
      throw error;
    }
  };

  const generatePDF = async () => {
    var doc = new jsPDF();

    var midPage = doc.internal.pageSize.getWidth()/2

    doc.setFontSize(25);
    doc.text("Pullik shartnoma", midPage , 10, null, null, "center")
    doc.setFontSize(20);
    doc.text("Shartnoma", midPage , 20, null, null, "center")
    doc.setFontSize(15);
    doc.text("Shartnoma raqami - 1", midPage , 30, null, null, "center")

    doc.setFontSize(12);
    doc.text(contractObject.where, 80 , 40, null, null, "center")
    doc.setFontSize(12);
    doc.text(contractObject.date, 150 , 40, null, null, "center")

    doc.setFontSize(12);
    var text = `Ustav asosida ish ko‘ruvchi ta'lim markazi direktori %F.I.Oijrochi%
      keyinchalik «Ijrochi» deb yuritiluvchi, bir tomonidan Ota-ona yoki ularning 
      o‘rnini bosuvchi shaxsning ${contractSubject.name} nomidan o‘quvchining 
      manfaatlarini ifoda etuvchi keyinchalik «Buyurtmachi» deb yuritiluvchi, ikkinchi 
      tomonidan, mazkur shartnomani quyidagilar to‘g‘risida tuzdilar:`;

// Вставка текста в документ
    doc.text(text, 10, 50);

    const canvas = await QRCode.toCanvas("http://localhost:5173/contractview/6682454d6bfaed086455c2c5", { width: 200 }); // Replace URL with actual data
    doc.addImage(canvas.toDataURL('image/png'), 'PNG', 15, 100, 50, 50);

    doc.addImage(contractData.image, 'PNG', 10, 10, 40, 40);
    doc.save('contract.pdf');
  }
  console.log(contractData)

  return (
    <>
      <Helmet>
        <title>Shartnoma</title>
        <meta name="description" content="This is my page description." />
      </Helmet>
      <Container fluid>
        <Row>
          <Col>

          <div className='BackgroundPage'>
                <div className='Page'>
                  <div>
                    <span className="d-flex justify-content-center align-items-center">
                      <b>Пуллик таълим хизматларини кўрсатиш бўйича</b>
                    </span>
                  </div>
                  <div>
                    <span className="d-flex justify-content-center align-items-center">
                      <b>ШАРТНОМА</b>
                    </span>
                  </div>
                  <div>&nbsp;</div>
                  <div>
                    <span className="d-flex justify-content-center align-items-center">Шартнома рақами-%СОН%</span>
                  </div>
                  <div>&nbsp;</div>
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{contractObject.where}</span>
                      <span>{contractObject.date}</span>
                    </div>
                  </div>
                  <div>&nbsp;</div>
                  <div>&emsp;&emsp;Устав асосида иш кўрувчи  таълим маркази директори  %Ф.И.Оижрочи% кейинчалик «Ижрочи» деб юритилувчи, бир томонидан Ота-она ёки уларнинг ўрнини босувчи шахснинг <b>{contractSubject.name}</b> номидан ўқувчининг манфаатларини ифода этувчи кейинчалик «Буюртмачи» деб юритилувчи, иккинчи томонидан, мазкур шартномани қуйидагилар тўғрисида туздилар:</div>
                  <div>
                    <span className="d-flex justify-content-center align-items-center">
                      <b>1. ШАРТНОМА ПРЕДМЕТИ</b>
                    </span>
                  </div>
                  <div>&emsp;&emsp;1.1. Ушбу шартнома мазмунига кўра “Ижрочи” <b>{contractObject.title}</b> бўйича&nbsp; пуллик таълим хизматларини кўрсатади, “Буюртмачи” кўрсатилган хизматлар учун учун шартнома асосида тўлов амалиётини амалга оширади, “Ўқувчи” таълим дастурлари асосида берилган материалларни ўзлаштириш мажбуриятини олади .</div>
                  <div>
                    <br/>
                  </div>
                  <div>&nbsp;</div>
                  <div>
                    <span className="d-flex justify-content-center align-items-center">
                      <b>2. “Ижрочи” НИНГ ҲУҚУҚ ВА МАЖБУРИЯТЛАРИ</b>
                    </span>
                  </div>
                  <div>2.1. <b>“Ижрочи” нинг ҳуқуқлари:</b>
                  </div>
                  <div>&emsp;&emsp;Ўқувчидан ўқув режаси ва дастурлари, мактаб ички тартиб-қоидаларига риоя этишини талаб қилиш;</div>
                  <div>&emsp;&emsp;Дарс жараёни вақтида ўқувчидан ўқув ва ижро интизомига қатъиян риоя этишини талаб қилиш;</div>
                  <div>&emsp;&emsp;Ўқувчидан ижтимоий фаоллик, ташаббускорлик, устоз ва мураббийларни ҳурмат қилишни, таълим маркази мулки, нуфузини ҳимоя қилишни талаб қилиш;</div>
                  <div>&emsp;&emsp;Буюртмачидан мазкур шартномада белгиланган тўловларни ўз вақтида тўлашни талаб қилиш, акс ҳолда ўқувчини қўшимча машғулотлардан (дарслардан) четлаштириш.&nbsp;</div>
                  <div>2.2. <b>“Ижрочи”&nbsp; мажбуриятлари:</b>
                  </div>
                  <div>&emsp;&emsp;- Таълим стандарти, ўқув режаси ва дастурларига мувофиқ мактабда ўқувчини ўқитишни ташкил этиш;</div>
                  <div>&emsp;&emsp;- Машғулотлар жараёнларига малакали ўқитувчиларни жалб этиш, илғор педагогик технологияларни, замонавий компьютер ва ахборот-коммуникация технологиялари ва воситаларини жорий этиш;</div>
                  <div>&emsp;&emsp;- Ўқувчида билим олиш салоҳиятини шакллантириш мақсадида ўқув режасига қўшимча равишда турли интерактив дарсларни ташкил этиш;</div>
                  <div>&emsp;&emsp;- Машғулотларда ўқувчига мактабнинг мавжуд ўқув-услубий, ахборот-ресурс ва моддий-техника базасига мувофиқ ўқиш учун барча зарур шарт-шароитларни яратиш;</div>
                  <div>&emsp;&emsp;Ушбу шартномага асосан ўқувчи пуллик хизматлар асосида қуйидагилар билан таъминланади:</div>
                  <div>&emsp;&emsp;<b>{contractSubject.hour}</b>&nbsp; соат хажмга&nbsp; мўлжалланган&nbsp; дастур&nbsp; (<b>{contractSubject.date}</b> да <b>{contractSubject.count}</b> та дарс , яъни хафтада <b>{contractSubject.weekly}</b> марта)
                  </div>
                  <div>
                    <b>
                      <span className="d-flex justify-content-center align-items-center">&emsp;&emsp;3. БУЮРТМАЧИНИНГ ҲУҚУҚ ВА МАЖБУРИЯТЛАРИ</span>
                    </b>
                  </div>
                  <div>
                    3.1.<b> Буюртмачининг ҳуқуқлари:</b>
                  </div>
                  <div>&emsp;&emsp;Шартнома доирасида кўрсатилаётган хизматлар ва хизмат кўрсатиш жараёнига алоқадор ташкилий масалалар бўйича маълумотлар олиш</div>
                  <div>
                    3.2.<b> Буюртмачининг мажбуриятлари:</b>
                  </div>
                  <div>&emsp;&emsp;Кўрсатилаётган жами қўшимча пуллик хизматлар бир календарь ойи учун белгиланган тўлов миқдорини мазкур шартнома талабларига мувофиқ “Ижрочи” га тўлиқ ҳажмда ва ўз вақтида тўлаш;</div>
                  <div>
                    <br/>
                  </div>
                </div>

                <div className='Page mt-2'>
                  <div>&emsp;&emsp;Мазкур шартнома талабларига сўзсиз амал қилиш мақсадида ва шартномада кўрсатилган таълим ва бошқа хизматлардан фойдаланиш учун ўқувчининг дарсларга мунтазам равишда қатнашиши назоратини таъминлаш;</div>
                  <div>&emsp;&emsp;Ўқувчи томонидан мактаб мулкига етказилган моддий зарарни қоплаш.</div>
                  <div>3.3 <b>“Ўқувчи”</b> мажбуриятлари; </div>
                  <div>&emsp;&emsp;- Шартноманинг 1.1 бандига кўра “Ижрочи” таълим дастурлари асосида хизмат кўрсатади, “Ўқувчи” таълим материалларини ўзлаштириш.</div>
                  <div>&emsp;&emsp;- “Ижрочи” томонидан белгиланган ва таништирилган ички тартиб қоидаларига тўлиқ амал қилиш.</div>
                  <div>&emsp;&emsp;- Марказда фаолият юритаётган педагоглар жамоаси, маъмурият ходимлари ва таълим марказининг бошқа ўқувчиларга нисбатан хурмат билан муносабатда бўлиш.</div>
                  <div>&emsp;&emsp;- “Ижрочи” томонидан ташкил этилган дарслар ва машғулотларда тўлиқ ва ўз вақтида иштирок этиш, машғулотларни ўтказиб юборишга тўғри келган холларда таълим маркази педагог ходимларини олдиндан огохлантириш.&nbsp;</div>
                  <div>&emsp;&emsp;- Машғулотларни ўтказиб юборишга тўғри келган холларда таълим материалларини мустақил ўзлаштириш</div>
                  <div>&emsp;&emsp;- Таълим маркази мулкига эхтиёткорона муносабатда бўлиш ва келтирилган зиённи Ўзбекистон Республикаси қонунчилигида белгиланган тартибда қоплаш.</div>
                  <div>&emsp;&emsp;- Сабабсиз ва кетма-кет 3 ва ундан ортиқ дарсларда иштирок этмаган ўқувчилар “Ижрочи” қарорига мувофиқ машғулотлардан четлатирилади, ва амалга оширилган тўлов “Буюртмачи” га қайтарилмайди</div>
                  <div>
                    <b>
                      <span className="d-flex justify-content-center align-items-center">4. МОЛИЯВИЙ ШАРТЛАР</span>
                    </b>
                  </div>
                  <div>&emsp;&emsp;4.1. Кўрсатилаётган жами қўшимча пуллик хизматлар бир календарь ойи учун <b>{contractSubject.pay}</b> сўм маблағ миқдорини ташкил этади.</div>
                  <div>&emsp;&emsp;4.2. Тўлов ҳар ойнинг Тўлов санаси санасидан кечикмаган ҳолда, буюртмачи томонидан 100 (юз) фоиз олдиндан амалга оширилади. Тўлов банклар орқали “Ижрочи”нинг тегишли ҳисобварақларига нақд пул ёки пул ўтказиш йўли билан амалга оширилади.</div>
                  <div>&emsp;&emsp;4.3. Ушбу шартнома бўйича тўлов тури буюртмачи томонидан танланади.</div>
                  <div>&emsp;&emsp;4.4. Ўқувчи машғулотларни сабабсиз қолдирган ҳолатларда буюртмачига хизматлар учун олдиндан ўтказилган тўловлар қайтарилмайди.</div>
                  <div>&emsp;&emsp;4.5. Ушбу шартноманинг 4.1 ва 4.2-бандларига мувофиқ қўшимча пуллик хизматлар учун тўлов буюртмачи томонидан ўз вақтида амалга оширилмаса, ушбу шартнома бекор қилиниб, ўқувчи қўшимча машғулотлардан (дарслардан) четлаштирилади.</div>
                  <div>&emsp;&emsp;4.6. Ўқувчининг касаллиги ёки бошқа асосли сабаб ва ҳолатларда, буюртмачининг ёзма аризасига биноан ушбу шартнома бекор қилинади ва хизматларни кўрсатилмаган қисми учун олдиндан тўланган тўлов қайтарилади.</div>
                  <div>
                    <br/>
                  </div>
                  <div>
                    <b>
                      <span className="d-flex justify-content-center align-items-center">5. ШАРТНОМАНИНГ АМАЛ ҚИЛИШ МУДДАТИ</span>
                    </b>
                  </div>
                  <div>&emsp;&emsp;5.1. Шартнома томонлар уни имзолаб, “Ижрочи” ҳисобрақамига буюртмачи томонидан қўшимча таълим ва бошқа пуллик хизматлар учун тўловлар амалга оширилгандан сўнг кучга киради ва тарафлар мажбуриятларни тўлиқ бажаргунга қадар амал қилади.</div>
                  <div>
                    <span className="d-flex justify-content-center align-items-center">
                      <b>6. ШАРТНОМАНИ БЕКОР ҚИЛИШ ҲОЛАТЛАРИ</b>
                    </span>
                  </div>
                  <div>&emsp;&emsp;6.1. Қуйидаги ҳолларда шартнома бекор қилинади:</div>
                  <div>&emsp;&emsp;&emsp;тарафларнинг келишувига мувофиқ;</div>
                  <div>&emsp;&emsp;&emsp;ўқувчи таълим марказида ўрнатилган тартибга мувофиқ “Ижрочи” буйруғига асосан &emsp;&emsp;&emsp;машғулотлардан (дарслардан) четлаштирилганда;</div>
                  <div>&emsp;&emsp;&emsp;томонлардан бири шартнома шартларини бажармаганда;</div>
                  <div>&emsp;&emsp;&emsp;узрли сабаблар билан буюртмачининг ёзма аризасига кўра;</div>
                  <div>&emsp;&emsp;&emsp;қонун ҳужжатларида кўрсатилган бошқа ҳолларда.</div>
                  <div>
                    <br/>
                  </div>
                </div>

                <div className='Page mt-2'>
                  <div>
                    <span className="d-flex justify-content-center align-items-center">
                      <b>7. БОШҚА ШАРТЛАР</b>
                    </span>
                  </div>
                  <div>&emsp;&emsp;7.1. Ушбу Шартномадан келиб чиқадиган низолар қонун ҳужжатларида белгиланган тартибда кўриб чиқилади. Агар низоларни тинч йўл билан ҳал этишнинг иложи бўлмаса, низо қонун ҳужжатларида белгиланган тартибда судда кўриб чиқилади.</div>
                  <div>&emsp;&emsp;7.2. Ушбу Шартномада ёзма равишда бажарилган ва икки томонлама имзоланган барча иловалар, қўшимчалар ва ўзгартиришлар шартноманинг ажралмас қисми бўлади ва юридик кучга эга деб ҳисобланади.&nbsp;</div>
                  <div>&emsp;&emsp;7.3. Шартнома тенг юридик кучга эга бўлган икки нусхада тузилади. Шартноманинг бир нусхаси “Ижрочида ”да, иккинчи нусхаси буюртмачида сақланади.</div>
                  <div>
                    <span className="d-flex justify-content-center align-items-center">
                      <b>8. ТОМОНЛАРНИНГ МАНЗИЛИ, БАНК РЕКВИЗИТЛАРИ ВА БОШҚА МАЪЛУМОТЛАРИ:</b>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div>«Ижрочи»</div>
                      {/* <div>{userInfo.name} {userInfo.surname}</div>
                      <div>{userInfo.phone}</div> */}
                      <div>(имзо) ____________________</div>
                    </div>

                    <div>
                      <div>
                        <span>«БУЮРТМАЧИ»</span>
                      </div>
                      <div>F.I.O: <b>{contractSubject.name}</b></div>
                      <div>Manzil: <b>{contractSubject.address}</b></div>
                      <div>+998 <b>{contractSubject.number}</b></div>
                      <div>
                        <br/>
                      </div>
                      <div>(имзо) ________________________</div>
                      <div>
                        <br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <h2>{contractData?.title}</h2>
            <p>Status: {contractData?.status}</p>
            <p>Create Date: {new Date(contractData?.createDate).toLocaleDateString()}</p>
            {/* Add more contract details as needed */}
          </Col>
          {
            contractData?.status === 'End' ? (
              <Col>
                <span>Imzolandi</span>
                <br />
                <span onClick={generatePDF}>Ko'chirib olish PDF</span>
              </Col>
            ) : (
              <Col>
                <Card>
                  <Card.Title>Contract Object Details</Card.Title>
                  <Card.Body>
                    <p>Where: {contractObject?.where}</p>
                    <p>Date: {contractObject?.date}</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Title>Contract Subject Details</Card.Title>
                  <Card.Body>
                    <p>Name: {contractSubject?.name}</p>
                    {contractData?.status === 'Create' ? (
                      <Button onClick={CodeModelShow}>
                        SMS orqali Tasdiqlash
                      </Button>
                    ) : contractData?.status === 'WaitSignature' ? (
                      <Button onClick={SignatureModelShow}>
                        Imzo orqali Tasdiqlash
                      </Button>
                    ) : (
                      'Kot boldiku'
                    )}
                  </Card.Body>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>

      <Modal
        className="py-4"
        show={SignatureShow}
        onHide={SignatureModelClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Shartnoma tasdiqlash Imzo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div
              style={{border: '2px solid red'}}
            >
              <SignatureCanvas
                penColor='black'
                canvasProps={{width: 470, height: 200}}
                ref={data => setSignature(data)}
              />
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <Button onClick={SignatureClear}>Tozlash</Button>
              <Button variant='success' onClick={acceptSignature}>Tasdiqlash</Button>
            </div>
          </div>

        </Modal.Body>
      </Modal>

      <Modal
        className="py-4"
        show={CodeShow}
        onHide={CodeModelClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Shartnoma tasdiqlash</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column">
            <span onClick={getSmsCode}>Tasdiqlash uchun kod olish</span>
            <InputGroup className="mb-3">
              <Form.Control
                minLength={4}
                maxLength={4}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Kodni kiriting"
              />
              <Button variant="success" onClick={acceptCode}>
                Tasdiqlash
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </>
  );
});

export default ContractView;
