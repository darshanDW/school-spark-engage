# 🎓 EduApp - School Management System (Student Portal)

A modern, responsive Progressive Web App (PWA) designed for students to manage their academic life efficiently.

![EduApp Preview](https://lovable.dev/opengraph-image-p98pqg.png)

## ✨ Features

### 📱 Progressive Web App (PWA)
- **Installable**: Add to home screen on any device
- **Offline Support**: Works without internet connection
- **Push Notifications**: Real-time updates for assignments, grades, and announcements
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### 🎯 Core Functionality
- **Dashboard Overview**: GPA tracking, attendance monitoring, study hours
- **Assignment Tracker**: Due dates, progress tracking, submission status
- **Grade Management**: Subject-wise performance, trending analysis
- **Schedule Viewer**: Today's classes, teacher information, room details
- **Recent Activity**: Latest assignments, grade updates, announcements
- **Quick Actions**: Fast access to common tasks

### 🎨 Design & User Experience
- **Modern UI**: Clean, academic-focused design with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Academic Color Scheme**: Professional blue and purple gradients
- **Accessibility**: WCAG compliant with proper contrast and keyboard navigation

## 🚀 Demo Features

- **Send Demo Notification**: Test push notifications with a dedicated button
- **Interactive Cards**: Hover effects and smooth animations
- **Responsive Layout**: Adapts to any screen size
- **Real-time Updates**: Dynamic data updates and progress tracking

## 🛠 Technologies Used

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: Shadcn/ui
- **Build Tool**: Vite
- **PWA**: Service Worker + Web App Manifest
- **Notifications**: Push API + Notification API
- **State Management**: React Hooks
- **Icons**: Lucide React

## 📱 PWA Setup

The app includes full PWA functionality:

1. **Service Worker**: Handles caching and push notifications
2. **Web App Manifest**: Defines app metadata and appearance
3. **Install Prompt**: Smart install prompts for different platforms
4. **Offline Support**: Core functionality works offline
5. **iOS Support**: Optimized for iOS Safari and home screen installation

## 🔔 Push Notifications

- **Demo Notifications**: Test notifications with the "Send Demo Alert" button
- **Assignment Reminders**: Automatic reminders for due dates
- **Grade Updates**: Instant notifications when grades are posted
- **Announcements**: School-wide notifications and updates

## 🎯 Key Components

- **DashboardHeader**: Navigation, search, and user profile
- **DashboardCards**: GPA, assignments, attendance, study hours overview
- **QuickActions**: Fast access to common student tasks
- **AssignmentTracker**: Comprehensive assignment management
- **GradesSummary**: Academic performance tracking
- **UpcomingSchedule**: Today's class schedule
- **RecentActivity**: Latest updates and notifications

## 🌐 Live Demo

**Preview Link**: [https://3b2c0aa8-9f67-4fad-9299-b083abcdb73b.lovableproject.com](https://3b2c0aa8-9f67-4fad-9299-b083abcdb73b.lovableproject.com)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd eduapp-student-portal

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 📱 PWA Installation

### Desktop (Chrome, Edge, Firefox)
1. Visit the application URL
2. Look for the install prompt or click the install icon in the address bar
3. Click "Install" to add to your applications

### Mobile (iOS Safari)
1. Open the app in Safari
2. Tap the Share button (⎮)
3. Select "Add to Home Screen"
4. Confirm installation

### Mobile (Android Chrome)
1. Visit the application URL
2. Tap the install banner or menu option
3. Confirm installation

## 🔧 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn)
│   ├── DashboardHeader.tsx
│   ├── DashboardCards.tsx
│   ├── QuickActions.tsx
│   ├── AssignmentTracker.tsx
│   ├── GradesSummary.tsx
│   └── ...
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── index.css          # Global styles & design system
```

### Design System
The app uses a comprehensive design system defined in `src/index.css` with:
- Academic color palette (blues, purples, greens)
- Consistent spacing and typography
- Smooth animations and transitions
- Responsive breakpoints
- Dark/light mode support

## 🎨 Customization

### Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --primary: 217 91% 60%;    /* Academic Blue */
  --secondary: 262 83% 58%;  /* Academic Purple */
  --success: 142 71% 45%;    /* Success Green */
  /* ... more colors */
}
```

### Components
All components use the design system tokens and can be easily customized through the centralized theme.

## 🚀 Deployment

The app can be deployed to any static hosting service:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**
- **AWS S3 + CloudFront**

For PWA features to work properly, ensure HTTPS is enabled.

## 📄 License

This project is built with [Lovable](https://lovable.dev) - The AI-powered development platform.

## 🤝 Contributing

This is a demonstration project showcasing modern web app development with PWA capabilities. Feel free to explore the code and adapt it for your needs.

---

**Built with ❤️ using Lovable AI Development Platform**
