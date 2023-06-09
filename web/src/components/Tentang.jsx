import React from 'react'
import Tentangitem from './Tentangitem'
import programImg from '../assets/program.jpg'
import desainImg from '../assets/desain.jpg'


const Tentang = () => {
    return (
        <div id='tentang' className='max-w-[1100px] m-auto md:pl-20 p-2 py-16'> 
            <h1 className='text-4xl font-bold text-center text-[#001b5e]' > Tentang </h1>
            <p className='text-center py-8 mb-8'>
                Saya adalah salah satu mahasiswi semester akhir di Politeknik LP3I. Saya adalah seseorang yang menyukai hal baru dan tantangan sehingga mengambil jurusan Teknologi Komputer yang berhubungan dengan perkembangan teknologi yang berlanjut dan tidak ada habisnya.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
              <Tentangitem img={programImg} title='Pemrograman'/>
              <Tentangitem img={desainImg} title='Desain'/>
            </div>
        </div>
    )
}

export default Tentang