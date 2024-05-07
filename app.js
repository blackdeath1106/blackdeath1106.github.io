// FORM HTB
const inputHari = document.querySelector('#inputHari');
const inputTanggal = document.querySelector('#inputTanggal');
const inputBulan = document.querySelector('#inputBulan');
const tombolHTB = document.querySelector('#tombolHTB');

let outputHari;
let outputTanggal;
let outputBulan;
const htb = [];
let htbJadwalOperasi;

const hariFix = {
  1: 'Senin',
  2: 'Selasa',
  3: 'Rabu',
  4: 'Kamis',
  5: 'Jumat',
  6: 'Sabtu',
  7: 'Minggu'
}

const bulanFix = {
  1: 'Januari',
  2: 'Februari',
  3: 'Maret',
  4: 'April',
  5: 'Mei',
  6: 'Juni',
  7: 'Juli',
  8: 'Agustus',
  9: 'September',
  10: 'Oktober',
  11: 'November',
  12: 'Desember'
}

// FORM OH
const inputNamaOH = document.querySelector('#inputNamaOH');
const inputKelaminOH = document.querySelector('#inputKelaminOH');
const inputUmurOH = document.querySelector('#inputUmurOH');
const inputRmOH = document.querySelector('#inputRmOH');
const inputBangsalOH = document.querySelector('#inputBangsalOH');
const inputDiagnosisOH = document.querySelector('#inputDiagnosisOH');
const inputPlanOH = document.querySelector('#inputPlanOH');
const inputOkOH = document.querySelector('#inputOkOH');
const inputJamOH = document.querySelector('#inputJamOH');
const inputDokterOH = document.querySelector('#inputDokterOH');
const tombolOH = document.querySelector('#tombolOH');

let outputNamaOH;
let outputKelaminOH;
let outputUmurOH;
let outputRmOH;
let outputBangsalOH;
let outputDiagnosisOH;
let outputPlanOH;
let outputOkOH;
let outputJamOH;
let outputDokterOH;

const dataPasienOH = [];
let urutanPasienOH = 1;
let urutanPasienOhMinSatu = 0;

// FORM GBST
const inputNamaGBST = document.querySelector('#inputNamaGBST');
const inputKelaminGBST = document.querySelector('#inputKelaminGBST');
const inputUmurGBST = document.querySelector('#inputUmurGBST');
const inputRmGBST = document.querySelector('#inputRmGBST');
const inputBangsalGBST = document.querySelector('#inputBangsalGBST');
const inputDiagnosisGBST = document.querySelector('#inputDiagnosisGBST');
const inputPlanGBST = document.querySelector('#inputPlanGBST');
const inputAnestesiGBST = document.querySelector('#inputAnestesiGBST');
const inputJamGBST = document.querySelector('#inputJamGBST');
const inputDokterGBST = document.querySelector('#inputDokterGBST');
const tombolGBST = document.querySelector('#tombolGBST');

let outputNamaGBST;
let outputKelaminGBST;
let outputUmurGBST;
let outputRmGBST;
let outputBangsalGBST;
let outputDiagnosisGBST;
let outputPlanGBST;
let outputAnestesiGBST;
let outputJamGBST;
let outputDokterGBST;

const dataPasienGBST = [];
let urutanPasienGBST = 1;
let urutanPasienGbstMinSatu = 0;

// OTHER
const izinOperasi = document.querySelector('#izinOperasi');
const jadwalOH = document.querySelector('#jadwalOH');
const jadwalGBST = document.querySelector('#jadwalGBST');
const listKetikanPanggilOH = document.querySelector('#listKetikanPanggilOH');
const listRmkOH = document.querySelector('#listRmkOH');
const listKetikanPanggilGBST = document.querySelector('#listKetikanPanggilGBST');
const listRmkGBST = document.querySelector('#listRmkGBST');
let brBantuan = document.createElement('br');
// let variabelBantuan = 0;

