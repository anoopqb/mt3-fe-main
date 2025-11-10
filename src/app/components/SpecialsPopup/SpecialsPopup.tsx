'use client';

import React, { useEffect, useState } from 'react';
import "./SpecialsPopup.css";

interface ButtonData {
    id: number;
    label: string;
    url: string;
    target?: string;
    variant?: 'primary' | 'secondary';
}

export interface SpecialsPopupProps {
    title: string;
    description: string;
    buttons?: ButtonData[];
    showOnLoad?: boolean;
    delay?: number;
}

const SpecialsPopup = ({
    title,
    description,
    buttons = [],
    showOnLoad = true,
    delay = 1000
}: SpecialsPopupProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (showOnLoad) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [showOnLoad, delay]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="specials-popup-overlay" onClick={handleOverlayClick}>
            <div className="specials-popup">
                <button
                    className="specials-popup__close"
                    onClick={handleClose}
                    aria-label="Close popup"
                >
                    &times;
                </button>

                <div className="specials-popup__content">
                    <h2 className="specials-popup__title">{title}</h2>
                    <p className="specials-popup__description">{description}</p>

                    {buttons && buttons.length > 0 && (
                        <div className="specials-popup__buttons">
                            {buttons.map((button) => (
                                <a
                                    key={button.id}
                                    href={button.url}
                                    target={button.target || '_self'}
                                    className={`specials-popup__button specials-popup__button--${button.variant || 'primary'}`}
                                    onClick={handleClose}
                                >
                                    {button.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpecialsPopup;

