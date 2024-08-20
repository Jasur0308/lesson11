import './Details.css';
import logo from '../../images/logo.svg';
import avatar from '../../images/avatar.svg';
import row from '../../images/row.svg';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';
import figma from '../../images/figma.svg';
import { useTranslation } from 'react-i18next';

const Details = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className='details max-w-[1152px] bg-[#F9F4EC] my-0 mx-auto pt-[17px] pb-[35px]'>
      <div className="container">
        <div className="details__navbar flex justify-between items-center">
          <img src={logo} alt="Logo" />
          <select className='bg-transparent' onChange={handleChangeLanguage} defaultValue={i18n.language}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </div>
        <h3 className='mt-[37px] font-[Poppins] font-bold text-[48px] leading-[72px] text-[#201F1F] text-center'>{t("title")}</h3>
        <div className="author flex justify-center mt-[19px] gap-[7px] items-center">
          <img className='rounded-3xl' src={avatar} alt="Author Avatar" />
          <div className="author__content flex flex-col">
            <span>Ben Klutsey</span>
            <span className='font-[Poppins] text-[8px] leading-[12px]'>{t("date")}</span>
          </div>
        </div>
        <div className="more mt-[66px] max-w-[558px] mx-auto">
          <img src={'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff041c4ac-1543-4a40-bb55-5174b4aa26db_1417x800.jpeg'} alt="Banner" />
          <p className='mt-[37px] font-[Poppins] text-[18px] leading-[27px] text-justify text-[#201F1F]'>
            <span>
              {t("more-1")}
            </span>
            <br />
            <span>
              {t("more-2")}
            </span>
          </p>
        </div>
        <div className="flex justify-end">
          <a href='#' className='button flex gap-[7px] items-center max-w-[150px]'>
            <span className='font-[Poppins] font-[600] text-[12px] leading-[18px] text-[#000000]'>{t("button")}</span>
            <img src={row} alt="Back to top arrow" />
          </a>
        </div>
        <div className="blog__footer flex justify-between mt-[45px] items-center">
          <h4 className='font-[Poppins] font-[600] text-[12px] leading-[18px] text-[#000000]'>{t("footer-h4")}</h4>
          <a className='underline font-[Poppins] font-[600] text-[12px] leading-[18px] text-[#000000]' href="mailto:gblog@gmail.com">gblog@gmail.com</a>
          <div className="footer__webs flex items-center gap-[14px]">
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={github} alt="GitHub" />
            </a>
            <a href="#">
              <img src={figma} alt="Figma" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;