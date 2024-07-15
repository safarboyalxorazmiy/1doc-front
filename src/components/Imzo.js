import { FaPlus, FaSearch, FaFileExcel } from 'react-icons/fa';

const Imzo = () => {
  return (
    <div>
      <div className="row align-items-center top-bar">
            <div className="col-auto create-btn-wrapper">
              <button className="btn btn-outline-primary">
                <img className="plus-icon" src="/assets/plus-icon.svg" />
                <span>YARATISH</span>
              </button>
            </div>

            <div className="col btns">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary">
                  Tibbiy xizmatlarni ko’rsatish
                </button>
                <button type="button" className="btn btn-primary">
                  Pulli ta’lim xizmatlar
                </button>
                <button type="button" className="btn btn-primary">
                  Mahsulotlarni yetkazib berish
                </button>
                <button type="button" className="btn btn-primary">
                  Xorijga ishga yuborish
                </button>
                <button type="button" className="btn btn-primary">
                  Xorijga ishga yuborish
                </button>
              </div>
            </div>
            
            <div className="col-auto search-wrapper">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Qidirish" />
                <button className="btn btn-outline-secondary" type="button">
                  <FaSearch />
                </button>
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
