import "./Hero.css";
import Image from "next/image";

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

interface VideoData {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
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
    image?: ImageData[];
    Video?: VideoData;
    HeroType: 'Image' | 'Video';
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
    Video,
    HeroType,
    cta,
    height = "",
    overlay = true,
    textAlign = "center",
    baseImageUrl = ""
}: HeroProps) => {
    // Get the best available image URL
    const getImageUrl = (imageData: ImageData) => {
        let url = imageData.url;
        return baseImageUrl ? `${baseImageUrl}${url}` : url;
    };

    const getVideoUrl = (videoData: VideoData) => {
        return baseImageUrl ? `${baseImageUrl}${videoData.url}` : videoData.url;
    };

    return (
        <section
            className={`simple-ui-hero simple-ui-hero--${textAlign}`}
            style={{ height }}
        >
            {/* Render Image or Video based on HeroType */}
            {HeroType === 'Image' && image && image.length > 0 && (
                <div className="simple-ui-hero__media">
                    <Image
                        src={getImageUrl(image[0])}
                        alt={image[0].alternativeText || title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            )}

            {HeroType === 'Video' && Video && (
                <div className="simple-ui-hero__media">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    >
                        <source src={getVideoUrl(Video)} type={Video.mime} />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

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


        </section >
    );
};

export default Hero;
