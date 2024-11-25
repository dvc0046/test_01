# test_assignment

## Dynamic Vehicle Dropdowns

This project is a Vue.js-based web application that dynamically populates Year, Make, and Model dropdowns using data retrieved from a third-party API. Users can select a year, then a make, and finally a model, with each dropdown being dynamically updated based on the previous selection.

## Features

- Dynamic dropdowns for vehicle Year, Make, and Model.
- Fetches data from the provided API endpoints.
- Handles asynchronous API calls with loading indicators and error handling.
- Built with Vue 3 and modern development best practices.

## API Endpoints Used

1. Get Available Years
   GET https://new.api.nexusautotransport.com/api/vehicles/years

2. Get Makes for a Given Year
   GET https://new.api.nexusautotransport.com/api/vehicles/makes?year=<year>

3. Get Models for a Given Year and Make
   GET https://new.api.nexusautotransport.com/api/vehicles/models?year=<year>&make=<make>

## Technologies Used

- Vue.js 3 for building the interface.
- Axios for API requests.
- GitHub Pages for deployment.

### Live Demo

Access the deployed project here:
[Live Demo](https://dvc0046.github.io/test_01/)
