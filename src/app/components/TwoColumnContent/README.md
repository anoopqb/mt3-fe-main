# TwoColumnContent Component

A flexible two-column content component that displays text content alongside an image, with support for CTA buttons and column reversal.

## Usage

```tsx
import { TwoColumnContent } from '@anoopqb/simple-ui';

// Example with your API response data
const apiData = {
  "__component": "dynamic-zone.two-column-content",
  "id": 3,
  "title": "Building Community",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "reverse_column": null,
  "cta": [
    {
      "id": 27,
      "label": "See more",
      "url": "#",
      "target": "_self"
    }
  ],
  "image": [
    {
      "id": 6,
      "documentId": "wc0zkcij6ftxq94ub2kxvk29",
      "name": "0f3eda29f8d0c59ae3857c3928c90e3e2da26171.jpg",
      "alternativeText": null,
      "caption": null,
      "width": 1920,
      "height": 1492,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_0f3eda29f8d0c59ae3857c3928c90e3e2da26171.jpg",
          "hash": "thumbnail_0f3eda29f8d0c59ae3857c3928c90e3e2da26171_cf994f35b5",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 201,
          "height": 156,
          "size": 11.44,
          "sizeInBytes": 11441,
          "url": "/uploads/thumbnail_0f3eda29f8d0c59ae3857c3928c90e3e2da26171_cf994f35b5.jpg"
        },
        "medium": {
          "name": "medium_0f3eda29f8d0c59ae3857c3928c90e3e2da26171.jpg",
          "hash": "medium_0f3eda29f8d0c59ae3857c3928c90e3e2da26171_cf994f35b5",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 750,
          "height": 583,
          "size": 108.16,
          "sizeInBytes": 108157,
          "url": "/uploads/medium_0f3eda29f8d0c59ae3857c3928c90e3e2da26171_cf994f35b5.jpg"
        }
      },
      "hash": "0f3eda29f8d0c59ae3857c3928c90e3e2da26171_cf994f35b5",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 436.81,
      "url": "/uploads/0f3eda29f8d0c59ae3857c3928c90e3e2da26171_cf994f35b5.jpg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2025-09-24T09:23:41.729Z",
      "updatedAt": "2025-09-24T09:23:41.729Z",
      "publishedAt": "2025-09-24T09:23:41.730Z"
    }
  ]
};

function MyComponent() {
  return (
    <TwoColumnContent
      title={apiData.title}
      description={apiData.description}
      reverse_column={apiData.reverse_column}
      cta={apiData.cta}
      image={apiData.image}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | The main heading text |
| `description` | `string` | - | The descriptive text content |
| `reverse_column` | `boolean \| null` | `false` | Whether to reverse the column order (image first) |
| `cta` | `CTAButton[]` | `[]` | Array of call-to-action buttons |
| `image` | `ImageData[]` | `[]` | Array of images (uses first image) |
| `className` | `string` | `''` | Additional CSS classes |

## Features

- **Responsive Design**: Automatically stacks columns on mobile devices
- **Smart Image Optimization**: Automatically selects the best available image format
- **Flexible Layout**: Supports column reversal for design variety
- **Multiple CTAs**: Support for multiple call-to-action buttons
- **Accessibility**: Proper alt text and semantic markup
- **TypeScript Support**: Full type definitions included

## Styling

The component includes default styling but can be customized by overriding the CSS classes:

- `.two-column-content` - Main container
- `.two-column-content.reverse` - Reversed layout
- `.two-column-content__text` - Text content container
- `.two-column-content__image` - Image container
- `.two-column-content__title` - Title heading
- `.two-column-content__description` - Description text
- `.two-column-content__cta-container` - CTA buttons container
- `.two-column-content__cta` - Individual CTA button
