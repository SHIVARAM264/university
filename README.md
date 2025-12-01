# DSU Registration Form Backend

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Open Command Prompt or PowerShell in the university folder
2. Install the required dependencies:
   ```
   npm install
   ```

### Running the Backend

1. Start the server:
   ```
   npm start
   ```
   
   Or for development with auto-restart:
   ```
   npm run dev
   ```

2. The server will start on `http://localhost:3000`
3. You should see the message: "Server running on http://localhost:3000"

### Using the Registration Form

1. Make sure the backend server is running
2. Open `index.html` in your browser
3. Click the "Apply Now" button in the sidebar
4. Fill out the form and submit
5. The form data will be sent to the backend and stored

### Features

- **Form Validation**: Client-side and server-side validation
- **File Upload**: Photo upload with size and type validation (max 2MB, images only)
- **Data Storage**: Applications are stored in memory (in production, use a database)
- **Error Handling**: Proper error messages for network issues
- **Success Feedback**: Confirmation with application ID

### API Endpoints

- `POST /submit-application` - Submit a new application
- `GET /applications` - View all submitted applications (for admin)

### File Structure

- `index.html` - Main homepage
- `style.css` - Global styles
- `script.js` - Global scripts
- `server.js` - Backend server
- `package.json` - Dependencies and scripts
- `pages/` - All HTML pages including RegistartionForm.html
- `ADDIMAGE/` - Images folder
- `uploads/` - Directory for uploaded photos (created automatically)

### Apply Now Button

The "Apply Now" button has been added to the index.html page in the social media sidebar. It features:
- Animated glow effect
- Hover expansion with text
- Direct link to the registration form

### Troubleshooting

- If you get "EADDRINUSE" error, another process is using port 3000
- Make sure Node.js is installed: `node --version`
- Check if all dependencies are installed: `npm list`