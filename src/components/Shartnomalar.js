import { FaPlus, FaSearch, FaFileExcel } from 'react-icons/fa';

const Shartnomalar = () => {
  return (
    <div>
      <div className="row align-items-center top-bar">
            <div className="col-auto create-btn-wrapper">
              <button className="btn btn-outline-primary">
                <img className="plus-icon" src="/assets/plus-icon.svg" />
                <span>YARATISH</span>
              </button>
            </div>

            <div className="col folders">
              <div className="folder-group" role="group">
                <button type="button" className="folder">
                  <img src="../assets/folder-icon.svg" alt="" />
                  <span>Tibbiy xizmatlarni ko’rsatish</span>
                </button>
                
                <button type="button" className="folder">
                  <img src="../assets/folder-icon.svg" alt="" />
                  <span>Pulli ta’lim xizmatlar</span>
                </button>

                <button type="button" className="folder">
                  <img src="../assets/folder-icon.svg" alt="" />
                  <span>Mahsulotlarni yetkazib berish</span>
                </button>
                
                <button type="button" className="folder">
                  <img src="../assets/folder-icon.svg" alt="" />
                  <span>Xorijga ishga yuborish</span>
                </button>

                <button type="button" className="folder">
                  <img src="../assets/folder-icon.svg" alt="" />
                  <span>Xorijga ishga yuborish</span>
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
            <th scope="col" rowSpan="2">Shartnomalar</th>
            <th scope="col" colSpan="3">Shartnoma</th>
            <th scope="col" colSpan="2">Imzolangan sanasi</th>
            <th scope="col" rowSpan="2">Holati</th>
          </tr>
          <tr>
            <th scope="col">sanasi</th>
            <th scope="col">raqami</th>
            <th scope="col">muddati</th>
            <th scope="col">korxona</th>
            <th scope="col">mijoz</th>
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

export default Shartnomalar;
