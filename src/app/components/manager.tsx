import React from 'react';
import { DynamicZoneManager } from '@anoopqb/simple-ui';

interface DynamicZoneComponent {
    id: number;
    __component: string;
    [key: string]: any;
}

interface Props {
    dynamicZone: DynamicZoneComponent[];
}

const DynamicZoneManagerWrapper: React.FC<Props> = ({ dynamicZone }) => {
    // Get the base image URL from environment variable
    const baseImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL || '';

    return (
        <DynamicZoneManager
            dynamicZone={dynamicZone}
            baseImageUrl={baseImageUrl}
        />
    );
};

export default DynamicZoneManagerWrapper;