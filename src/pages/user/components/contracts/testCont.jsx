import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { getUser } from '../../../../function/http/UserApi';
import { Context } from '../../../../main';
import '../../../../index.css'

const testCont = observer(() => {
  const { user } = useContext(Context);
  const [userInfo, setUserInfo] = useState({});
  const [objects, setObjects] = useState({
    where: '',
    date: ''
  });
  const [subjects, setSubjects] = useState({
    name: '',
    title: '',
    hour: '',
    date: '',
    count: '',
    weekly: '',
    pay: '',
    address: '',
    number: ''
  });

  useEffect(() => {
    getUser(user._user.id).then(data => {
      setUserInfo(data);
    });
  }, [user._user.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjects(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChangeObjects = (e) => {
    const { name, value } = e.target;
    setObjects(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container fluid>
      <Row className='mx-2'>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
          <div>
            <Card>
              <Card.Title>Ijrochini ma'lumotlari</Card.Title>
              <Card.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="where">
                        <Form.Label>Tuzilgan joy</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ohangaron shahar"
                          name="where"
                          value={objects.where}
                          onChange={handleChangeObjects}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Shartnoma sanasi</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={objects.date}
                          onChange={handleChangeObjects}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Card>
              <Card.Title>Buyurtchasini ma'lumotlari</Card.Title>
              <Card.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Ota-ona FIO</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Tojiboyeva Berigul Aliqulovna"
                          name="name"
                          value={subjects.name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Fan nomi</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingliz tili"
                          name="title"
                          value={subjects.title}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="hour">
                        <Form.Label>Oyiga necha soat</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="12"
                          name="hour"
                          value={subjects.hour}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Qaysi sana</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={subjects.date}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="count">
                        <Form.Label>Xaftalik</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="12"
                          name="count"
                          value={subjects.count}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="weekly">
                        <Form.Label>Xaftalik</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="12"
                          name="weekly"
                          value={subjects.weekly}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="pay">
                        <Form.Label>Oylik to'lov</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="400 000"
                          name="pay"
                          value={subjects.pay}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Manzil</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ohangaron shahar 4 daxa 3 xonodon"
                          name="address"
                          value={subjects.address}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="number">
                        <Form.Label>Telefon raqam</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="93 178 57 89"
                          name="number"
                          value={subjects.number}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={8} sm={8}>
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
                    <span>${objects.where}</span>
                    <span>${objects.date}</span>
                  </div>
                </div>
                <div>&nbsp;</div>
                <div>&emsp;&emsp;Устав асосида иш кўрувчи  таълим маркази директори  %Ф.И.Оижрочи% кейинчалик «Ижрочи» деб юритилувчи, бир томонидан Ота-она ёки уларнинг ўрнини босувчи шахснинг <b>{subjects.name}</b> номидан ўқувчининг манфаатларини ифода этувчи кейинчалик «Буюртмачи» деб юритилувчи, иккинчи томонидан, мазкур шартномани қуйидагилар тўғрисида туздилар:</div>
                <div>
                  <span className="d-flex justify-content-center align-items-center">
                    <b>1. ШАРТНОМА ПРЕДМЕТИ</b>
                  </span>
                </div>
                <div>&emsp;&emsp;1.1. Ушбу шартнома мазмунига кўра “Ижрочи” <b>${subjects.title}</b> бўйича&nbsp; пуллик таълим хизматларини кўрсатади, “Буюртмачи” кўрсатилган хизматлар учун учун шартнома асосида тўлов амалиётини амалга оширади, “Ўқувчи” таълим дастурлари асосида берилган материалларни ўзлаштириш мажбуриятини олади .</div>
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
                <div>&emsp;&emsp;<b>{subjects.hour}</b>&nbsp; соат хажмга&nbsp; мўлжалланган&nbsp; дастур&nbsp; (<b>{subjects.date}</b> да <b>{subjects.count}</b> та дарс , яъни хафтада <b>{subjects.weekly}</b> марта)
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
                <div>&emsp;&emsp;4.1. Кўрсатилаётган жами қўшимча пуллик хизматлар бир календарь ойи учун <b>{subjects.pay}</b> сўм маблағ миқдорини ташкил этади.</div>
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
                    <div>{userInfo.name} {userInfo.surname}</div>
                    <div>{userInfo.phone}</div>
                    <div>(имзо) ____________________</div>
                  </div>

                  <div>
                    <div>
                      <span>«БУЮРТМАЧИ»</span>
                    </div>
                    <div>F.I.O: <b>{subjects.name}</b></div>
                    <div>Manzil: <b>{subjects.address}</b></div>
                    <div>+998 <b>{subjects.number}</b></div>
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
            </div>`
        </Col>
      </Row>
    </Container>
  );
});

export default testCont;
