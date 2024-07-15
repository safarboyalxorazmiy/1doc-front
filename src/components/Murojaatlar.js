import { FaPlus, FaSearch, FaFileExcel } from 'react-icons/fa';

const Murojaatlar = () => {
  return (
    <div>
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

export default Murojaatlar;
