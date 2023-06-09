import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Beranda = () => {
    return (
        <div id='beranda'> 
            <img 
            className="w-full h-screen object-cover object-left scale-x-[-1]" 
            src='https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=fabio-oyXis2kALVg-unsplash.jpg&auto=format&fit=crop&w=870&q=80'
            alt='/'
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[650px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-grey-900 mb-3 mt-11'> Hai, perkenalkan saya Aisya! </h1>
                <h1 className='sm:text-3xl text-2xl font-reguler text-grey-900 mb-11'> Selamat datang di website pribadi saya </h1>
                <h2 className='flex sm:text-2xl text-1xl'> 
                <TypeAnimation
                    sequence={[
                        '#itsmylife',
                        2000,
                        '#andmyfuture',
                        2000,
                        '#thatsit',
                        2000,
                        () => {
                        console.log('Done typing!');
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em' }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[80px] w-full'>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Beranda