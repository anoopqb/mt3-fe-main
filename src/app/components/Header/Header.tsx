import "./Header.css";

export interface HeaderProps {
  propertyName: string;
  topNavItems: { id: number; label: string; url: string; target: string }[];
  primaryColor: string;
}

const Header = ({ propertyName, topNavItems, primaryColor }: HeaderProps) => {
  return (
    <header className="simple-ui-header" style={{ backgroundColor: primaryColor }}>
      <div className="header-inner">
        <div className="header-logo">
          <h1>{propertyName}</h1>
        </div>
        <nav className="header-nav">
          {topNavItems.map((item) => (
            <a key={item.id} href={item.url} target={item.target} className="header-menu-item">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;