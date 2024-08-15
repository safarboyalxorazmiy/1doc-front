import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uz from "../../assets/locales/uz.json";
import kr from "../../assets/locales/kr.json";
import qr from "../../assets/locales/qr.json";
import qrkr from "../../assets/locales/qrkr.json";
import ru from "../../assets/locales/ru.json";

const resources = {
    uz,
    kr,
    qr,
    qrkr,
    ru,
}

export const availableLanguages = Object.keys(resources)

i18n 

    .use(initReactI18next)

    .init({
        resources,
        fallbackLng: 'uz',
        debug: false,

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;