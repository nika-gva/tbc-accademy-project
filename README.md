# Tbc accademy

## Description

- this is a clone of tbc accademy website, made for entrance exam of react course.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#projectStructure)
- [technologies](#technologies)
- [instruction to run a project](#instructionToRunProject)

## Installation

- project is built with vite js. command - (npm create vite@latest). 
- for the environment i used Visual Studio Code (VScode).
- for the project running on the server used "npm run dev"

## projectStructure

- in the project all of the pages, styles, components and containers are separated in different folders. the main folder is **/src**.
  components are in one folder and each component has its own folder and style file.
  all of the pages are in one folder and same are containers.
  for the data i created **questions.json** and **courses.json** files, which are located in the project.

  in this project we have home, usaid, page not found and questions pages.
  main styles file is index.scss and for the variables is used _variables.scss.


## technologies

1. **react router**
    react router is used for routing between pages. in this project there are several pages.

    ```npm install react-router-dom```

2. **react icons**
    for the icons on the website is used react icons. Great selection and easy to handle.

    ```npm install react-icons```

3. **sass**
    for the stylesheet i used sass/scss. its comfortable and easy to work with parent and child elements. easy to select each of the elements and easy to find styles after initializing.

    ```npm install node-sass --save```

4. **swiper**
    for the partners slider i used swiper slider, which is flexible and easy to handle. it offers many animations and functions to make auto sliders.

    ```npm install swiper```

5. **tailwind**
    for the styles also i used tailwind but not too much. its only used in home and page not found pages.

## instructionToRunProject

1. for the project run you can clone the repository
    ```bash
    git clone https://github.com/nika-gva/tbc-accademy-project.git

    after cloning the repository you can open it with VS code and than in terminal run the command
    ```npm install```
    to install all of node modules and neccesary packages.
    to start the project you can run ```npm run dev```.

## project preview
    for the project preview you can visit the link.

    ```
    https://tbc-accademy.netlify.app/
    ```




