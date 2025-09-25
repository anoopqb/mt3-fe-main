import React from 'react';
import { Hero, TwoColumnContent, OneColumnContent } from '@anoopqb/simple-ui';


interface DynamicZoneComponent {
    id: number;
    __component: string;
    [key: string]: any;
}

interface Props {
    dynamicZone: DynamicZoneComponent[];
}


const componentMapping: { [key: string]: React.ComponentType<any> } = {
    'dynamic-zone.hero': Hero,
    'dynamic-zone.two-column-content': TwoColumnContent,
    'dynamic-zone.one-column-content': OneColumnContent,
}


const DynamicZoneManager: React.FC<Props> = ({ dynamicZone }) => {
    // Get the base image URL from environment variable
    const baseImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL || '';

    return (
        <>
            {dynamicZone.map((componentData, index) => {
                const Component = componentMapping[componentData.__component];
                if (!Component) {
                    console.warn(`No component found for: ${componentData.__component}`);
                    return null;
                }

                // Add baseImageUrl to components that need it
                const propsWithImageUrl = {
                    ...componentData,
                    ...(componentData.__component === 'dynamic-zone.hero' ||
                        componentData.__component === 'dynamic-zone.two-column-content'
                        ? { baseImageUrl } : {})
                };

                return <Component key={index} {...propsWithImageUrl} />;
            })}
        </>
    );
};

export default DynamicZoneManager;