// TOMBOL HTB
tombolHTB.addEventListener('click', () => {

    outputHari = hariFix[inputHari.value];
    outputTanggal = inputTanggal.value;
    outputBulanAngka = inputBulan.value;
    outputBulan = bulanFix[inputBulan.value];

    htb.push({
      hari: outputHari,
      tanggal: outputTanggal,
      bulan: outputBulan,
      bulanAngka: outputBulanAngka,
    })

    htbJadwalOperasi = document.createElement('p');
    htbJadwalOperasi.innerHTML += `*${htb[0]['hari']}, ${htb[0]['tanggal']} ${htb[0]['bulan']} 2024*`
    izinOperasi.after(htbJadwalOperasi);

    document.querySelector('#containerHTB').classList.add('none');
    document.querySelector('#containerJadwalOperasi').classList.remove('none');
})


// TOMBOL OH
tombolOH.addEventListener('click', () => {

  outputNamaOH = inputNamaOH.value;
  outputKelaminOH = inputKelaminOH.value.toUpperCase();
  outputUmurOH = inputUmurOH.value;
  outputRmOH  = inputRmOH.value;
  outputBangsalOH = inputBangsalOH.value;
  outputDiagnosisOH = inputDiagnosisOH.value;
  outputPlanOH = inputPlanOH.value;
  outputOkOH = inputOkOH.value;
  outputJamOH = inputJamOH.value;
  outputDokterOH = inputDokterOH.value.toUpperCase();

  dataPasienOH.push({
    nama: outputNamaOH,
    kelamin: outputKelaminOH,
    umur: outputUmurOH,
    rm: outputRmOH,
    bangsal: outputBangsalOH,
    diagnosis: outputDiagnosisOH,
    plan: outputPlanOH,
    ok: outputOkOH,
    jam: outputJamOH,
    dokter: outputDokterOH
  })

  let listPasienOH = document.createElement('div');
  listPasienOH.innerHTML += `
  <br>${urutanPasienOH}. *${dataPasienOH[urutanPasienOhMinSatu]['nama']}, ${dataPasienOH[urutanPasienOhMinSatu]['kelamin']}, ${dataPasienOH[urutanPasienOhMinSatu]['umur']} th, ${dataPasienOH[urutanPasienOhMinSatu]['rm']}, ${dataPasienOH[urutanPasienOhMinSatu]['bangsal']}*
  <br>
  <br>*Diagnosis*
  <br>_${dataPasienOH[urutanPasienOhMinSatu]['diagnosis']}_
  <br>
  <br>*Plan*
  <br>_${dataPasienOH[urutanPasienOhMinSatu]['plan']}_
  <br>
  <br>GA, OK PJT 3.0${dataPasienOH[urutanPasienOhMinSatu]['ok']}, Jam ${dataPasienOH[urutanPasienOhMinSatu]['jam']}.00, dr. ${dataPasienOH[urutanPasienOhMinSatu]['dokter']}
  `

  jadwalOH.append(listPasienOH);
  jadwalOH.classList.remove('none');

  let ketikanPanggilOH = document.createElement('div');
  ketikanPanggilOH.innerHTML += `
  <h2 id="toggleKetikanPanggilOH${urutanPasienOhMinSatu}">Ketikan Panggil OH ${dataPasienOH[urutanPasienOhMinSatu]['nama']}</h2>
  <div id="containerKetikanPanggilOH${urutanPasienOhMinSatu}">
  <p>Selamat pagi Dokter. Mohon izin Dokter, izin melampirkan jadwal operasi hari:
  <br>
  <br>${htbJadwalOperasi.innerHTML}
  <br>
  <br>*OK PJT*
  <br>
  <br>*${dataPasienOH[urutanPasienOhMinSatu]['nama']}, ${dataPasienOH[urutanPasienOhMinSatu]['kelamin']}, ${dataPasienOH[urutanPasienOhMinSatu]['umur']} th, ${dataPasienOH[urutanPasienOhMinSatu]['rm']}, ${dataPasienOH[urutanPasienOhMinSatu]['bangsal']}*
  <br>
  <br>*Diagnosis*
  <br>_${dataPasienOH[urutanPasienOhMinSatu]['diagnosis']}_
  <br>
  <br>*Plan*
  <br>_${dataPasienOH[urutanPasienOhMinSatu]['plan']}_
  <br>GA, OK PJT 3.0${dataPasienOH[urutanPasienOhMinSatu]['ok']}, jam ${dataPasienOH[urutanPasienOhMinSatu]['jam']}.00. dr. ${dataPasienOH[urutanPasienOhMinSatu]['dokter']}
  <br>
  <br>Kondisi OK 3.0${dataPasienOH[urutanPasienOhMinSatu]['ok']} pagi ini, suhu 18°C, kelembaban 55%
  <br>
  <br>Pasien sudah di OK 3.0${dataPasienOH[urutanPasienOhMinSatu]['ok']}
  <br>Anestesi persiapan
  <br>Instrumen persiapan
  <br>
  <br>Arteri line
  <br>Intubasi
  <br>CVC
  <br>Kateter
  <br>
  <br>Mohon arahan Dokter
  <br>Terima kasih Dokter</p>
  </div>
  `

  listKetikanPanggilOH.append(ketikanPanggilOH);
  document.querySelector('#containerKetikanPanggilOH').classList.remove('none');

  let rmkOH = document.createElement('div');
  rmkOH.innerHTML += `
  <h2 id="toggleRmkOH${urutanPasienOhMinSatu}">RMK OH ${dataPasienOH[urutanPasienOhMinSatu]['nama']}</h2>
  <div id="containerRmkOH${urutanPasienOhMinSatu}">
  <p>RMK
  <br>
  <br>*${dataPasienOH[urutanPasienOhMinSatu]['nama']}, ${dataPasienOH[urutanPasienOhMinSatu]['kelamin']}, ${dataPasienOH[urutanPasienOhMinSatu]['umur']} th, ${dataPasienOH[urutanPasienOhMinSatu]['rm']}*
  <br>Telp:
  <br>
  <br>*Diagnosis :*
  <br>${dataPasienOH[urutanPasienOhMinSatu]['diagnosis']}
  <br>
  <br>*Tindakan : (${htb[0]['tanggal']}/${htb[0]['bulanAngka']}/2024)*
  <br>${dataPasienOH[urutanPasienOhMinSatu]['plan']}
  <br>
  <br>TD: pre mmHg post mmHg
  <br>HR: pre x/mnt post x/mnt
  <br>RR: pre x/mnt post x/mnt
  <br>SpO2: Pre % Post %
  <br>
  <br>Hb pre op: post op:
  <br>Cr pre op: post op:
  <br>EF pre op: %, post op: %
  <br>EKG pre op: sinus rhythm post op: sinus rhythm
  <br>SpO2: pre % post %
  <br>
  <br>CPB time: menit
  <br>AOX: menit
  <br>Ischemic time: menit
  <br>
  <br>DPJP : dr. ${dataPasienOH[urutanPasienOhMinSatu]['dokter']}
  <br>Operator : dr. ${dataPasienOH[urutanPasienOhMinSatu]['dokter']}
  <br>Assistant : dr.</p>
  </div>
  `

  listRmkOH.append(rmkOH);
  document.querySelector('#containerRmkOH').classList.remove('none');

  urutanPasienOH++;
  urutanPasienOhMinSatu++;

  inputNamaOH.value = '';
  inputKelaminOH.value = '';
  inputUmurOH.value = '';
  inputRmOH.value = '';
  inputBangsalOH.value = '';
  inputDiagnosisOH.value = '';
  inputPlanOH.value = '';
  inputOkOH.value = '';
  inputJamOH.value = '';
  inputDokterOH.value = '';
})

