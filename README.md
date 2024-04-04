# Chaitanya Clinic Patient Management System

Welcome to the Chaitanya Clinic Patient Management System repository! This system is designed to help manage patient data and reports for ease of access and organization.
## Note about Deployment

Please note that this application is currently deployed on the free tier of render.com. Due to the limitations of the free tier, there may be occasional issues with accessing the deployed live website, such as slow loading times or temporary downtimes. We apologize for any inconvenience this may cause and appreciate your patience and understanding.
## Features

- **Patient Data Management:** Store and manage detailed patient information including symptoms, medical history, treatment records, and more.
- **Report Generation:** Generate comprehensive reports for patients, including examination results, treatment plans, and follow-up appointments.
- **Search and Filter:** Easily search and filter patient records based on names.

## Getting Started

To get started with the Chaitanya-Clinic Patient Management System, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine using `git clone`.

    ```bash
    git clone https://github.com/Atharvan2004/clinic-patients
    ```

2. **Install Dependencies:** Navigate to the project directory and install dependencies using npm or yarn.

    ```bash
    cd clinic-patients
    npm install
    cd client
    npm install
    ```

3. **Set Up Database:** Configure the database settings according to your environment. This project uses MongoDB database.

4. **Set Up Environment variables:** Make .env file in root directory and setup 
CONNECTION_STRING, BASE_URL variables.

5. **Start the Application:** Start the application using npm.

    ```bash
    npm run dev
    cd client
    npm run dev
    ```

6. **Access the Application:** Once the application is running, access it by opening a web browser and navigating to `http://localhost:5173`.

## Contributing

We welcome contributions from the community! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
