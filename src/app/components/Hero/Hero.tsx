import "./Hero.css";

interface ImageFormat {
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

interface ImageData {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail?: ImageFormat;
        small?: ImageFormat;
        medium?: ImageFormat;
        large?: ImageFormat;
    };
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

interface CTAData {
    id: number;
    label: string;
    url: string;
    target: string;
}

export interface HeroProps {
    title: string;
    description?: string;
    image: ImageData[];
    cta: CTAData[];
    height?: string;
    overlay?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    baseImageUrl?: string;
}

const Hero = ({
    title,
    description,
    image,
    cta,
    height = "",
    overlay = true,
    textAlign = "center",
    baseImageUrl = ""
}: HeroProps) => {
    // Get the best available image URL - prioritize larger formats for hero background
    const getImageUrl = (imageData: ImageData) => {
        let url = imageData.url;

        return baseImageUrl ? `${baseImageUrl}${url}` : url;
    };

    const backgroundImageUrl = image && image.length > 0 ? getImageUrl(image[0]) : '';

    return (
        <section
            className={`simple-ui-hero simple-ui-hero--${textAlign}`}
            style={{
                backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
                height
            }}
        >
            {overlay && <div className="simple-ui-hero__overlay" />}
            <div className="simple-ui-hero__content">
                <h1 className="simple-ui-hero__title">{title}</h1>
                {description && (
                    <p className="simple-ui-hero__subtitle">{description}</p>
                )}
                {cta && cta.length > 0 && (
                    <div className="simple-ui-hero__cta-container">
                        {cta.map((ctaItem) => (
                            <a
                                key={ctaItem.id}
                                href={ctaItem.url}
                                target={ctaItem.target}
                                className="simple-ui-hero__cta"
                            >
                                {ctaItem.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