// TOMBOL GBST
tombolGBST.addEventListener('click', () => {

  outputNamaGBST = inputNamaGBST.value;
  outputKelaminGBST = inputKelaminGBST.value.toUpperCase();
  outputUmurGBST = inputUmurGBST.value;
  outputRmGBST  = inputRmGBST.value;
  outputBangsalGBST = inputBangsalGBST.value;
  outputDiagnosisGBST = inputDiagnosisGBST.value;
  outputPlanGBST = inputPlanGBST.value;
  outputAnestesiGBST = inputAnestesiGBST.value.toUpperCase();
  outputJamGBST = inputJamGBST.value;
  outputDokterGBST = inputDokterGBST.value.toUpperCase();

  dataPasienGBST.push({
    nama: outputNamaGBST,
    kelamin: outputKelaminGBST,
    umur: outputUmurGBST,
    rm: outputRmGBST,
    bangsal: outputBangsalGBST,
    diagnosis: outputDiagnosisGBST,
    plan: outputPlanGBST,
    anestesi: outputAnestesiGBST,
    jam: outputJamGBST,
    dokter: outputDokterGBST
  })

  let listPasienGBST = document.createElement('div');
  listPasienGBST.innerHTML += `
  <br>${urutanPasienGBST}. *${dataPasienGBST[urutanPasienGbstMinSatu]['nama']}, ${dataPasienGBST[urutanPasienGbstMinSatu]['kelamin']}, ${dataPasienGBST[urutanPasienGbstMinSatu]['umur']} th, ${dataPasienGBST[urutanPasienGbstMinSatu]['rm']}, ${dataPasienGBST[urutanPasienGbstMinSatu]['bangsal']}*
  <br>
  <br>*Diagnosis*
  <br>_${dataPasienGBST[urutanPasienGbstMinSatu]['diagnosis']}_
  <br>
  <br>*Plan*
  <br>_${dataPasienGBST[urutanPasienGbstMinSatu]['plan']}_
  <br>
  <br>${dataPasienGBST[urutanPasienGbstMinSatu]['anestesi']}, OK 5.01, Jam ${dataPasienGBST[urutanPasienGbstMinSatu]['jam']}.00, dr. ${dataPasienGBST[urutanPasienGbstMinSatu]['dokter']}
  `
  // if (variabelBantuan == 0) {
  //   jadwalGBST.after(document.createElement('br'));
  //   variabelBantuan++;
  // }

  jadwalGBST.append(listPasienGBST);
  jadwalGBST.classList.remove('none');

  let ketikanPanggilGBST = document.createElement('div');
  ketikanPanggilGBST.innerHTML += `
  <h2 id="toggleKetikanPanggilGBST${urutanPasienGbstMinSatu}">Ketikan Panggil GBST ${dataPasienGBST[urutanPasienGbstMinSatu]['nama']}</h2>
  <div id="containerKetikanPanggilGBST${urutanPasienGbstMinSatu}">
  <br>Selamat pagi Dokter. Mohon izin Dokter, izin melampirkan jadwal operasi hari:
  <br>
  <br>${htbJadwalOperasi.innerHTML}
  <br>
  <br>*OK GBST*
  <br>
  <br>*${dataPasienGBST[urutanPasienGbstMinSatu]['nama']}, ${dataPasienGBST[urutanPasienGbstMinSatu]['kelamin']}, ${dataPasienGBST[urutanPasienGbstMinSatu]['umur']} th, ${dataPasienGBST[urutanPasienGbstMinSatu]['rm']}, ${dataPasienGBST[urutanPasienGbstMinSatu]['bangsal']}*
  <br>
  <br>*Diagnosis*
  <br>_${dataPasienGBST[urutanPasienGbstMinSatu]['diagnosis']}_
  <br>
  <br>*Plan*
  <br>_${dataPasienGBST[urutanPasienGbstMinSatu]['plan']}_
  <br>${dataPasienGBST[urutanPasienGbstMinSatu]['anestesi']}, GBST 5.01, jam ${dataPasienGBST[urutanPasienGbstMinSatu]['jam']}.00. dr. ${dataPasienGBST[urutanPasienGbstMinSatu]['dokter']}
  <br>
  <br>Pasien siap dipanggil
  <br>Anestesi persiapan
  <br>Instrumen persiapan
  <br>
  <br>Mohon arahan Dokter
  <br>Terima kasih Dokter</p>
  </div>
  `

  listKetikanPanggilGBST.append(ketikanPanggilGBST);
  document.querySelector('#containerKetikanPanggilGBST').classList.remove('none');

  let rmkGBST = document.createElement('div');
  rmkGBST.innerHTML += `

  <h2 id="toggleRmkGBST${urutanPasienGbstMinSatu}">RMK GBST ${dataPasienGBST[urutanPasienGbstMinSatu]['nama']}</h2>
  <div id="containerRmkGBST${urutanPasienGbstMinSatu}">
  <p>RMK
  <br>
  <br>*${dataPasienGBST[urutanPasienGbstMinSatu]['nama']}, ${dataPasienGBST[urutanPasienGbstMinSatu]['kelamin']}, ${dataPasienGBST[urutanPasienGbstMinSatu]['umur']} th, ${dataPasienGBST[urutanPasienGbstMinSatu]['rm']}*
  <br>Telp:
  <br>
  <br>*Diagnosis :*
  <br>${dataPasienGBST[urutanPasienGbstMinSatu]['diagnosis']}
  <br>
  <br>*Tindakan : (${htb[0]['tanggal']}/${htb[0]['bulanAngka']}/2024)*
  <br>${dataPasienGBST[urutanPasienGbstMinSatu]['plan']}
  <br>
  <br>TD: pre mmHg post mmHg
  <br>HR: pre x/mnt post x/mnt
  <br>RR: pre x/mnt post x/mnt
  <br>SpO2: Pre % Post %
  <br>
  <br>DPJP : dr. ${dataPasienGBST[urutanPasienGbstMinSatu]['dokter']}
  <br>Operator : dr. ${dataPasienGBST[urutanPasienGbstMinSatu]['dokter']}
  <br>Assistant : dr.</p>
  </div>
  `

  listRmkGBST.append(rmkGBST);
  document.querySelector('#containerRmkGBST').classList.remove('none');

  urutanPasienGBST++;
  urutanPasienGbstMinSatu++;

  inputNamaGBST.value = '';
  inputKelaminGBST.value = '';
  inputUmurGBST.value = '';
  inputRmGBST.value = '';
  inputBangsalGBST.value = '';
  inputDiagnosisGBST.value = '';
  inputPlanGBST.value = '';
  inputAnestesiGBST.value = '';
  inputJamGBST.value = '';
  inputDokterGBST.value = '';
})

