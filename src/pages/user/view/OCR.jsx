import Tesseract from "tesseract.js";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { Dropdown, Form } from "react-bootstrap";

const UserOcrView = observer(() => {
  const [imageSrc, setImageSrc] = useState("");
  const [ocrLanguage, setOcrLanguage] = useState("");
  const [ocrText, setOcrText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { t } = useTranslation();

  const handleFileChange = (e) => {
    setError("");
    setOcrText("");
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    // Basic file type validation
    if (
      !selectedFile.type.startsWith("image/") &&
      !selectedFile.type.endsWith(".pdf")
    ) {
      setError(t("User:InvalidFileType"));
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);
      setFile(selectedFile);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleConvertClick = async () => {
    if (!file) {
      setError(t("User:NoFileSelected"));
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (ocrLanguage === "") {
        toast.error("dasd", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }

      const {
        data: { text },
      } = await Tesseract.recognize(file, ocrLanguage);
      setOcrText(text);
    } catch (err) {
      setError(t("User:OcrError"));
    } finally {
      setLoading(false);
    }
  };

  const handleExtractText = () => {
    if (!ocrText) {
      toast.error("empty text", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    navigator.clipboard
      .writeText(ocrText)
      .then(() => {
        toast.success("Сopy sucess", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("error copu", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleDownloadText = async () => {
    if (!ocrText) {
      alert(t("User:NoTextToDownload"));
      return;
    }

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun(ocrText)],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ocr-text.docx";
    a.click();
    URL.revokeObjectURL(url);
  };

  const language_ocr = [
    { id: "uzb", Title: "O'zbek" },
    { id: "uzb_cyrl", Title: "Ўзбек" },
    { id: "rus", Title: "Русский" },
    { id: "eng", Title: "English" },
    { id: "kaz", Title: "Qazaq" },
    { id: "kir", Title: "Kirgiz" },
    { id: "tgk", Title: "Tajigi" },
  ];

  return (
    <>
      <Helmet>
        <title>{t("User:OCR:Title")}</title>
      </Helmet>
      <div className="ocr-page">
        <button className="upload-btn btn btn-outline-primary">
          {t("User:FileUpload")} (.jpg, .pdf)
          <input type="file" onChange={handleFileChange} disabled={loading} />
        </button>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <Form.Select
            onChange={(e) => {
              setOcrLanguage(e.target.value);
            }}
          >
            <option key="empty" value="">
              Tilni tanglang
            </option>
            {language_ocr.map((language, index) => (
              <option key={language.id} value={language.id}>
                {language.Title}
              </option>
            ))}
          </Form.Select>
          <button
            className="convert-btn btn btn-primary"
            onClick={handleConvertClick}
            disabled={loading || !file}
          >
            {t("User:OCR:Convert_button")}
          </button>
        </div>

        {loading && <div>{t("User:Loading")}</div>}
        
        {error && <div className="error">{error}</div>}

        <div className="ocr-result">{ocrText}</div>

        <div className="btn-group">
          <button
            className="extract-btn btn btn-primary"
            onClick={handleExtractText}
            disabled={!ocrText}
          >
            {t("User:OCR:Copy_text")}
          </button>
          <button
            className="download-btn btn btn-primary"
            onClick={handleDownloadText}
            disabled={!ocrText}
          >
            {t("User:OCR:Save_as_file")}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
});

export default UserOcrView;
