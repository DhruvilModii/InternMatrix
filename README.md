InternMatrix Mobile Application

Welcome to the InternMatrix Mobile App project! This application translates the core InternMatrix web experience into a premium, high-performance mobile application built with React Native and Expo.

📱 Project Overview

This project features a modern, continuous-scrolling mobile architecture designed for maximum user engagement. It utilizes a custom brand-aligned color palette (The Mint #00A19B and Ice Latte #E4DDD3) combined with high-contrast elements and premium UI/UX drop-shadows to deliver a production-ready feel.

✨ Key Features

Secure Authentication Flow: A dedicated landing screen that forces users to authenticate (Sign In / Register) before accessing the application dashboard.

Continuous Scrolling UX: A modern, feed-style layout that eliminates chunky navigation menus in favor of a seamless scrolling experience.

Dynamic Program Catalog: A visually appealing horizontal and vertical showcase of industry programs, complete with dynamic pricing, duration, and rating tags.

Integrated Certificate Verification: A built-in portal allowing employers and partners to instantly verify InternMatrix credentials.

Premium UI/UX: Features advanced mobile styling including drop-shadows, fixed sticky-headers, rounded cards, and professional typography hierarchy.

🛠 Tech Stack

Framework: React Native

Build Tool: Expo

Language: JavaScript (ES6+)

Styling: React Native StyleSheet API

🚀 How to Run the App

This project uses Expo, making it incredibly easy to test on a physical device without needing Android Studio or Xcode.

Prerequisites

Node.js: Ensure you have Node.js installed on your computer.

Expo Go App: Download the free Expo Go app on your iOS or Android device from the App Store / Google Play Store.

Installation & Execution

Step 1: Open the Project
Extract the project folder, open your computer's Terminal (or Command Prompt), and navigate into the project directory:

cd path/to/InternMatrixApp


Step 2: Install Dependencies
Install the necessary React Native and Expo packages by running:

npm install


Step 3: Start the Server
Launch the Expo development server:

npx expo start


Step 4: View on your Mobile Device

A large QR code will appear in your terminal.

Android Users: Open the Expo Go app and tap "Scan QR Code".

iOS Users: Open your default Camera app, point it at the QR code, and tap the "Open in Expo Go" notification.

The app will instantly compile and launch on your physical device!

📂 Project Structure

For the purpose of this internship demonstration, the core logic, state management, UI components, and styling have been consolidated into a single, highly-modularized entry file:

App.js: Contains the Authentication state, screen routing, mock data arrays (COURSES, STATS), and all custom UI components (AuthScreen, MainScrollingApp).

🤝 Contact

Developed for the InternMatrix Internship Program.
For any questions regarding the codebase or setup, please reach out via the contact details provided in the submission.
