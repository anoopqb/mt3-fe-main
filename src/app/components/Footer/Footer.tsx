import "./Footer.css";

export interface FooterProps {
    propertyName: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
    officeHours: {
        weekdays: string;
        saturday?: string;
        sunday?: string;
    };
    primaryColor: string;
    phone?: string;
    email?: string;
}

const Footer = ({
    propertyName,
    address,
    officeHours,
    primaryColor,
    phone,
    email,
}: FooterProps) => {
    return (
        <footer className="simple-ui-footer" style={{ backgroundColor: primaryColor }}>
            <div className="footer-inner">
                <div className="footer-section">
                    <h3 className="footer-title">{propertyName}</h3>
                    <div className="footer-content">
                        <p className="footer-address">
                            {address.street}
                            <br />
                            {address.city}, {address.state} {address.zipCode}
                        </p>
                        {phone && (
                            <p className="footer-contact">
                                <strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a>
                            </p>
                        )}
                        {email && (
                            <p className="footer-contact">
                                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
                            </p>
                        )}
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Office Hours</h3>
                    <div className="footer-content">
                        <p className="footer-hours">
                            <strong>Monday - Friday:</strong> {officeHours.weekdays}
                        </p>
                        {officeHours.saturday && (
                            <p className="footer-hours">
                                <strong>Saturday:</strong> {officeHours.saturday}
                            </p>
                        )}
                        {officeHours.sunday && (
                            <p className="footer-hours">
                                <strong>Sunday:</strong> {officeHours.sunday}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {propertyName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

