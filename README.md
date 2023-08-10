# Music Listener Web App

A music listener web app for group listening is a platform that allows users to listen to music together in real time, even if they are in different locations. You can start listening to music with your friends and family.

## Setup Instructions

### Install Required Python Modules

```bash
pip install -r requirements.txt
```
### Start Web Server

To start the web server you need to run the following sequence of commands.

Run the django web server.
```bash
python manage.py runserver
``` 
Or 
```bash
py manage.py runserver
``` 

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.
```bash
cd frontend
```
Next install all dependencies.
```bash
npm i
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
Or for development:
```bash
npm run dev
```