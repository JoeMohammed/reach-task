import Image from 'components/utils/image';
import { Link } from 'react-router-dom';
import LogoImg from 'assets/global/youtube-logo.png';
import smallLogo from 'assets/global/small-logo.png';
import SearchForm from 'components/forms/search';
import useScrolling from 'hooks/useScrolling';

export default function Header() {
  const { scrollTop } = useScrolling();

  return (
    <header className={scrollTop ? 'fixed' : ''}>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar_logo">
            {/* <picture>
              <source media="(min-width: 768px)" srcSet={LogoImg} />
              <Image width={234} height={102} src={smallLogo} alt="Logo" />
            </picture> */}
            <picture>
              <source
                srcSet={LogoImg}
                media="(min-width: 768px)"
              />
              <img src={smallLogo} alt="" />
            </picture>
            {/* <Image width={234} height={102} src={LogoImg} alt="Logo" /> */}
          </Link>
          <div className="navbar_serchForm">
            <SearchForm />
          </div>
        </div>
      </nav>
    </header>
  );
}
