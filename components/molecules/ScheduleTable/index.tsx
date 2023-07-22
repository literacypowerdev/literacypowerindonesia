const ScheduleTable = () => {
  return (
    <div className="font-ptserif">
      <div>
        <h1 className="text-black font-extrabold">
          Hari Pertama (Keberangkatan)
        </h1>
        <p>
          Peserta berkumpul di meeting point (Surabaya atau Jakarta, jika di
          luar Pulau Jawa) untuk berangkat dari pelabuhan menuju desa
          pengabdian, bersama dengan tim Literacy Power.
        </p>
      </div>

      <br />

      <div>
        <h1 className="text-black font-extrabold">Hari Kedua, dstnya</h1>
        <p>Acara penyambutan, perkenalan, dan implementasi program</p>
      </div>

      <br />
      
      <div>
        <table className="border-collapse w-full md:w-[1000px] border-2 border-slate-800">
          <tbody>
            <tr className="text-left">
              <th className="border-2 border-slate-800 px-3 py-2 bg-main-orange text-main-background">
                Waktu
              </th>
              <th className="border-2 border-slate-800 px-3 py-2 bg-main-orange text-main-background">
                Kegiatan
              </th>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">6.30 pagi</td>
              <td className="border-2 border-slate-800 px-3 py-2">Makan pagi</td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">7.30 pagi</td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Menuju aula desa untuk penyambutan
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                8.00 - 8.45 pagi
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Acara penyambutan
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                9.00 pagi - 11.30 siang
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Kegiatan implementasi program
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                11.45 - 12.30 siang
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Makan siang, sholat
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                12.50 - 15.30 siang
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Kegiatan implementasi program selanjutnya
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                15.30 - 17.00 sore
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">Acara bebas</td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                17.30 sore - 19.00 malam
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Istirahat, mandi, makan malam
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                19.30 malam - selesai
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Evaluasi program, diskusi persiapan program esok hari
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <h1 className="font-extrabold">Hari Keenam (Menuju penutupan acara)</h1>
        <p>penutupan acara</p>
      </div>
      <br />
      <div>
        <table className="border-collapse w-full md:w-[865px]">
          <tbody>
            <tr className="text-left">
              <th className="border-2 border-slate-800 px-3 py-2 bg-main-orange text-main-background">
                Waktu
              </th>
              <th className="border-2 border-slate-800 px-3 py-2 bg-main-orange text-main-background">
                Kegiatan
              </th>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">6.30 pagi</td>
              <td className="border-2 border-slate-800 px-3 py-2">Makan pagi</td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">7.30 pagi</td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Menuju tempat kegiatan program
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                8.00 pagi - 11.30 siang
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Kegiatan berlangsung
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                11.45 - 12.30 siang
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Makan siang, sholat
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                12.50 - 17.00 siang
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Acara bebas dan persiapan penutupan acara
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                17.30 sore - 19.00 malam
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Istirahat, mandi, makan malam
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-800 px-3 py-2">
                19.30 malam - selesai
              </td>
              <td className="border-2 border-slate-800 px-3 py-2">
                Penutupan acara
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
