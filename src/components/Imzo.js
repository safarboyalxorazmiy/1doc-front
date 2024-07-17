import { FaPlus, FaSearch, FaFileExcel } from 'react-icons/fa';

const Imzo = () => {
  return (
    <div className="imzo-page">
      <div className="row align-items-center top-bar">
          <div className="col-auto upload-btn-wrapper">
            <button className="btn btn-outline-primary">
              <span>Fayl yuklang</span>
            </button>
          </div>

          <div className="col signature-count-wrapper">
            <span  className="title">Imzolovchilar soni</span>
            <div className="signature-count-group" role="group">
              <button type="button" className="signature-count">
                <span>1 nafar</span>
              </button>
              
              <button type="button" className="signature-count">
                <span>2 nafar</span>
              </button>

              <button type="button" className="signature-count">
                <span>3 nafar</span>
              </button>
              
              <button type="button" className="signature-count">
                <span>4 va undan ko'p</span>
              </button>
            </div>
          </div>
          
          <div className="col-auto signature-info-wrapper">
            <div className="input-group signature-info">
              <span className="title">Imzolovchilar haqida ma'lumotni kiriting</span>
              <div className="info">
                <span>1</span>
                <input type="text" placeholder="Lavozim" />
                <input type="text" placeholder="Ism familiya" />
                <input type="text" placeholder="Telefon raqami" />
              </div>
              <div className="info">
                <span>2</span>
                <input type="text" placeholder="Lavozim" />
                <input type="text" placeholder="Ism familiya" />
                <input type="text" placeholder="Telefon raqami" />
              </div>

              <div className='btns'>
                <button>Ko'rish</button>
                <button>Yuborish</button>
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
