# Clean Minimal Drift Test Repository

## Purpose
This test repository represents a **well-maintained project with excellent design consistency**. It should pass Buoy design system checks with flying colors.

## What This Tests
- Detection of clean, consistent codebases
- Recognition of proper Tailwind usage patterns
- Validation that Buoy correctly identifies projects with minimal/no drift
- Semantic class naming patterns
- Proper use of Tailwind's default theme

## Characteristics
- **60+ components** across multiple categories
- Uses Tailwind's default theme consistently
- **Zero arbitrary values** (no `w-[347px]` or `text-[#1a2b3c]`)
- Semantic class names throughout
- Consistent spacing scale usage
- Proper color palette adherence
- Well-organized component structure

## Expected Buoy Results
- Drift Score: < 5%
- No arbitrary value violations
- Consistent theme usage
- Clean semantic naming

## Component Structure
```
src/
  components/
    ui/           - Base UI primitives (Button, Input, Card, etc.)
    layout/       - Layout components (Container, Grid, Stack, etc.)
    navigation/   - Navigation components (Navbar, Sidebar, Menu, etc.)
    forms/        - Form components (Form, FormField, Select, etc.)
    feedback/     - Feedback components (Alert, Toast, Modal, etc.)
    data/         - Data display components (Table, List, Badge, etc.)
```

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS (default config)
- Vite
