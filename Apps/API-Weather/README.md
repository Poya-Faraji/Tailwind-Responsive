# Tailwind CSS Weather App

Welcome to the Tailwind CSS Weather App! This is a simple weather application built using Tailwind CSS for styling and OpenWeatherApi's API for fetching weather data. The app features a dark mode/light mode switch for enhanced user experience.

## Getting Started

### Prerequisites

Before running the app, you'll need to obtain an API key from OpenWeatherApi to fetch weather data. Follow these steps to acquire your API key:

1. Visit [OpenWeatherApi](https://openweathermap.org/api) and sign up for an account.
2. Once logged in, navigate to your account settings to find your API key.
3. Copy your API key to use it in the application.

### Installation

To install the required packages for the Tailwind CSS Weather App, navigate to the `API-Weather` directory and run the following command:

`npm install`

### Usage

After installing the required packages, you can run the app by executing the following command within the `API-Weather` directory:

`npm run dev`

This will start the development server. Once the server is running, open your preferred web browser and navigate to the provided URL to view the application.

### Note

Remember to add your OpenWeatherApi API key in the `main.js` file to ensure the app can fetch weather data successfully.Note that sometimes it takes around a hour for your key to be activated in OpenWeatherApi. Locate the `api_key` variable in the `main.js` file and replace `"YOUR_API_KEY_HERE"` with your actual API key.

```javascript
const api_key = "YOUR_API_KEY_HERE";
```
