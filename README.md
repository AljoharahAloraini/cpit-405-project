# **Moqaddim – CPIT405 Final Project**

## **Project Description**

Moqaddim is an AI-powered feasibility study platform designed to help entrepreneurs generate structured, data-driven feasibility reports quickly and easily.
The platform provides user authentication, protected tools, a smart feasibility generator, PDF exporting, and a clean modern UI to ensure a smooth business-planning experience.

It simplifies the process of analyzing ideas through:

* Automated cost & market analysis
* AI-style financial projections
* Risk assessment
* Professional PDF report generation
* Real-time currency conversion tool

The goal is to make feasibility study creation faster, easier, and more professional for small-business owners and students.

---

# **Key Features**

* **User Authentication:** Custom login & signup with Firebase Authentication
* **Protected Routes:** Only logged-in users can access internal pages
* **Feasibility Study Generator:** Cost analysis, market analysis, risks, and 3-year projections
* **PDF Export:** Generates a structured report using jsPDF + AutoTable
* **Currency Converter Tool:** Converts currencies using real-time exchange API
* **Project Manager:** Save, view, and delete feasibility studies
* **Profile Page:** View personal info and logout
* **Modern UI:** Fully responsive, clean, and easy to use
* **LocalStorage Integration:** Stores feasibility studies locally

---

# **Technologies Used**

| Technology            | Description                           |
| --------------------- | ------------------------------------- |
| React.js              | Component-based UI development        |
| Firebase              | Authentication & session management   |
| React Router          | Navigation + protected routes         |
| jsPDF & AutoTable     | PDF exporting and table generation    |
| LocalStorage          | Save and retrieve feasibility studies |
| External Currency API | Real-time currency rates              |
| HTML / CSS            | Structure & styling                   |
| JavaScript (ES6)      | Form logic, state, and data handling  |

---

# **Website Structure Highlights**

| File                 | Purpose                                                         |
| -------------------- | --------------------------------------------------------------- |
| `LandingPage.jsx`    | Public welcome page with intro + “Let’s Go” button.             |
| `LoginPage.jsx`      | User login via Firebase Authentication.                         |
| `SignupPage.jsx`     | Creates user accounts using Firebase.                           |
| `HomePage.jsx`       | Main dashboard with hero section, services, about, and contact. |
| `BusinessTools.jsx`  | Includes the real-time Currency Converter tool.                 |
| `NewStudy.jsx`       | Form for creating a new feasibility study.                      |
| `StudyResult.jsx`    | Displays full study results with PDF export.                    |
| `Projects.jsx`       | Shows saved feasibility studies (LocalStorage).                 |
| `ProfilePage.jsx`    | Displays user profile and logout button.                        |
| `ProtectedRoute.jsx` | Blocks access to private pages unless authenticated.            |
| `AuthContext.jsx`    | Handles authentication state + login/signup/logout.             |
| `firebase.js`        | Firebase configuration file.                                    |
| `Storage.js`         | Functions for saving and retrieving studies.                    |
| `styles/*.css`       | All page and component styles.                                  |

---

# **Pages Overview**

Below is an overview of each page in the platform and what it contains:

---

## **1. Landing Page — `LandingPage.jsx`**

This is the public entry page to the platform.

It includes:

* A hero section introducing the Moqaddim platform
* A “Let’s Go” call-to-action
* Clean responsive layout

**Screenshot:** 
<img width="2399" height="1599" alt="Screenshot 2025-12-03 222533" src="https://github.com/user-attachments/assets/38295229-37db-4a6b-88c2-34246180613e" />

---

## **2. Login Page — `LoginPage.jsx`**

This page handles user authentication.

It includes:

* Email/password login
* Firebase-based validation
* Error handling & redirect

**Screenshot:** 


<img width="2399" height="1591" alt="Screenshot 2025-12-03 222602" src="https://github.com/user-attachments/assets/624f297e-46e4-4da0-947f-42c669927c8c" />

---

## **3. Signup Page — `SignupPage.jsx`**

Used to create a new account.

It includes:

* Full signup form
* Firebase registration
* Redirect to home

**Screenshot:**

<img width="2395" height="1599" alt="Screenshot 2025-12-03 222619" src="https://github.com/user-attachments/assets/bd10d6d9-8e33-4345-9b0b-2f20f715b720" />


---

## **4. Home Page — `HomePage.jsx`**

Main dashboard for authenticated users.

Contains:

* Navigation bar
* Hero section
* About section
* Services
* Contact section

**Screenshot:** 

<img width="2396" height="1595" alt="Screenshot 2025-12-04 011344" src="https://github.com/user-attachments/assets/1ba6fe7f-4f1f-4100-9ec6-9d46f72269b1" />
<img width="2398" height="1599" alt="Screenshot 2025-12-04 011412" src="https://github.com/user-attachments/assets/368bbe0b-4668-4460-98aa-14a487baa20d" />
<img width="2397" height="1597" alt="Screenshot 2025-12-04 011434" src="https://github.com/user-attachments/assets/4a940771-507b-466b-a397-81d5d40d292e" />
---

## **5. New Feasibility Study — `NewStudy.jsx`**

Form for creating a new study.

Users enter:

* Project name
* Industry
* Description
* Initial investment
* Target market

After submitting:

* Study is generated
* Saved to LocalStorage
* Redirects to the results page

**Screenshot:**

<img width="2399" height="1527" alt="Screenshot 2025-12-03 222724" src="https://github.com/user-attachments/assets/c869d3f3-c473-4182-8c7f-bd02676c5b27" />


---

## **6. Study Result Page — `StudyResult.jsx`**

Displays a full feasibility report including:

