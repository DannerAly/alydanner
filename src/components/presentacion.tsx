
import Aly from '../assets/images/aly.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
export default function Presentacion() {
    return (
        <>
            <div className='flex flex-col items-center md:flex-row md:items-center md:justify-end md:mt-4 md:gap-x-10'>

                <div className="mt-5" >
                    <img src={Aly} alt="" className='w-[150px] rounded-full md:w-[150px] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' />
                </div>

                <div className="flex flex-col items-center gap-4 text-white mt-4">
                    <div className='flex flex-col items-center'>
                        <h1 className="text-2xl font-bold">Aly Danner</h1>
                        <p className="text-base text-[#12F2F2]">Artista Digital </p>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl text-white hover:text-[#12F2F2]" />
                        </a>

                        <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl text-white hover:text-[#12F2F2]" />
                        </a>

                        <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl text-white hover:text-[#12F2F2]" />
                        </a>

                        <a href="" className='text-2xl text-white hover:text-[#12F2F2]'>
                            <FaTiktok className="text-2xl text-white hover:text-[#12F2F2]" />
                        </a>

                        <a href="" className='text-2xl text-white hover:text-[#12F2F2]'>
                            <FaFacebook className="text-2xl text-white hover:text-[#12F2F2]" />
                        </a>

                        <a href="" className='text-2xl text-white hover:text-[#12F2F2]'>
                            <FaYoutube className="text-2xl text-white hover:text-[#12F2F2]" />
                        </a>
                    </div>

                </div>
            </div>

            <div></div>
        </>
    );
}