'use client';

import { useEffect, useRef } from 'react';
import './FeeCalc.css';

export interface FeeCalcProps {
    propertyID: string;
    siteID?: string;
}

// Declare the global function type
declare global {
    interface Window {
        initExpenseEmbed: (config: {
            siteID: string;
            containerClass: string;
            accordion: boolean;
            disclaimer: boolean;
        }) => void;
    }
}

const FeeCalc = ({
    propertyID,
    siteID = ''
}: FeeCalcProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        // Only load script once
        if (scriptLoadedRef.current) {
            return;
        }

        // Create and load the external script
        const script = document.createElement('script');
        script.src = 'https://communityfees.bozzuto.com/assets/js/expense-embed.js';
        script.setAttribute('data-property-id', propertyID);
        script.async = true;

        script.onload = () => {
            // Initialize the embed once the script is loaded
            if (typeof window.initExpenseEmbed === 'function') {
                window.initExpenseEmbed({
                    siteID: propertyID,
                    containerClass: 'expense-display',
                    accordion: true,
                    disclaimer: true,
                });
            }
        };

        script.onerror = () => {
            console.error('Failed to load expense-embed.js script');
        };

        document.body.appendChild(script);
        scriptLoadedRef.current = true;

        // Cleanup function
        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            scriptLoadedRef.current = false;
        };
    }, [propertyID, siteID]);

    return (
        <div className="fee-calc" ref={containerRef}>
            <div className="expense-display" data-accordion="true" data-multiple="true"></div>
        </div>
    );
};

export default FeeCalc;