* Project name
* Idea description
* Cost analysis
* Market analysis
* Risk assessment
* Financial projections (3 years)
* ROI & Break-even
* Export to PDF

**Screenshot:**

<img width="2399" height="1598" alt="Screenshot 2025-12-03 223254" src="https://github.com/user-attachments/assets/bd80551c-cf1e-4754-84eb-e44daf30f149" />
<img width="2397" height="1599" alt="Screenshot 2025-12-04 005847" src="https://github.com/user-attachments/assets/fac3c7a0-59e1-42bd-8647-a8efe1839b2a" />



## **PDF Sample:**
<img width="779" height="1115" alt="Screenshot 2025-12-04 010031" src="https://github.com/user-attachments/assets/f1f9a176-7748-4422-a504-143a5e716f82" />
<img width="794" height="1129" alt="Screenshot 2025-12-04 010039" src="https://github.com/user-attachments/assets/84a49f80-cc75-417e-98eb-a247e9294576" />


---

## **7. Projects Page — `Projects.jsx`**

Shows all saved feasibility studies.

Features:

* Load studies from LocalStorage
* View/delete each study

**Screenshot:**
<img width="2399" height="1599" alt="Screenshot 2025-12-03 223207" src="https://github.com/user-attachments/assets/9a3ca6c1-da44-4033-8d8a-d87140c846c4" />


---

## **8. Currency Converter — `BusinessTools.jsx`**

Includes a real-time converter tool.

Provides:

* Multiple currencies
* Live API conversion
* Clean responsive layout

**Screenshot:** 
<img width="2386" height="1599" alt="Screenshot 2025-12-03 222803" src="https://github.com/user-attachments/assets/f2923f12-58d4-4311-8e3f-a2fc14a207b0" />


---

## **9. Profile Page — `ProfilePage.jsx`**

Displays the logged-in user information.

Includes:

* Name
* Username
* Email
* Logout button

**Screenshot:** 

<img width="2399" height="1599" alt="Screenshot 2025-12-03 222705" src="https://github.com/user-attachments/assets/25a0faea-1f64-46b3-8ab6-d9acf5a9ad01" />

---

## **10. Protected Route — `ProtectedRoute.jsx`**

Prevents unauthorized access.

If the user is not logged in:

* Redirects to `/login`

---

## **11. Auth Context — `AuthContext.jsx`**

Handles all authentication logic:

* Login
* Signup
* Logout
* Tracks current user

---

## **12. Local Storage Manager — `Storage.js`**

Used for:

* Saving feasibility studies
* Loading saved studies
* Getting a study by ID

# **Project Rubric Mapping**

### **1️. HTML Structure**

We used valid and semantic HTML5 elements inside React (such as `<header>`, `<nav>`, `<section>`, and `<form>`) to ensure clear structure, accessibility, and readable document flow across all pages of the platform.

---

### **2. CSS Styling**

The platform uses external CSS files with a consistent color palette, rounded edges, shadows, and modern UI styling.
We applied **Flexbox** and **Grid** layouts to structure pages like the Home, Profile, and Study Result pages.
Media queries ensure full responsiveness across mobile, tablet, and desktop screens.

---

### **3. JavaScript Functionality**

Interactive behaviors were implemented using JavaScript and React, such as handling form submissions, generating feasibility studies, updating UI based on user input, validating login/signup fields, and exporting PDF reports through jsPDF.

---

### **4. User Events**

User events were used across the platform, such as clicking buttons (Generate Study, Export PDF, Login, Logout), typing into forms, viewing saved projects, and navigating between pages. These events update the UI immediately and make the platform interactive and intuitive.

---

### **5. React Components**

The application is divided into reusable React components like Navbar, Input Fields, Study Cards, Profile Form, and Section Blocks.
Each component manages its own UI and logic, improving readability and maintainability of the code.

---

### **6. Prop Management**

We used props to pass data between components, such as sending study data into the StudyResult page, passing user info into profile components, and transferring generated project information to preview pages.

---

### **7. State Management**

State (via `useState` and AuthContext) is used to handle user authentication state, study form fields, currency converter inputs, stored studies, and dynamic UI updates.
This ensures the app responds correctly whenever the user updates or interacts with elements.

---

### **8. Routing and Navigation**

We implemented full navigation using **React Router**.
Pages such as Home, Login, Signup, New Study, Tools, Projects, and Profile are all routed smoothly without reloading the page.
Internal tools and study pages are structured and easily accessible.

---

### **9. API Integration**

We integrated an external **Currency Exchange API** inside the Business Tools page to convert currencies in real time.
API calls are handled safely, and results are displayed instantly to the user.

---

### **10. Accessibility**

We improved accessibility with alt text for images (like the logo), readable heading levels, high color contrast, proper label–input pairing, and keyboard-focus friendly buttons to ensure the platform is usable by all users.

---

### **11. Deployment**

The project is deployed on a **GitHub repository** with a fully documented README, screenshots, technologies used, and structure overview.

---

### **12. Local Storage Integration**

We used LocalStorage to save, load, and manage feasibility studies without needing a backend database. This allows users to keep their saved projects even after refreshing.

### **13. Firebase Authentication**

We used Firebase Authentication to securely manage:

* Login
* Signup
* Logout
* User session persistence

This ensures the platform meets the requirement for authentication and protected routes.



## Team Members

| Name                   | Student ID |
|------------------------|------------|
| Aljoharah              | 2206048    |
| Norah                  | 2206680    |
| Joud Alharbi           | 2107821    |
| Jinan                  | 2108532    |

**Prepared for:** Dr. Rania Alhazmi – CPIT405


