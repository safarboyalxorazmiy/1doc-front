import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { Context } from '../../../main';

import { addDataLocker, getDataLocker } from '../../../function/http/LockerAPI';

const UserLockerView = observer(() => {
  const { user } = useContext(Context);
  const { t } = useTranslation();
  
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [Repassword, setRePassword] = useState("");
  const [progress, setProgress] = useState(false);

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const LockFile = async () => {
    console.log(progress)
    console.log(password)
    console.log(Repassword)
    if (file != null && password != "" && Repassword != "" && password === Repassword && progress === false) {
      setProgress(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('password', password);
      await addDataLocker(formData).then((data) => {
        event.preventDefault();
        setProgress(false)
        setFile(null);
        setPassword("");
        setRePassword("");
        window.open(data, "_blank");
      });
    } else {
      toast.error("e.response.data.message", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setProgress(false);
    }
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        LockFile();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("User:Locker:Title")}</title>
      </Helmet>
    <div className="locker-container locker-page">
      <h3 className="locker-title">{t("User:Locker:PageTitle")}</h3>

      <button className="upload-btn btn btn-outline-primary">
        {t("User:FileUploads")} (.pdf)
        <input type="file" onChange={selectFile}/>
      </button>

      <div className="locker-form-container">
        <h4 className="locker-form-title">{t("User:Locker:Text_one")}</h4>
        <h5 className="locker-form-label">{t("User:Locker:Text_two")}</h5>
        
        <input
          className="locker-input"
          type="text"
          placeholder={t("User:Locker:Password_number_input")}
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
          <input
          className="locker-input"
          type="text"
          placeholder={t("User:Locker:RePassword_number_input")}
          value={Repassword}
          onChange={(e) =>
            setRePassword(e.target.value)
          }
        />
        {
          progress === true ? 
            <button className="locker-btn btn btn-primary" disabled>Jarayonda</button>
          :
            <button className="locker-btn btn btn-primary" onClick={LockFile}>{t("User:Locker:Block_button")}</button>
        }

      </div>
    </div>
    <ToastContainer />
    </>
  );
});

export default UserLockerView;