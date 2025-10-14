# OneColumnContent Component

A hero-style one-column content component that displays text content over a background image with support for CTA buttons and customizable overlay.

## Usage

```tsx
import { OneColumnContent } from '@anoopqb/simple-ui';

// Example with your API response data
const apiData = {
  "__component": "dynamic-zone.one-column-content",
  "id": 2,
  "title": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  "description": "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  "backgroundImage": {
    "id": 7,
    "documentId": "blz37e81u8kwz849xd5dlkan",
    "name": "pexels-haitham-almasari-3807865-33203777.jpg",
    "alternativeText": null,
    "caption": null,
    "width": 1920,
    "height": 1280,
    "formats": {
      "thumbnail": {
        "name": "thumbnail_pexels-haitham-almasari-3807865-33203777.jpg",
        "hash": "thumbnail_pexels_haitham_almasari_3807865_33203777_857d55ea08",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "path": null,
        "width": 234,
        "height": 156,
        "size": 9.65,
        "sizeInBytes": 9653,
        "url": "/uploads/thumbnail_pexels_haitham_almasari_3807865_33203777_857d55ea08.jpg"
      },
      "large": {
        "name": "large_pexels-haitham-almasari-3807865-33203777.jpg",
        "hash": "large_pexels_haitham_almasari_3807865_33203777_857d55ea08",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "path": null,
        "width": 1000,
        "height": 667,
        "size": 135.43,
        "sizeInBytes": 135433,
        "url": "/uploads/large_pexels_haitham_almasari_3807865_33203777_857d55ea08.jpg"
      }
    },
    "hash": "pexels_haitham_almasari_3807865_33203777_857d55ea08",
    "ext": ".jpg",
    "mime": "image/jpeg",
    "size": 391.95,
    "url": "/uploads/pexels_haitham_almasari_3807865_33203777_857d55ea08.jpg",
    "previewUrl": null,
    "provider": "local",
    "provider_metadata": null,
    "createdAt": "2025-09-25T04:06:01.686Z",
    "updatedAt": "2025-09-25T04:06:01.686Z",
    "publishedAt": "2025-09-25T04:06:01.687Z"
  },
  "cta": [
    {
      "id": 32,
      "label": "Read More",
      "url": "#",
      "target": "_self"
    }
  ]
};

function MyComponent() {
  return (
    <OneColumnContent
      title={apiData.title}
      description={apiData.description}
      backgroundImage={apiData.backgroundImage}
      cta={apiData.cta}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | The main heading text |
| `description` | `string` | - | The descriptive text content |
| `backgroundImage` | `BackgroundImageData \| null` | `null` | Background image data object |
| `cta` | `CTAButton[]` | `[]` | Array of call-to-action buttons |
| `className` | `string` | `''` | Additional CSS classes |
| `overlayOpacity` | `number` | `0.4` | Opacity of the dark overlay (0-1) |
| `textAlign` | `'left' \| 'center' \| 'right'` | `'center'` | Text alignment |

## Features

- **Hero Section Design**: Perfect for hero sections and feature highlights
- **Background Image Support**: Automatically selects optimal image format
- **Customizable Overlay**: Adjustable dark overlay for better text readability
- **Flexible Text Alignment**: Support for left, center, or right alignment
- **Multiple CTAs**: Support for multiple call-to-action buttons
- **Responsive Design**: Mobile-first responsive layout
- **Accessibility**: High contrast and reduced motion support
- **Fallback Styling**: Beautiful gradient background when no image is provided
- **TypeScript Support**: Full type definitions included

## Advanced Usage

```tsx
// Custom overlay and alignment
<OneColumnContent
  title="Custom Hero Section"
  description="This is a custom hero with left alignment and lighter overlay"
  backgroundImage={backgroundImageData}
  cta={ctaButtons}
  overlayOpacity={0.2}
  textAlign="left"
  className="custom-hero"
/>

// Without background image (uses gradient fallback)
<OneColumnContent
  title="No Background Image"
  description="This will use a beautiful gradient background"
  cta={ctaButtons}
/>
```

## Styling

The component includes comprehensive styling but can be customized by overriding the CSS classes:

- `.one-column-content` - Main container
- `.one-column-content--no-image` - Fallback gradient styling
- `.one-column-content__overlay` - Dark overlay
- `.one-column-content__content` - Content container
- `.one-column-content__title` - Title heading
- `.one-column-content__description` - Description text
- `.one-column-content__cta-container` - CTA buttons container
- `.one-column-content__cta` - Individual CTA button

## Accessibility Features

- Text shadows for better readability over images
- High contrast mode support
- Reduced motion support for animations
- Proper focus states for interactive elements
- Semantic HTML structure
