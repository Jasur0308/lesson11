import './Blog.css';
import logo from '../../images/logo.svg';
import avatar from '../../images/avatar.svg';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';
import figma from '../../images/figma.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="blog max-w-[1152px] w-full my-0 mx-auto bg-[#F9F4EC] h-screen pt-[17px] pb-[25px]">
      <div className="container">
        <div className="blog__navbar flex justify-between items-center">
          <img src={logo} alt="Logo" />
          <h3 className="font-[Poppins] font-bold text-[24px] leading-[2.25rem] text-[#201F1F] underline decoration-solid">
            {t('nav-h3')}
          </h3>
          <select
            className="bg-transparent"
            onChange={handleChangeLanguage}
            defaultValue={i18n.language}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </div>

        <div className="blog__cards flex flex-wrap mt-[52px]">
          <div className="card max-w-[210px] pl-[5px] pt-[5px] pr-[15px]">
            <div className="card-1 max-w-[190px] w-full pb-[24px]">
              <h3 className="font-bold text-[30px] leading-[34.5px] text-justify">
                {t("article-1-title")}
              </h3>
              <p className="font-[Poppins] leading-[15px] font-normal text-justify text-[10px] text-[#000000] mt-[13px]">
                {t("article-1-p")}
              </p>
              <div className="card-1__bottom mt-[7px] flex items-center gap-[7px]">
                <img src={avatar} alt="Avatar" />
                <div className="bottom__content flex flex-col">
                  <strong className="font-[Poppins] font-[600] leading-[18px] text-[12px] text-[#000000]">John Mac Ghlionn</strong>
                  <span className="font-[Poppins] font-[400] leading-[12px] text-[8px] text-[#000000]">{t("date")}</span>
                </div>
              </div>
            </div>
            <div className="card-2 max-w-[190px] w-full pb-[22px] mt-[9px]">
              <h3 className="font-bold text-[30px] leading-[34.5px]">
              {t("article-2-title")}
              </h3>
              <p className="font-[Poppins] leading-[15px] font-normal text-justify text-[10px] text-[#000000] mt-[13px]">
              {t("article-2-p")}
              </p>
            </div>
          </div>

          <div className="card max-w-[275px] w-full pl-[14px] pr-[11px] pb-[22px]">
            <div className="card-3 max-w-[250px] w-full pb-[33px]">
              <Link to="/details/1">
                <img src={'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff041c4ac-1543-4a40-bb55-5174b4aa26db_1417x800.jpeg'} alt="Card 1" />
              </Link>
              <div className="card-3__content mt-[9px]">
                <h3 className="font-[700] text-[30px] leading-[34.5px]">
                {t("article-3-title")}
                </h3>
                <p className="font-[Poppins] leading-[18px] font-normal text-justify text-[12px] text-[#000000] mt-[13px]">
                {t("article-3-p")}
                </p>
                <div className="card-1__bottom mt-[29px] flex items-center gap-[7px]">
                  <img src={avatar} alt="Avatar" />
                  <div className="bottom__content flex flex-col">
                    <strong className="font-[Poppins] font-[600] leading-[18px] text-[12px] text-[#000000]">Ben Klutsey</strong>
                    <span className="font-[Poppins] font-[400] leading-[12px] text-[8px] text-[#000000]">{t("date")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card max-w-[210px] w-full px-[10px]">
            <div className="card-4 max-w-[190px] w-full pb-[17px]">
              <Link to='/details/2'><img src={'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F36a0ab15-51fb-4bd7-93a8-9b332c56db8f_6950x4633.jpeg'} alt="Card 2" /></Link>
              <div className="card-4__content mt-[15px]">
                <h3 className="font-[700] text-[20px] leading-[23px] text-justify text-[#000000]">
                {t("article-4-title")}
                </h3>
                <p className="font-[Poppins] text-[12px] leading-[18px] text-[#000000]">
                  By <span className="text-[#EE5626]">John Mac Ghlionn</span>
                </p>
              </div>
            </div>
            <div className="card-4 max-w-[190px] w-full pb-[17px] mt-[21px]">
              <Link to='/details/3'><img src={'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7c4a2d2-c8b1-4785-bd0f-4f5e0516d9c0_4000x2627.jpeg'} alt="Card 3" /></Link>
              <div className="card-4__content mt-[15px]">
                <h3 className="font-[700] text-[20px] leading-[23px] text-justify text-[#000000]">
                {t("article-5-title")}
                </h3>
                <p className="font-[Poppins] text-[10px] leading-[15px] text-justify text-[#000000] mt-[1px]">
                {t("article-5-p")}
                </p>
                <p className="font-[Poppins] text-[12px] leading-[18px] text-[#000000] mt-[6px]">
                  By <span className="text-[#EE5626]">Husni Ramdani</span>
                </p>
              </div>
            </div>
          </div>

          <div className="card max-w-[275px] w-full pt-[3px] pl-[12px] pr-[13px] pb-[12px]">
            <div className="card-1 max-w-[250px] w-full pb-[23px]">
              <h3 className="font-bold text-[30px] leading-[34.5px]">
              {t("article-6-title")}
              </h3>
              <p className="font-[Poppins] leading-[15px] text-justify text-[10px] text-[#000000] mt-[4px]">
              {t("article-6-p")}
              </p>
              <div className="card-1__bottom mt-[5px] flex items-center gap-[7px]">
                <img src={avatar} alt="Avatar" />
                <div className="bottom__content flex flex-col">
                  <strong className="font-[Poppins] font-[600] leading-[18px] text-[12px] text-[#000000]">Jennifer Tiedemann</strong>
                  <span className="font-[Poppins] font-[400] leading-[12px] text-[8px] text-[#000000]">{t("date")}</span>
                </div>
              </div>
            </div>
            <div className="card-1 max-w-[250px] w-full pb-[23px] mt-[22px]">
              <h3 className="font-bold text-[30px] leading-[34.5px]">
              {t("article-7-title")}
              </h3>
              <p className="font-[Poppins] leading-[15px] text-justify text-[10px] text-[#000000] mt-[4px]">
              {t("article-7-p")}
              </p>
              <div className="card-1__bottom mt-[5px] flex items-center gap-[7px]">
                <img src={avatar} alt="Avatar" />
                <div className="bottom__content flex flex-col">
                  <strong className="font-[Poppins] font-[600] leading-[18px] text-[12px] text-[#000000]">Gabrielle Bauer</strong>
                  <span className="font-[Poppins] font-[400] leading-[12px] text-[8px] text-[#000000]">{t("date")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog__footer flex justify-between mt-[26px] items-center">
            <h4 className='font-[Poppins] font-[600] text-[12px] leading-[18px] text-[#000000]'>{t("footer-h4")}</h4>
            <a className='underline font-[Poppins] font-[600] text-[12px] leading-[18px] text-[#000000]' href="#">gblog@gmail.com</a>
            <div className="footer__webs flex items-center gap-[14px]">
                <a href="#">
                    <img src={twitter} alt="" />
                </a>
                <a href="#">
                    <img src={github} alt="" />
                </a>
                <a href="#">
                    <img src={figma} alt="" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;