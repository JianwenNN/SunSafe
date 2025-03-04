# SunSafe 🌞

SunSafe is a web application designed to help you determine whether you need to apply sunscreen today based on real-time UV data from your location. Using the OpenUV API, the app provides you with an intuitive interface to check the UV index and get recommendations on sunscreen protection.

## Features

- **Current Location Detection**: The app detects your current location to provide localized UV data.
- **UV Index Information**: Provides real-time UV index data to help you understand the sun exposure risks.
- **Sunscreen Recommendations**: Based on the UV index, the app tells you whether or not you need to apply sunscreen.
- **User-Friendly Interface**: Clean, simple, and easy-to-use interface for everyday users.

## Technologies Used

- **HTML/CSS/JavaScript**: For the frontend and user interface.
- **OpenUV API**: To retrieve real-time UV index data for your location.
- **Geolocation API**: To get the user's current geographical coordinates.

## How It Works

1. **Detect Your Location**: The app fetches your geographic coordinates using the Geolocation API.
2. **Fetch UV Data**: Using your location, the app makes a request to the OpenUV API to get the current UV index.
3. **Sunscreen Advice**: Based on the UV index, the app gives you personalized advice on whether or not to apply sunscreen.
