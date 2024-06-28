Full Stack Software Engineering Technical Assessment
This repository contains the solutions for the Feefo Full Stack Software Engineering Technical Assessment. The assessment is divided into three parts: Object-Oriented Programming, UI Assessment, and Web App Restful API System Design.

Table of Contents
Object-Oriented Programming
UI Assessment
Web App Restful API System Design
Setup and Run
Object-Oriented Programming
This section includes a Java project that implements the normalization of job titles.

Description
Provided with a list of ideal (normalized) job titles, create a class that implements a process that returns the best match when provided with an input string.

Example:
Input: "Java engineer"
Output: "Software engineer"
Files
Normaliser.java: The main class implementing the normalization process.
NormaliserTest.java: Unit tests for the Normaliser class.
How to Run
Open the project in your preferred Java IDE.
Run the unit tests to verify the implementation.
UI Assessment
This section includes a React project that implements the UI components for a note application.

Description
Implement the design provided in design.png as a set of React components. The application includes the ability to create, view, and delete notes.

Files
src/components/: Contains the React components for the note application.
src/tests/: Contains the unit tests for the React components.
design.png: The design mockup provided.
How to Run
Navigate to the ui-assessment directory.
Install dependencies: npm install
Start the development server: npm start
Run the tests: npm test
Web App Restful API System Design
This section includes the system design for a RESTful API for a note application.

Description
Consider a simple note web app where a user can write a note, save a note, view a list of their notes, and delete a note. The user’s notes are saved so that they are available via any web-capable device.

High-Level Design
Frontend Components:
NoteEditor
NoteList
NoteItem
SaveButton
DeleteButton
Backend Components:
NoteController
NoteService
NoteRepository
Database:
Notes
Users

Restful API
GET /notes: Retrieve all notes of the authenticated user.
POST /notes: Create a new note.
DELETE /notes/{id}: Delete a specific note.
PUT /notes/{id}: Update an existing note.
Web Server
Implemented using a framework like Express (Node.js), Spring Boot (Java), or Flask (Python).
Middleware for authentication.
CRUD operations for notes.
Setup and Run
Java Backend
Open the backend directory in your preferred Java IDE.
Run the unit tests to verify the implementation.
React Frontend
Navigate to the ui-assessment directory.
Install dependencies: npm install
Start the development server: npm start
Run the tests: npm test
System Design Documentation
The system-design directory contains all the necessary documentation and diagrams for the system design.
