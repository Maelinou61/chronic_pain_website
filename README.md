Chronic Pain Management
Chronic Pain Management is a web platform designed to assist both patients suffering from chronic pain and physicians in better understanding and managing chronic pain symptoms. By leveraging an interactive form based on the CAL-CP algorithm, Chronic Pain Management aims to save time for both patients and physicians. Patients can potentially provide more detailed descriptions of their pain, while physicians receive assistance from the website in determining the origin of chronic pain.

Key Features
Account Creation and Authentication: Secure account creation and authentication system for both patients and physicians.

CAL-CP Form: An intuitive form guides patients in detailing their pain symptoms, including origin, duration, location, and associated symptoms. Responses are processed by the CAL-CP algorithm to help identify potential pain origins.

Interactive Body Chart: Patients can use an interactive body chart to precisely pinpoint the locations of their pain, facilitating clearer communication with physicians.

Access to Information by Physicians: Physicians can securely access patient-provided information and CAL-CP algorithm results to aid in diagnosing chronic pain and recommending appropriate treatment options.

Technical Overview
The Chronic Pain Management website incorporates both front-end and back-end technologies to provide an accessible user interface and support complex functionality:

Front-end: Developed using HTML, CSS, and JavaScript, the front-end ensures a user-friendly interface for seamless interaction with Chronic Pain Management's features.

Back-end: Powered by PHP, the back-end handles data processing, user authentication, interactions with the MySQL database, and integration with the CAL-CP algorithm. PHP enables the implementation of complex functionalities necessary for Chronic Pain Management's operations.

Database: Chronic Pain Management utilizes a relational database management system, MySQL, to securely store user data, pain descriptions, and CAL-CP algorithm results. MySQL offers robust data management capabilities, ensuring efficient storage and retrieval of information critical for both patients and physicians.

Docker Overview
Docker is a platform that enables developers to package applications and their dependencies into standardized units called containers. These containers can then be easily deployed across different environments, ensuring consistency and reliability in software delivery.

Docker Images Used
Apache:PHP Image: This Docker image combines the Apache web server with PHP, providing an environment for hosting PHP-based web applications like Chronic Pain Management. It allows Chronic Pain Management's back-end, developed in PHP, to run within a containerized environment, ensuring portability and scalability.

MySQL Image: The MySQL Docker image provides a pre-configured MySQL database server. Chronic Pain Management utilizes this image to set up its relational database, storing user data, pain descriptions, and CAL-CP algorithm results securely. Dockerized MySQL simplifies database management and ensures consistency across development, testing, and production environments.

phpMyAdmin Image: phpMyAdmin is a web-based tool for managing MySQL databases. The phpMyAdmin Docker image allows developers to interact with the MySQL database through a user-friendly web interface. It facilitates database administration tasks such as data manipulation, schema management, and query execution, making it easier to work with Chronic Pain Management's database during development and testing.

By leveraging Docker and these containerized images, Chronic Pain Management streamlines the deployment and management of its web application, database, and administration tools, enhancing efficiency and scalability in software development and deployment processes.

Configuring Database Connection
To connect Chronic Pain Management to the MySQL database running on the Apache server in Docker, you'll need to provide your database connection details. We've provided a .envexample file with placeholders for these details. Here's how you can configure it:

Open .envexample: Navigate to the project directory and open the .envexample file in a text editor.

Update Connection Information: Replace the placeholder values in the .envexample file with your actual database connection information. This includes the database host, port, username, password, and database name.

Rename to .env: Once you've updated the connection information, save the file and rename it to .env. This step is crucial for Chronic Pain Management to recognize and use your database configuration.

By customizing the .env file, you ensure that Chronic Pain Management can establish a connection to your MySQL database and seamlessly retrieve and store data. If you ever need to change your database credentials or configuration, simply update the .env file accordingly.
