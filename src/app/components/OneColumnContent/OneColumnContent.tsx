import React from 'react';
import { OneColumnContentProps, BackgroundImageData } from './types';
import './OneColumnContent.css';

import FeeCalc from '../FeeCalc';

const OneColumnContent: React.FC<OneColumnContentProps> = ({
    title,
    description,
    backgroundImage = null,
    cta = [],
    className = '',
    overlayOpacity = 0.4,
    textAlign = 'center',
    propertyID = 'CB3DB4',
    feeCalculator = null,
    disclaimer = '*Restrictions May Apply',
}) => {
    const getOptimalImageUrl = (imageData: BackgroundImageData): string => {
        // Return the best available image format for background, preferring large > medium > original > small
        return imageData.url;
    };


    console.log(feeCalculator);

    const containerClasses = [
        'one-column-content',
        !backgroundImage ? 'one-column-content--no-image' : '',
        className
    ].filter(Boolean).join(' ');

    const contentClasses = [
        'one-column-content__content',
        `text-${textAlign}`
    ].join(' ');

    const containerStyle: React.CSSProperties = backgroundImage
        ? {
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}${getOptimalImageUrl(backgroundImage)})`,
        }
        : {};

    const overlayStyle: React.CSSProperties = {
        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    };

    const renderCTAButtons = () => {
        if (!cta || cta.length === 0) return null;

        return (
            <div className="one-column-content__cta-container">
                {cta.map((button) => (
                    <a
                        key={button.id}
                        href={button.url}
                        target={button.target}
                        rel={button.target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="one-column-content__cta"
                    >
                        {button.label}
                    </a>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className={containerClasses} style={containerStyle}>
                {backgroundImage && (
                    <div
                        className="one-column-content__overlay"
                        style={overlayStyle}
                    />
                )}
                <div className={contentClasses}>
                    <h2 className="one-column-content__title">{title}</h2>
                    <p className="one-column-content__description">{description}</p>
                    {renderCTAButtons()}

                    {/* <p className='one-column-content__disclaimer'>{disclaimer}</p> */}
                </div>





            </div>

            {feeCalculator === null && <FeeCalc propertyID={propertyID} />}
        </>
    );
};

export default OneColumnContent;
