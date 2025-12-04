## Moqaddim - CPIT405 Final Project
## Project Description

Moqaddim is an AI-powered feasibility study platform that helps entrepreneurs and small business owners generate fast, structured, and data-driven feasibility reports.

The platform allows users to create an account, log in securely, manage multiple feasibility studies, analyze costs and markets, and export high-quality PDF business reports — all through a clean, modern, and user-friendly interface.

This system aims to simplify feasibility study creation using AI automation, smart financial structuring, and real-time business tools such as a currency converter.


## Key Features :

User Authentication
Secure login & signup using custom authentication with protected routes.

Protected Routes
Only authenticated users can access tools, studies, and profile pages.

Feasibility Study Generator
Users fill a project form → AI-like logic generates:
- Cost Analysis
- Market Analysis
- Risk Assessment
- 3-Year Financial Projection
- Recommendations

PDF Export System
Generate a professional, structured PDF report using jsPDF & autotable.

Currency Converter Tool
Converts currencies with global exchange rates API.

Project Manager
View, delete, and manage saved feasibility studies.

User Profile Page
Edit/view personal information with modern UI.

Modern Responsive UI
Styled with clean CSS and organized layouts.

## Technologies Used

| Technology | Description |
|-----------|-------------|
| React.js | Frontend component-based development |
| Firebase | Authentication + Firestore database |
| React Router | Page routing + protected routes |
| jsPDF + AutoTable | Generate structured PDF reports |
| LocalStorage | Store feasibility studies & profile data |
| External Currency API | Convert currencies in real-time |
| CSS / HTML | Styling and layout |
| JavaScript (ES6) | Business logic & form handling |


##  Website Structure Highlights

| File | Purpose |
|------------------|---------|
| `LandingPage.jsx` | The public welcome page with project introduction and “Let’s Go” button. |
| `LoginPage.jsx` | Handles user login using Firebase Authentication. |
| `SignupPage.jsx` | Allows new users to create an account through Firebase Authentication. |
| `HomePage.jsx` | Main dashboard for logged-in users with navigation to all tools and features. |
| `BusinessTools.jsx` | Contains the Currency Converter tool with real-time API integration. |
| `NewStudy.jsx` | The main form where users input their idea to generate an AI feasibility study. |
| `StudyResult.jsx` | Displays the generated feasibility study with export-to-PDF functionality. |
| `Projects.jsx` | Shows saved feasibility studies stored in LocalStorage. |
| `ProfilePage.jsx` | Displays user profile details with a logout option. |
| `ProtectedRoute.jsx` | Guards private pages, blocking access unless the user is logged in. |
| `AuthContext.jsx` | Manages Firebase authentication (login, signup, logout, sessions). |
| `firebase.js` | Initializes Firebase configuration and exports authentication instance. |
| `Storage.js` | Helper functions for storing and retrieving saved studies from LocalStorage. |
| `styles/*.css` | All external stylesheets for each page/component. |


## Pages Overview

### 1️Landing Page — `LandingPage.jsx`

This is the public entry page of the platform.

- Hero section introducing Moqaddim
- Simple & clean CTA “Let’s Go”
- Fully responsive layout

**Screenshot:**
![Landing Page](INSERT_IMAGE_LINK_HERE)

---

###  Login Page — `LoginPage.jsx`

This page allows users to log in using Firebase Authentication.

- Email & password login
- Error handling
- Redirects after login

**Screenshot:**
![Login Page](INSERT_IMAGE_LINK_HERE)

---

###  Signup Page — `SignupPage.jsx`

Creates a new user account.

- Firebase sign-up
- Form validation
- Redirect to Home after signup

**Screenshot:**
![Signup Page](INSERT_IMAGE_LINK_HERE)

---

###  Home Page — `HomePage.jsx`

The main dashboard for the user.

Contains:

- Navbar with dropdown profile menu
- Hero section
- Services grid
- About section
- Contact section

**Screenshot:**
![Home Page](INSERT_IMAGE_LINK_HERE)

---

###  New Feasibility Study — `NewStudy.jsx`

Form where the user fills project details:

- Project Name
- Industry
- Description
- Initial investment
- Target market

After submission:

- Generates feasibility report
- Saves in storage
- Redirects to results page

**Screenshot:**
![New Study Page](INSERT_IMAGE_LINK_HERE)

---

###  Study Result Page — `StudyResult.jsx`

Displays the full feasibility study.

Includes:

- Cost analysis  
- Market analysis  
- Risk assessment  
- Financial projections table  
- **Export PDF button** (jsPDF + AutoTable)

**Screenshot:**
![Study Result Page](INSERT_IMAGE_LINK_HERE)

**Sample of Generated PDF:**
![PDF Output](INSERT_IMAGE_LINK_HERE)

---

###  Projects Page — `Projects.jsx`

Shows all saved feasibility studies.

- Loads data from LocalStorage
- Cards to open each report

**Screenshot:**
![Projects Page](INSERT_IMAGE_LINK_HERE)

---

###  Currency Converter — `BusinessTools.jsx`

A business tool for converting currencies in real time.

- Real API call
- Clean horizontal layout
- No-scroll design

**Screenshot:**
![Currency Converter](INSERT_IMAGE_LINK_HERE)

---

###  Profile Page — `ProfilePage.jsx`

Shows the user profile.

- User email
- Logout button
- Basic information

**Screenshot:**
![Profile Page](INSERT_IMAGE_LINK_HERE)

---

###  Protected Routes — `ProtectedRoute.jsx`

Prevents users from accessing internal pages without logging in.

- Redirects users to `/login` if not authenticated

---

###  Auth Context — `AuthContext.jsx`

Handles all authentication logic using Firebase:

- Login
- Signup
- Logout
- User state tracking

---

###  Firebase Config — `firebase.js`

Initializes Firebase:

- Firebase App
- Firebase Auth

---

###  Local Storage Manager — `Storage.js`

Handles feasibility study storage:

- saveProject()
- getProjectById()
- getAllProjects()

---
