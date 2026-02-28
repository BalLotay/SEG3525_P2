# Horizon Studio - Refactored Codebase

A modern, responsive photography studio website redesigned with clean, semantic HTML and organized CSS.

## 🎯 Refactoring Achievements

### ✅ Semantic Naming
- All generic class names (v6_27, v16_148, etc.) replaced with meaningful BEM-style naming
- Clear naming convention makes code maintenance easier

### ✅ Unified Header
- Consistent header across all pages
- Navigation links with active state indicators
- Responsive sticky header

### ✅ Full Viewport Compliance
- Pages fill 100% of viewport height
- No unnecessary scrolling
- Proper flex layout structure

### ✅ Centered Background Images
- All images use `background-position: center`
- `background-size: cover` for proper scaling
- No hardcoded pixel offsets

### ✅ Flexible Layout System
- Removed hardcoded absolute positioning
- Using CSS Flexbox and Grid for layout
- Automatic centering without pixel values
- Responsive grid that adapts to screen size

## 📁 Project Structure

```
code/
├── shared/
│   ├── header.html      # Reusable header component
│   └── styles.css       # Global styles and components
├── home/
│   ├── index.html       # Homepage
│   ├── css/main.css     # Home-specific styles
│   └── images/
├── services/
│   ├── index.html       # Services listing
│   ├── css/main.css     # Services-specific styles
│   └── images/
├── photographers/
│   ├── index.html       # Photographer profiles
│   ├── css/main.css     # Photographers-specific styles
│   └── images/
├── location/
│   ├── index.html       # Location information
│   ├── css/main.css     # Location-specific styles
│   └── images/
├── booking1/
│   ├── index.html       # Booking form - Step 1
│   ├── css/main.css     # Booking-specific styles
│   └── images/
├── booking2/
│   ├── index.html       # Booking form - Step 2
│   ├── css/main.css     # Booking-specific styles
│   └── images/
├── booking3/
│   ├── index.html       # Booking confirmation
│   ├── css/main.css     # Confirmation-specific styles
│   └── images/
└── REFACTORING_NOTES.md
```

## 🎨 Design System

### Colors
- **Primary**: #ff8d28 (Orange)
- **Background**: #000 (Black)
- **Text**: #2f251d (Dark Brown)
- **Accent**: #9f9f9f (Gray)

### Typography
- **Font Family**: Geologica, system-ui, sans-serif
- **Base Size**: 16px
- **Line Height**: 1.6

### Spacing
- Using CSS `gap` and `padding` for flexible spacing
- No hardcoded margins
- Responsive padding adjusts with screen size

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🚀 Getting Started

1. Open any `index.html` file in a browser
2. All pages are self-contained with their own CSS
3. Global styles from `shared/styles.css` provide consistent theming

## ✨ Features

### Shared Components
- Header with navigation
- Card component for content display
- Info section for highlighted content
- Hero section for splash pages
- Form groups for better organization

### Pages
- **Home**: Hero section with contact information
- **Services**: Grid layout of service offerings
- **Photographers**: Portfolio of photographer profiles
- **Location**: Studio location and hours
- **Booking Flow**: 3-step booking process with form and confirmation

## 🔧 CSS Architecture

### Global Styles (`shared/styles.css`)
- Base styles and resets
- Shared component classes
- Responsive design utilities
- Mobile-first approach

### Page Styles
- Minimal overrides for unique layouts
- Extends shared component classes
- Page-specific customizations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All hardcoded pixel values removed from layout
- Flexbox and Grid used for responsive design
- Proper semantic HTML structure
- Accessible form controls with proper labels
- Hover states for interactive elements

## 🎓 Code Quality

- No unused CSS classes
- Consistent naming conventions
- Proper HTML hierarchy
- Mobile-first responsive design
- Clean, readable code structure