// TOGGLE
document.querySelector('#toggleFormOH').addEventListener('click', () => {
  document.querySelector('#containerFormOH').classList.toggle('none');
})
document.querySelector('#toggleFormGBST').addEventListener('click', () => {
  document.querySelector('#containerFormGBST').classList.toggle('none');
})
document.querySelector('#toggleJadwalOperasi').addEventListener('click', () => {
  document.querySelector('#containerJadwalOperasi').classList.toggle('paddingContainerJadwalOperasi');
  document.querySelector('#jadwalOperasi').classList.toggle('none');
  if (urutanPasienOhMinSatu !== 0 && urutanPasienGbstMinSatu !== 0 && brBantuan.classList[0] !== 'ada') {
    jadwalOH.after(brBantuan);
    brBantuan.classList.add('ada');
  }
})
document.querySelector('#toggleKetikanPanggilOH').addEventListener('click', () => {
  document.querySelector('#listKetikanPanggilOH').classList.toggle('none');
})
document.querySelector('#toggleRmkOH').addEventListener('click', () => {
  document.querySelector('#listRmkOH').classList.toggle('none');
})
document.querySelector('#toggleKetikanPanggilGBST').addEventListener('click', () => {
  document.querySelector('#listKetikanPanggilGBST').classList.toggle('none');
})
document.querySelector('#toggleRmkGBST').addEventListener('click', () => {
  document.querySelector('#listRmkGBST').classList.toggle('none');
})

