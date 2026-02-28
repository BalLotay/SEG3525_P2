# Missing Images - What You Need to Do

## Problem
The images are not displaying because they are referenced in CSS/HTML but the image files may not exist in the `images/` folders or the paths need to be verified.

## Image References in Your HTML

### Home Page (`home/index.html`)
- Background image: `./images/v5_3.png`
- Used in: `.hero` section

### Services Page (`services/index.html`)
- Card 1 image: `./images/v6_81.png`
- Card 2 image: `./images/v6_87.png`

### Photographers Page (`photographers/index.html`)
- Alex Morgan: `./images/v17_13.png`
- Jamie Chen: `./images/v17_20.png`

### Location Page (`location/index.html`)
- Map/location image: `./images/v6_103.png`

### Booking Pages
- booking1: Uses form layout (no images needed)
- booking2: Uses form layout (no images needed)
- booking3: Uses form layout (no images needed)

### Contact Page (`contact/index.html`)
- Uses form layout (no images needed)

## How to Add Images

### Option 1: Copy Existing Images from Original HTML
1. The original Figma exports likely have images in each folder
2. Verify the file names match the references above
3. Ensure images are in the correct `images/` subdirectory

### Option 2: Add Placeholder Images (for testing)
You can temporarily add placeholder images while you get the real ones:

```html
<!-- Example: Replace actual image with placeholder -->
<div class="hero" style="background-image: url('https://via.placeholder.com/1200x600?text=Horizon+Studio');"></div>
```

### Option 3: Use External Image URLs
If you have images hosted elsewhere, update the references:

```html
<!-- In home/index.html -->
<section class="hero" style="background-image: url('https://your-domain.com/images/hero.jpg');">
```

## File Structure to Verify

```
home/
├── index.html
├── css/main.css
└── images/
    └── v5_3.png          ← Should exist here

services/
├── index.html
├── css/main.css
└── images/
    ├── v6_81.png         ← Should exist here
    └── v6_87.png         ← Should exist here

photographers/
├── index.html
├── css/main.css
└── images/
    ├── v17_13.png        ← Should exist here
    └── v17_20.png        ← Should exist here

location/
├── index.html
├── css/main.css
└── images/
    └── v6_103.png        ← Should exist here
```

## Next Steps

1. **Check if image files exist** in each `images/` folder
2. **If missing**, export them from Figma or source
3. **Ensure correct file names** match the references in HTML
4. **Verify paths** - they should be `./images/filename.png` from each page's perspective

## Quick Fix for Testing

If you need images to work immediately, you can:

1. Find the original Figma file or image sources
2. Download/export the images with these exact names
3. Place them in the respective `images/` folders
4. No code changes needed - it will just work!

The refactored HTML already has the correct image paths set up. You just need to ensure the image files exist in the right locations.
