export interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}

export interface ImageFormats {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
}

export interface BackgroundImageData {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface CTAButton {
    id: number;
    label: string;
    url: string;
    target: '_self' | '_blank' | '_parent' | '_top';
}

export interface OneColumnContentProps {
    __component?: string;
    id?: number;
    title: string;
    description: string;
    backgroundImage?: BackgroundImageData | null;
    cta?: CTAButton[];
    className?: string;
    overlayOpacity?: number;
    textAlign?: 'left' | 'center' | 'right';
    disclaimer?: string;
    propertyID?: string;
    feeCalculator?: any | null;
}

export interface FeeCalculator {
    id: number;
    disable: boolean;
}