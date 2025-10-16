import React from 'react';
import OneColumnContent from '@/app/components/OneColumnContent';
import TwoColumnContent from '@/app/components/TwoColumnContent';
import Hero from '@/app/components/Hero';
import FeeCalc from '@/app/components/FeeCalc';

interface DynamicZoneComponent {
    id: number;
    __component: string;
    [key: string]: any;
}

export interface DynamicZoneManagerProps {
    dynamicZone: DynamicZoneComponent[];
    baseImageUrl?: string;
    propertyID?: string;
}

const componentMapping: { [key: string]: React.ComponentType<any> } = {
    'dynamic-zone.hero': Hero,
    'dynamic-zone.two-column-content': TwoColumnContent,
    'dynamic-zone.one-column-content': OneColumnContent,
    'dynamic-zone.fee-calc': FeeCalc,
};

const DynamicZoneManager: React.FC<DynamicZoneManagerProps> = ({
    dynamicZone,
    baseImageUrl = 'http://localhost:1337',
    propertyID = ''
}) => {
    return (
        <>
            {dynamicZone.map((componentData, index) => {
                const Component = componentMapping[componentData.__component];
                if (!Component) {
                    console.warn(`No component found for: ${componentData.__component}`);
                    return null;
                }

                // Add baseImageUrl and propertyID to components that need them
                const propsWithExtras = {
                    ...componentData,
                    ...(componentData.__component === 'dynamic-zone.hero' ||
                        componentData.__component === 'dynamic-zone.two-column-content'
                        ? { baseImageUrl } : {}),
                    ...(componentData.__component === 'dynamic-zone.one-column-content'
                        ? { propertyID } : {})
                };

                return <Component key={index} {...propsWithExtras} />;
            })}
        </>
    );
};

export default DynamicZoneManager;
