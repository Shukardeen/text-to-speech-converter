# Text to Speech Converter

A modern, responsive web application that converts text to speech using the Web Speech API. Built with vanilla HTML, CSS, and JavaScript, this project provides an intuitive interface for text-to-speech conversion with multiple voice options.

## ✨ Features

- **Text-to-Speech Conversion**: Convert any text input to spoken audio
- **Multiple Voice Options**: Choose from available system voices
- **Real-time Voice Selection**: Dynamic voice loading and selection
- **Cross-browser Compatibility**: Works on all modern browsers supporting Web Speech API

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and custom properties
- **JavaScript (ES6+)**: Vanilla JS with modern syntax
- **Web Speech API**: Browser-native text-to-speech functionality
- **Google Fonts**: Poppins font family for typography

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/text-to-speech.git
   cd text-to-speech
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` (or your preferred port)

## 🎯 Usage

1. **Enter Text**: Type or paste your text in the textarea
2. **Select Voice**: Choose your preferred voice from the dropdown menu
3. **Convert to Speech**: Click the "Play" button to hear your text
4. **Enjoy**: Listen to your text being spoken with the selected voice

## 🔧 How It Works

The application leverages the Web Speech API, specifically:

- **`window.speechSynthesis`**: Controls the speech synthesis process
- **`SpeechSynthesisUtterance`**: Creates speech objects with customizable properties
- **Voice Selection**: Dynamically loads available system voices
- **Event Handling**: Manages voice changes and playback controls

## 📁 Project Structure

```
text-to-speech/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── app.js              # JavaScript functionality
├── assets/             # Images and icons
│   ├── icon.png        # Main application icon
│   └── tabIcon.png     # Browser tab icon
└── README.md           # Project documentation
```

## 🌟 Key Features Explained

### Voice Management
- Automatically loads available system voices
- Updates voice list when new voices are added
- Allows users to select their preferred voice

### Text Processing
- Handles empty text validation
- Supports multi-line text input
- Preserves text formatting during conversion

⭐ If you found this project helpful, please give it a star! 
