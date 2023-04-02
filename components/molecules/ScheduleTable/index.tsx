


const ScheduleTable = () => {
    return (
        <div className='font-ptserif'>
            <div>
                <h1 className='text-black font-extrabold'>Hari Pertama (Keberangkatan)</h1>
                <p>Peserta berkumpul di meeting point (Surabaya atau Jakarta, jika di luar Pulau Jawa) untuk berangkat dari pelabuhan menuju desa pengabdian, bersama dengan tim Literacy Power.</p>
            </div>
            <br />
            <div>
                <h1 className='text-black font-extrabold'>Hari Kedua, dstnya</h1>
                <p>Acara penyambutan, perkenalan, dan implementasi program</p>
            </div>
            <br />
            <div>
                <table className="border-collapse w-full md:w-[1000px]">
                    <tr className='text-left'>
                        <th>Waktu</th>
                        <th>Kegiatan</th>
                    </tr>
                    <tr>
                        <td>6.30 pagi</td>
                        <td>Makan pagi</td>
                    </tr>
                    <tr>
                        <td>7.30 pagi</td>
                        <td>Menuju aula desa untuk penyambutan</td>
                    </tr>
                    <tr>
                        <td>8.00 - 8.45 pagi</td>
                        <td>Acara penyambutan</td>
                    </tr>
                    <tr>
                        <td>9.00 pagi - 11.30 siang</td>
                        <td>Kegiatan implementasi program</td>
                    </tr>
                    <tr>
                        <td>11.45 - 12.30 siang</td>
                        <td>Makan siang, sholat</td>
                    </tr>
                    <tr>
                        <td>12.50 - 15.30 siang</td>
                        <td>Kegiatan implementasi program selanjutnya</td>
                    </tr>
                    <tr>
                        <td>15.30 - 17.00 sore</td>
                        <td>Acara bebas</td>
                    </tr>
                    <tr>
                        <td>17.30 sore - 19.00 malam</td>
                        <td>Istirahat, mandi, makan malam</td>
                    </tr>
                    <tr>
                        <td>19.30 malam - selesai</td>
                        <td>Evaluasi program, diskusi persiapan program esok hari</td>
                    </tr>
                </table>

            </div>
            <br />
            <div>
                <h1 className='font-extrabold'>Hari Keenam (Menuju penutupan acara)</h1>
                <p>penutupan acara</p>
            </div>
            <br />
            <div>
                <table className="border-collapse w-full md:w-[865px]">
                    <tr className='text-left'>
                        <th>Waktu</th>
                        <th>Kegiatan</th>
                    </tr>
                    <tr>
                        <td>6.30 pagi</td>
                        <td>Makan pagi</td>
                    </tr>
                    <tr>
                        <td>7.30 pagi</td>
                        <td>Menuju tempat kegiatan program</td>
                    </tr>
                    <tr>
                        <td>8.00 pagi - 11.30 siang</td>
                        <td>Kegiatan berlangsung</td>
                    </tr>
                    <tr>
                        <td>11.45 - 12.30 siang</td>
                        <td>Makan siang, sholat</td>
                    </tr>
                    <tr>
                        <td>12.50 - 17.00 siang</td>
                        <td>Acara bebas dan persiapan penutupan acara</td>
                    </tr>
                    <tr>
                        <td>17.30 sore - 19.00 malam</td>
                        <td>Istirahat, mandi, makan malam</td>
                    </tr>
                    <tr>
                        <td>19.30 malam - selesai</td>
                        <td>Penutupan acara</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ScheduleTable