
import Aly from '../../assets/images/aly.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
export default function Presentacion() {
    return (
        <>
            <div className='flex flex-col items-center md:flex-row md:items-center md:justify-end md:mt-4 md:gap-x-10'>

                <div className="mt-5" >
                    <img src={Aly} alt="" className='rounded-full shadow-2xl shadow-black w-[150px] md:w-[150px]' />
                </div>

                <div className="flex flex-col items-center gap-4 text-white mt-4">
                    <div className='flex flex-col items-center'>
                        <h1 className="text-2xl font-bold">Aly Danner</h1>
                        <p className="text-base text-[#12F2F2] text-center">Software Developer / Filmmaker</p>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <div className='videos tarjeta flex flex-row gap-3'>
                            <a href="https://github.com/DannerAly" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl text-white hover:text-[#12F2F2]" />
                            </a>
                            <a href="https://www.linkedin.com/in/aly-danner" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl text-white hover:text-[#12F2F2]" />
                            </a>
                            <a href="https://www.instagram.com/aly_danner" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl text-white hover:text-[#12F2F2]" />
                            </a>
                            <a href="https://www.tiktok.com/@aly_danner" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="text-2xl text-white hover:text-[#12F2F2]" />
                            </a>
                            <a href="https://www.facebook.com/abelalydel" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl text-white hover:text-[#12F2F2]" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCtJgySARiqFdnpMjmHaZJ8Q" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-2xl text-white hover:text-[#12F2F2]" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div></div>
        </>
    );
}