import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz_la: {
    translation: {
      "header-title": "Murakkab yuridik hujjatlarni oson yaratish va tezkor imzolash",
      "header-description": "YURISTLARSIZ! QONUNIY! ARZON!",
      "start-btn": "BEPUL BOSHLASH",
      "login-btn": "KIRISH",
      "prices-btn": "Tariflar",
      "shartnomalar": "shartnomalar",
      "arizalar": "arizalar",
      "korporativ-hujjatlar": "korporativ hujjatlar",
      "murojaatlar": "murojaatlar",
      "imzo": "imzo",
      "sms": "SMS Habarnoma",
      "ocr": "OCR REDACTOR",
      "shartnomalar-content-1": "Istalgan shartnomalarni mustaqil yarating.",
      "shartnomalar-content-2": "100 dan ziyod soha va yo'nalishlar bo'yicha yaratilgan shartnoma shablonlaridan foydalaning.",
      "shartnomalar-content-3": "Talab qilingan ma'lumotlarni kiriting.",
      "shartnomalar-content-4": "IMZO chekuvchilarni belgilang, shartnoma havolasini yuboring va qulay uslubda imzolang.",
      
      "arizalar-content-1": "Istalgan tashkilotlarga rasmiy arizalar yuboring.",
      "arizalar-content-2": "50 dan ziyod tashkilot, vazirlik va qo'mitalar talab va nizomlari asosida yaratilgan shablonlardan foydalaning.",
      "arizalar-content-3": "Talab qilingan ma'lumotlarni kiriting.",
      "arizalar-content-4": "Qulay elektron imzolash turlaridan birini tanlang va imzolang.",

      "korporativ-hujjatlar-content-1": "Korxonangiz faoliyatidagi ruxsatnoma, ishonchnoma, bayyonnoma, buyruqlar, dalolatnoma va barcha boshqa hujjatlarni elektron shakllantiring.",
      "korporativ-hujjatlar-content-2": "50 dan ziyod soha va yo'nalishlar bo'yicha yaratilgan hujjatlar shablonlaridan foydalaning.",
      "korporativ-hujjatlar-content-3": "Talab qilingan ma'lumotlarni kiriting.",
      "korporativ-hujjatlar-content-4": "Imzo chekuvchilarni belgilang, hujjat havolasini yuboring va qulay uslubda imzolang.",

      "murojaatlar-content-1": "Mijozlaringiz, xodim va hamkorlaringizdan murojaatlarni tezkor qabul qilib oling.",
      "murojaatlar-content-2": "Siz uchun individual taqdim etiladigan shablonlar asosida murojaatlarni qabul qiling va zudlik bilan javob bering.",
      "murojaatlar-content-3": " Javob berish bo'limi orqali hech qaysi murojaatlarni e'tibordan qoldirmang.",

      "imzo-content-1": "Biznesingiz uzluksiz ishlashi uchun barcha hujjatlarni tezkor imzolang.",
      "imzo-content-2": "Xizmat safarida bo'lsangiz ham, barcha muhim hujjatlar siz bilan.",
      "imzo-content-3": "Tayyor Word yoki PDF formatidagi hujjatni yuklang va imzo chekuvchini belgilang.",

      "sms-content-1": "Faoliyatingiz davomidagi yangiliklar, xabarlar va muhim ma'lumotlarni matn shaklda qisqa raqamlar orqali yuboring.",
      "sms-content-2": "Ogohlantirish xatlari va boshqa muhim yuridik hujjatlarni PDF shaklda qisqa raqamlar orqali yuboring.",

      "ocr-content-1": "OCR (optical character recognition) texnologiyasi yordamida suratlardagi yozuvlarni matn holatiga keltiring.",
      "ocr-content-2": "Matnlarni qiyinchiliksiz tahrirlang, ko‘chirib oling yoki Word formatida yuklab oling.",

      "info-content": "O‘ZBEKISTON RESPUBLIKASI OLIY SUDI TOMONIDAN QAYD ETILGAN MA’LUMOTLARGA KO‘RA 2023-YILDA O‘ZBEKISTON IQTISODIY SUDLARI TOMONIDAN 271 748 TA ISHLAR KO‘RIB CHIQILGAN HAMDA DA’VOGARLAR FOYDASIGA 23,5 TRLN SO‘M MIQDORDA MABLAG‘LAR UNDIRUVI BO‘YICHA QARORLAR CHIQARILGAN. DAVO ARIZALARINI SOHALAR VA MUAMMOLAR BO‘YICHA GURUHLARGA BO‘LINGANDA, SHARTNOMAVIY MUNOSABATLAR, XUSUSAN SHARTNOMA SHARTLARI ANIQ KO‘RSATILMAGANLIGI , KO‘P HOLATLARDA SHARTNOMALAR MUTLAQO MAVJUD EMASLIGI KO‘RSATILGAN.",

      "carousel-item-1__title": "MEHMONXONA VA HOTELLAR,  DALA HOVLI VA SANATORIYALAR",
      "carousel-item-2__title": "O'quv yurtlari kasb hunar va ta'lim markazlari.",
      "carousel-item-3__title": "Ta'mirlash tiklash va qurilish ishlari bilan shug'illanuvchi ustalan brigadasi yoki katta qurilish kompaniyalari.",
      "carousel-item-4__title": "Bo'lib to'lash va mukromoliya tashkilotlari, lambard va kredit byurolari.",
      
      "carousel-item-1__content-1": `Qisqa muddatga mehmonlarni joylashtirish va ko'chmas mulkni qisman yoki butunlay mo‘jiza ishonib topshirish bugungi kundagi eng xatarli bizneslardan biri bo'lib qolmoqda. “ZAKS” talabi bekor bo'lgandan keyin, xavf darajasi yanada ortadi.`,
      "carousel-item-1__content-2": "Shartnomangizni bir zumda tezkor, oson va qonuniy tasdiqlab mol-mulkingiz va shaxsiy reputatsiyangizni saqlab qoling.",
      
      "carousel-item-2__content-1": "Deyarli barcha ta’lim markazlariga o’quvchilarni o’z vasiylari(ota-onasi yaqin qarindoshi yoki buvi buvasi) olib keladi. Ta’lim markazlarida dastlabki 2 ta dars bepul bo’lganligi sababli shartnomalar ko’p holda voyaga yetmagan o’quvchilar tomonidan berib yuboriladi va shartnomaning huquqiy statusi boshqarilmaydi.",
      "carousel-item-2__content-2": "1doc.uz bilan siz shartnomani onlayn istalgan joydan istalgan adresatga(vasiyga) aniq va oson yetkazasiz.",

      "carousel-item-3__content-1": "Iqtisodiyot tarmoqlari orasida eng ko'p huquqiy nizolar ko'tariladigan sohalardan biri bu qurilishdir. Qurilish hamisha kechikadi, rejalar unutiladi, sifat holati saqlanmaydi, yoki aksincha mijoz tomonidan mahsulotlar ta'minoti o'z vaqtida yetib kelmaydi. Hattoki qilingan ishlar uchun pul ham ola olmay qolishingiz mumkin.",
      "carousel-item-3__content-2": "1doc.uz - sizga qurilish sohasi uchun kerakli barcha hujjatlar to'plami yoki, obyektingiz uchun maxsus shartnoma berishga tayyor.",

      "carousel-item-4__content-1": "Siz qimmatbaho buyumingizni mijozga bo'lib to'lashga ishonib topshirmoqdasiz. Mijozning tolov majburiyatini ifodalash, xavf-xatarni jilovlash uchun maksimal himoyalangan shartnomalar taqdim eting..",
      "carousel-item-4__content-2": "Qonuniy ravishda adresat bilan shartnomalar imzolang. Yetkazib berish xatlari va yo'l xatlarini yoqimli bonus sifatida qabul qilib oling.",

      "statistics-main-title": "ISTALGAN SHARTNOMANI QULAY YARATING VA QULAY TASDIQLANG",
      "statistics-title-1": "JAMI FOYDALANUVCHILAR",
      "statistics-title-2": "PLATFORMADA MAVJUD SHARTNOMA SHABLONLARI",
      "statistics-title-3": "PLATFORMADA MAVJUD ARIZA NAMUNALARI",

      "signing-types-title": "IMZOLASH USULLARI",
      "signing-types-content-1": "FAKSIMILE",
      "signing-types-content-2": "SMS",
      "signing-types-content-3": "TELEGRAM",
      "signing-types-content-4": "FACE ID",
      "signing-types-content-5": "E-IMZO",

      "componies-title": "BIZ BILAN BIRGA",

      "pricing-title": "O'Z TARIFINGIZNI TANLANG",

      
      "pricing-title": "O'Z TARIFINGIZNI TANLANG",
      "price-box-1__title": "YaTT 50",
      "price-box-1__content-1": "50 dona hujjatlar",
      "price-box-1__content-2": "50 dona sms-habarnoma",

      "price-box-2__title": "BIZNES 250",
      "price-box-2__content-1": "250 dona hujjatlar",
      "price-box-2__content-2": "250 dona sms-habarnoma",

      "price-box-3__title": "SENAT 500",
      "price-box-3__content-1": "500 dona hujjatlar",
      "price-box-3__content-2": "500 dona sms-habarnoma",

      "price-box-4__title": "President",
      "price-box-4__content-1": "1000 dona hujjatlar",
      "price-box-4__content-2": "1000 dona sms-xabarnoma",

      "price-box-btn-text": "Tanlash",

      "month": "oy",
      "banner-text": "Barcha hujjatlarga bir yechim!",

      "footer-title-1": "Biz haqimizda",
      "footer-title-2": "Qonuniylik asoslari",
      "footer-title-3": "Aloqa",

      "footer-link-1": "Ma'lumotlarning maxviylik siyosati",
      "footer-link-2": "Ommaviy oferta",
      "footer-link-3": "Rahbariyat",
      "footer-link-4": "Shartnomalar",
      "footer-link-5": "Arizalar",
      "footer-link-6": "“Elektron tijorat ” toʼgʼrisidagi “Oʼzbekiston Respublikasi Qonuni.",
      "footer-link-7": "Elektron imzo toʼgʼrisidagi” “Oʼzbekiston Respublikasi Qonuni.",
      "footer-link-8": "Tadbirkorlik subʼektlariga xalqaro platformalar orqali raqamli texnologiyalar uchun qulay shart-sharoitlar yaratish chora tadbirlari toʼgʼrisidagi ”gi qarori.",
      "footer-link-9": "“Jismoniy va yuridik shaxslarning murojaatlari to'g'risiga”gi Qonun",
    
    }
  },
  uz_kr: {
    translation: {
      "header-title": "Мураккаб юридик ҳужжатларни осон яратиш ва тезкор имзолаш",
      "header-description": "ЮРИСТЛАРСИЗ! ҚОНУНИЙ! АРЗОН!",
      "start-btn": "БЕПУЛ БОШЛАШ",
      "login-btn": "КИРИШ",
      "prices-btn": "Тарифлар",
      "shartnomalar": "шартномалар",
      "arizalar": "аризалар",
      "korporativ-hujjatlar": "корпоратив ҳужжатлар",
      "murojaatlar": "мурожаaтлар",
      "imzo": "имзо",
      "sms": "СМС Ҳабарнома",
      "ocr": "OCR REDACTOR",

      "shartnomalar-content-1": "Исталган шартномаларни мустақил яратинг.",
      "shartnomalar-content-2": "100 дан зиёд соҳа ва йўналишлар бўйича яратилган шартнома шаблонларидан фойдаланинг.",
      "shartnomalar-content-3": "Талаб қилинган маълумотларни киритинг.",
      "shartnomalar-content-4": "IMZO чекувчиларни белгиланг, шартнома ҳаволасини юборинг ва қулай услубда имзоланг.",

      "arizalar-content-1": "Исталган ташкилотларга расмий аризалар юборинг.",
      "arizalar-content-2": "50 дан зиёд ташкилот, вазирлик ва қўмиталар талаб ва низомлари асосида яратилган шаблонлардан фойдаланинг.",
      "arizalar-content-3": "Талаб қилинган маълумотларни киритинг.",
      "arizalar-content-4": "Қулай электрон имзолаш турларидан бирини танланг ва имзоланг.",
    
      "korporativ-hujjatlar-content-1": "Корхонангиз фаолиятидаги рухсатнома, ишончнома, байённома, буйруқлар, далолатнома ва барча бошқа ҳужжатларни электрон шакллантиринг.",
      "korporativ-hujjatlar-content-2": "50 дан зиёд соҳа ва йўналишлар бўйича яратилган ҳужжатлар шаблонларидан фойдаланинг.",
      "korporativ-hujjatlar-content-3": "Талаб қилинган маълумотларни киритинг.",
      "korporativ-hujjatlar-content-4": "Имзо чекувчиларни белгиланг, ҳужжат ҳаволасини юборинг ва қулай услубда имзоланг.",
    
      "murojaatlar-content-1": "Мижозларингиз, ходим ва ҳамкорларингиздан мурожаатларни тезкор қабул қилиб олинг.",
      "murojaatlar-content-2": "Сиз учун индивидуал тақдим этиладиган шаблонлар асосида мурожаатларни қабул қилинг ва зудлик билан жавоб беринг.",
      "murojaatlar-content-3": " Жавоб бериш бўлими орқали ҳеч қайси мурожаатларни эътибордан қолдирманг.",

      "imzo-content-1": "Бизнесингиз узлуксиз ишлаши учун барча ҳужжатларни тезкор имзоланг.",
      "imzo-content-2": "Хизмат сафарида бўлсангиз ҳам, барча муҳим ҳужжатлар сиз билан.",
      "imzo-content-3": "Тайёр Word ёки ПДФ форматидаги ҳужжатни юкланг ва имзо чекувчини белгиланг.",

      "sms-content-1": "Фаолиятингиз давомидаги янгиликлар, хабарлар ва муҳим маълумотларни матн шаклда қисқа рақамлар орқали юборинг.",
      "sms-content-2": "Огоҳлантириш хатлари ва бошқа муҳим юридик ҳужжатларни ПДФ шаклда қисқа рақамлар орқали юборинг.",

      "ocr-content-1": "OCR (optical character recognition) технологияси ёрдамида суратлардаги ёзувларни матн ҳолатига келтиринг.",
      "ocr-content-1": "Матнларни қийинчиликсиз таҳрирланг, кўчириб олинг ёки Word форматида юклаб олинг.",
      
      "info-content": "ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ОЛИЙ СУДИ ТОМОНИДАН ҚАЙД ЭТИЛГАН МАЪЛУМОТЛАРГА КЎРА 2023-ЙИЛДА ЎЗБЕКИСТОН ИҚТИСОДИЙ СУДЛАРИ ТОМОНИДАН 271 748 ТА ИШЛАР КЎРИБ ЧИҚИЛГАН ҲАМДА ДАЪВОГАРЛАР ФОЙДАСИГА 23,5 ТРЛН СЎМ МИҚДОРДА МАБЛАҒЛАР УНДИРУВИ БЎЙИЧА ҚАРОРЛАР ЧИҚАРИЛГАН. ДАВО АРИЗАЛАРИНИ СОҲАЛАР ВА МУАММОЛАР БЎЙИЧА ГУРУҲЛАРГА БЎЛИНГАНДА, ШАРТНОМАВИЙ МУНОСАБАТЛАР, ХУСУСАН ШАРТНОМА ШАРТЛАРИ АНИҚ КЎРСАТИЛМАГАНЛИГИ , КЎП ҲОЛАТЛАРДА ШАРТНОМАЛАР МУТЛАҚО МАВЖУД ЭМАСЛИГИ КЎРСАТИЛГАН.",


      "carousel-item-1__title": "МЕҲМОНХОНА ВА ҲОТЕЛЛАР,  ДАЛА ҲОВЛИ ВА САНАТОРИЯЛАР",
      "carousel-item-2__title": "Ўқув юртлари касб ҳунар ва таълим марказлари.",
      "carousel-item-3__title": "Таъмирлаш тиклаш ва қурилиш ишлари билан шуғилланувчи усталан бригадаси ёки катта қурилиш компаниялари.",
      "carousel-item-4__title": "Бўлиб тўлаш ва мукромолия ташкилотлари, ламбард ва кредит бюролари.",


      "carousel-item-1__content-1": 'Қисқа муддатга меҳмонларни жойлаштириш ва кўчмас мулкни қисман ёки бутунлай мўъжиза ишониб топшириш бугунги кундаги энг хатарли бизнеслардан бири бўлиб қолмоқда. “ЗАКС” талаби бекор бўлгандан кейин, хавф даражаси янада ортади.',
      "carousel-item-1__content-2": "Шартномангизни бир зумда тезкор, осон ва қонуний тасдиқлаб мол-мулкингиз ва шахсий репутациянгизни сақлаб қолинг.",
      
      "carousel-item-2__content-1": "Деярли барча таълим марказларига ўқувчиларни ўз васийлари(ота-онаси яқин қариндоши ёки буви буваси) олиб келади. Таълим марказларида дастлабки 2 та дарс бепул бўлганлиги сабабли шартномалар кўп ҳолда вояга етмаган ўқувчилар томонидан бериб юборилади ва шартноманинг ҳуқуқий статуси бошқарилмайди.",
      "carousel-item-2__content-2": "1doc.uz билан сиз шартномани онлайн исталган жойдан исталган адресатга(васийга) аниқ ва осон етказасиз.",

      "carousel-item-3__content-1": "Иқтисодиёт тармоқлари орасида энг кўп ҳуқуқий низолар кўтариладиган соҳалардан бири бу қурилишдир. Қурилиш ҳамиша кечикади, режалар унутилади, сифат ҳолати сақланмайди, ёки аксинча мижоз томонидан маҳсулотлар таъминоти ўз вақтида етиб келмайди. Ҳаттоки қилинган ишлар учун пул ҳам ола олмай қолишингиз мумкин.",
      "carousel-item-3__content-2": "1doc.uz - сизга қурилиш соҳаси учун керакли барча ҳужжатлар тўплами ёки, объектингиз учун махсус шартнома беришга тайёр.",

      "carousel-item-4__content-1": "Сиз қимматбаҳо буюмингизни мижозга бўлиб тўлашга ишониб топширмоқдасиз. Мижознинг толов мажбуриятини ифодалаш, хавф-хатарни жиловлаш учун максимал ҳимояланган шартномалар тақдим этинг..",
      "carousel-item-4__content-2": "Қонуний равишда адресат билан шартномалар имзоланг. Етказиб бериш хатлари ва йўл хатларини ёқимли бонус сифатида қабул қилиб олинг.",
      
      "statistics-main-title": "ИСТАЛГАН ШАРТНОМАНИ ҚУЛАЙ ЯРАТИНГ ВА ҚУЛАЙ ТАСДИҚЛАНГ",
      "statistics-title-1": "ЖАМИ ФОЙДАЛАНУВЧИЛАР",
      "statistics-title-2": "ПЛАТФОРМАДА МАВЖУД ШАРТНОМА ШАБЛОНЛАРИ",
      "statistics-title-3": "ПЛАТФОРМАДА МАВЖУД АРИЗА НАМУНАЛАРИ",

      "signing-types-title": "ИМЗОЛАШ УСУЛЛАРИ",
      "signing-types-content-1": "FAKSIMILE",
      "signing-types-content-2": "СМС",
      "signing-types-content-3": "ТЕЛЕГРАМ",
      "signing-types-content-4": "FACE ID",
      "signing-types-content-5": "Э-ИМЗО",

      "componies-title": "БИЗ БИЛАН БИРГА",

      "pricing-title": "ЎЗ ТАРИФИНГИЗНИ ТАНЛАНГ",
      "price-box-1__title": "ЯТТ 50",
      "price-box-1__content-1": "50 дона ҳужжатлар",
      "price-box-1__content-2": "50 дона смс-ҳабарнома",

      "pricing-title": "ЎЗ ТАРИФИНГИЗНИ ТАНЛАНГ",
      "price-box-2__title": "ЯТТ 50",
      "price-box-2__content-1": "50 дона ҳужжатлар",
      "price-box-2__content-2": "50 дона смс-ҳабарнома",

      "price-box-3__title": "СЕНАТ 500",
      "price-box-3__content-1": "500 дона ҳужжатлар",
      "price-box-3__content-2": "500 дона смс-ҳабарнома",

      "price-box-4__title": "Пресидент",
      "price-box-4__content-1": "1000 дона ҳужжатлар",
      "price-box-4__content-2": "1000 дона смс-хабарнома",

      "price-box-btn-text": "Танлаш",

      "month": "ой",
      "banner-text": "Барча ҳужжатларга бир ечим!",

      "footer-title-1": "Биз ҳақимизда",
      "footer-title-2": "Қонунийлик асослари",
      "footer-title-3": "Алоқа",
      
      "footer-link-1": "Маълумотларнинг махвийлик сиёсати",
      "footer-link-2": "Оммавий оферта",
      "footer-link-3": "Раҳбарият",
      "footer-link-4": "Шартномалар",
      "footer-link-5": "Аризалар",
      "footer-link-6": "“Електрон тижорат ” тоʼгʼрисидаги “Оʼзбекистон Республикаси Қонуни.",
      "footer-link-7": "Електрон имзо тоʼгʼрисидаги” “Оʼзбекистон Республикаси Қонуни.",
      "footer-link-8": "Тадбиркорлик субʼектларига халқаро платформалар орқали рақамли технологиялар учун қулай шарт-шароитлар яратиш чора тадбирлари тоʼгʼрисидаги ”ги қарори.",
      "footer-link-9": "“Жисмоний ва юридик шахсларнинг мурожаатлари тўғрисига”ги Қонун",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz_la', // default language
    fallbackLng: 'uz_la',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;