import { FaUser } from 'react-icons/fa';
import logoImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src={logoImg} alt="Logo" className="h-12 w-12 ml-5 mt-2 rounded-full" />
          <span className="text-black font-bold text-lg ml-2"></span>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-10 font-bold justify-end">
            <li>
              <a href="#beranda" className="text-grey-900 hover:text-blue-900">
                Beranda
              </a>
            </li>
            <li>
              <a href="#tentang" className="text-grey-900 hover:text-blue-900">
                Tentang
              </a>
            </li>
            <li>
              <a href="#kontak" className="text-grey-900 hover:text-blue-900">
                Kontak
              </a>
            </li>
          </ul>
          <a href="#profil" className="bg-transparent mr-8 ml-10">
            <FaUser className="text-grey-900 text-xl hover:text-blue-900" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;