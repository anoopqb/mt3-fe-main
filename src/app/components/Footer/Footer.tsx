import "./Footer.css";
import Image from "next/image";

export interface FooterProps {
    Logo: string;
    AddressLane1: string;
    AddressLane2: string;
    ZipCode: string;
    PhoneNumber: string;
    OfficeHours: string;
}

const Footer = ({
    Logo,
    AddressLane1,
    AddressLane2,
    ZipCode,
    PhoneNumber,
    OfficeHours,
}: FooterProps) => {
    return (
        <footer className="simple-ui-footer">
            <div className="footer-inner">
                <div className="footer-section">
                    <div className="footer-logo"><Image src={Logo} alt="Logo" width={100} height={100} /></div>
                    <div className="footer-content">
                        <p className="footer-address">
                            {AddressLane1}
                            <br />
                            {AddressLane2}, {ZipCode}

                        </p>
                        {PhoneNumber && (
                            <p className="footer-contact">
                                <strong>Phone:</strong> <a href={`tel:${PhoneNumber}`}>{PhoneNumber}</a>
                            </p>
                        )}
                    </div>
                </div>

                <div className="footer-section office-hours">
                    <h3 className="footer-title">Office Hours</h3>
                    <div className="footer-content ">
                        <div dangerouslySetInnerHTML={{ __html: OfficeHours }} />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

