import "./Header.css";
import Image from "next/image";

export interface HeaderProps {
  Logo: string;
  topNavItems: { id: number; MenuItem: string; url: string; target: string }[];
  primaryColor: string;
}

const Header = ({ Logo, topNavItems, primaryColor }: HeaderProps) => {
  return (
    <header className="simple-ui-header" style={{ backgroundColor: primaryColor }}>
      <div className="header-inner">
        <div className="header-logo">
          <div><Image src={Logo} alt="Logo" width={100} height={100} /></div>
        </div>
        <nav className="header-nav">
          {topNavItems.map((item) => (
            <a key={item.id} href={item.url} target={item.target} className="header-menu-item">
              {item.MenuItem}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;