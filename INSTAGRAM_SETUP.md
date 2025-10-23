# Instagram Integration Setup Guide

This guide explains how to connect your Instagram photos from [@fancyflorist_kh](https://www.instagram.com/fancyflorist_kh/) to display in an 8-photo grid on your Fancy Florist website.

## Overview

The Instagram integration has been implemented with the following features:
- ✅ 8-photo grid layout (4x2 on desktop, 2x4 on mobile)
- ✅ Responsive design for all screen sizes
- ✅ Loading spinner while fetching photos
- ✅ Error handling with retry functionality
- ✅ Fallback photos if Instagram API fails
- ✅ Click-to-open Instagram functionality

## Setup Options

### Option 1: Instagram Basic Display API (Recommended for Production)

1. **Create Instagram App:**
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app and select "Consumer" type
   - Add "Instagram Basic Display" product to your app

2. **Get Access Token:**
   - Follow Instagram's [Basic Display API guide](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)
   - Generate a long-lived access token (valid for 60 days)

3. **Update Configuration:**
   - Open `script.js`
   - Find the `INSTAGRAM_CONFIG` object
   - Replace `YOUR_INSTAGRAM_ACCESS_TOKEN` with your actual token
   - Set `useThirdParty: false`

### Option 2: Third-Party Widget Services (Easier Setup)

For easier setup without API configuration, you can use third-party services:

1. **SnapWidget** (Recommended):
   - Visit [snapwidget.com](https://snapwidget.com/instagram-grid-widget)
   - Connect your Instagram account
   - Customize to show 8 photos
   - Copy the embed code and replace the Instagram section in `index.html`

2. **EmbedSocial**:
   - Visit [embedsocial.com](https://embedsocial.com/templates/instagram-grid-gallery-widget/)
   - Create an Instagram grid widget
   - Set to display 8 photos
   - Replace the Instagram section with the provided code

3. **Elfsight**:
   - Visit [elfsight.com](https://elfsight.com/instagram-feed-instashow/templates/instagram-grid/)
   - Create Instagram Grid widget
   - Configure for 8 photos
   - Embed the code

### Option 3: Current Fallback (No Setup Required)

The current implementation uses high-quality flower photos from Unsplash as fallback images. This works immediately without any setup.

## Customization

### Changing the Grid Layout

To modify the grid layout, edit the CSS in `styles.css`:

```css
.instagram-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
    gap: 1.5rem; /* Space between photos */
}
```

### Mobile Responsiveness

The grid automatically adapts:
- Desktop: 4x2 grid (4 columns, 2 rows)
- Tablet: 2x4 grid (2 columns, 4 rows)  
- Mobile: 2x4 grid (2 columns, 4 rows)

### Styling Photos

Customize photo appearance in `styles.css`:

```css
.instagram-item {
    aspect-ratio: 1; /* Square photos */
    border-radius: var(--radius);
    transition: all 0.3s ease;
}

.instagram-item:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-accent);
}
```

## Troubleshooting

### Photos Not Loading

1. **Check Console Errors:**
   - Open browser developer tools (F12)
   - Look for JavaScript errors in the Console tab

2. **Verify Access Token:**
   - Ensure your Instagram access token is valid
   - Check if the token has expired (tokens expire after 60 days)

3. **CORS Issues:**
   - Instagram API may have CORS restrictions
   - Consider using a backend proxy server

### Fallback to Third-Party Service

If the API approach doesn't work, switch to a third-party service:

1. Set `useThirdParty: true` in the configuration
2. Or replace the entire Instagram section with a widget embed code

## Security Notes

- Never expose your Instagram access token in client-side code for production
- Consider using a backend server to proxy Instagram API requests
- Use environment variables for sensitive credentials

## Performance Optimization

- Photos are loaded with `loading="lazy"` for better performance
- Images are automatically optimized for web display
- The grid uses CSS Grid for optimal layout performance

## Support

For technical support:
- Check the browser console for error messages
- Verify your Instagram account is public (required for API access)
- Ensure your Instagram app has the correct permissions

## Next Steps

1. Choose your preferred setup method (API or third-party service)
2. Follow the setup instructions for your chosen method
3. Test the integration on different devices
4. Customize the styling to match your brand
5. Monitor performance and user engagement

The Instagram integration is now ready to showcase your beautiful floral arrangements to website visitors!
