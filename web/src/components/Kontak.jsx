import React from 'react'

const Kontak = () => {
    return (
        <div id='kontak' className='max-w-[900px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#142349]'> 
            Kontak
        </h1>
        <form action="https://getform.io/f/66775b65-ddca-41f0-a552-bea80f86efde" method="POST">
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Nama</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>No. Telepon</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone'/>
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Keterangan</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'/>
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Pesan</label>
            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message'></textarea>
          </div>
          <button className="bg-[#001b5e] text-gray-100 mt-4 w-100 p-4 rounded-lg mx-auto block"> Kirim Pesan </button>        </form>
        </div>
    )
}

export default Kontak