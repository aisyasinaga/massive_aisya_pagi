import React from 'react';
import Profilitem from './Profilitem';
import profilImg from '../assets/profil.jpeg'

const data = [
  {
    imageSrc: profilImg,
    nama: 'Aisya Naomi Yohana',
    status: 'Mahasiswa Politeknik LP3I Medan',
    caption: '"Bekerja cerdas dan bukan bekerja keras, itu prinsip saya"',
    ketalamat: 'Alamat :',
    alamat: 'Jl. Gereja GBKP No. 5 Dsn IV, Medan, Sumatera Utara',
    kettelepon: 'No. Telepon :',
    telepon: '082370428789',
    kethobi: 'Hobi :',
    hobi: 'Berenang, memasak, main game',
    ketmakanankesukaan: 'Makanan Kesukaan :',
    makanankesukaan: 'Ayam goreng',
    ketminumankesukaan: 'Minuman Kesukaan :',
    minumankesukaan: 'Jus alpukat',
  }
];

const Profil = () => {
  return (
    <div id="profil" className="max-w-[900px] m-auto md:pl-20 p-4 py-16">
      <h1 className="mb-11 text-4xl font-bold text-center text-[#001b5e]">Profil</h1>
      {data.map((item, idx) => (
        <Profilitem
          key={idx}
          imageSrc={item.imageSrc}
          nama={item.nama}
          status={item.status}
          caption={item.caption}
          ketalamat={item.ketalamat}
          alamat={item.alamat}
          kettelepon={item.kettelepon}
          telepon={item.telepon}
          kethobi={item.kethobi}
          hobi={item.hobi}
          ketmakanankesukaan={item.ketmakanankesukaan}
          makanankesukaan={item.makanankesukaan}
          ketminumankesukaan={item.ketminumankesukaan}
          minumankesukaan={item.minumankesukaan}
        />
      ))}
    </div>
  );
};

export default Profil;