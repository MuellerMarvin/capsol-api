# Capsol API

An Api for a proposed application, that would drop "capsols" on a map, which could contain various types of data (such as audio, images, text) to tell a story that happened at the point the 'capsol' (for timecapsule) was dropped.

# How to run

1. git clone
2. run `npm install`
3. Add a `config.json` to the root folder, following the example at the bottom of this readme
4. run the program with `npm start`

##### Run in Developer-Mode (Optional, after following the installation) 

1. install nodemon using `npm install -g nodemon`
2. use `npm startDev` instead of `npm start` to run the program

# Database structure
![grafik](https://user-images.githubusercontent.com/8641639/166213802-0b72472f-0914-4c1d-b01d-527bf94590f2.png)

# Example config.json
```json
{
    "database": {
        "connectionString": "<MongoDB Connection String>"
    },
    "networking": {
        "port": 3000
    }
}
```