document.querySelector('#toggleSelesai').addEventListener('click', () => {
  document.querySelector('#selesai').classList.toggle('none');

  for (let i = 0; i < urutanPasienOhMinSatu; i++) {
    document.querySelector(`#toggleKetikanPanggilOH${i}`).classList.add('marginZero');
    document.querySelector(`#toggleKetikanPanggilOH${i}`).addEventListener('click', () => {
      document.querySelector(`#containerKetikanPanggilOH${i}`).classList.toggle('none');
    })
    document.querySelector(`#toggleRmkOH${i}`).classList.add('marginZero');
    document.querySelector(`#toggleRmkOH${i}`).addEventListener('click', () => {
      document.querySelector(`#containerRmkOH${i}`).classList.toggle('none');
    })
  }

  for (let j = 0; j < urutanPasienGbstMinSatu; j++) {
    document.querySelector(`#toggleKetikanPanggilGBST${j}`).classList.add('marginZero');
    document.querySelector(`#toggleKetikanPanggilGBST${j}`).addEventListener('click', () => {
      document.querySelector(`#containerKetikanPanggilGBST${j}`).classList.toggle('none');
    })
    document.querySelector(`#toggleRmkGBST${j}`).classList.add('marginZero');
    document.querySelector(`#toggleRmkGBST${j}`).addEventListener('click', () => {
      document.querySelector(`#containerRmkGBST${j}`).classList.toggle('none');
    })
  }
})
