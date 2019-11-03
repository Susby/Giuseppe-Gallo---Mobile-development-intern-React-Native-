# Mobile internship exercise

In this exercise your are asked to build a simple app which simulates the connection to a drone. The app should:

- Show a picture in the background simulating the video feedback of the drone
- Show the speed of the drone, and enable the user to change it. We will use a very simple simulation where the drone changes its speed instantly as soon as the user has commanded it
- Display defect detections on the screen. These will be simulated by displaying fixed length red squares on top of the background image.
- Finally the fetching of these detections will be simulated by randomly changing the number of detections and their location on the image

You can see here an example of the functionalities the app should have:

![](assets/mobile-internship-exercise.gif)

**Please take into account that the UI provided in the example above is just for guidance, you are not asked to copy this. Focus more on providing an app with the functionalities that work than on the UI design.**

The exercise is separated into different deliverables, try to go as far as you can go. Of course ideally you are able to finish this exercise, but if it's not the case don't worry, we'll take into account other parameters to evaluate what you will deliver:

- Your past experience on this field: if it was completely new to you but yet you managed to do a fair amount of work
- The **quality of your code** and how you have organized it (code splitting, comments, consistent naming convention...)
- Your way of working: if you were able to perform most of the problem finding solutions to your problems on your own or if you needed much guidance.

Please if you have any questions or need of clarification don't hesitate to contact me [ignacio.carnicero@sterblue.com](mailto:ignacio.carnicero@sterblue.com).

### Useful documentation

Here are some useful links where you'll find all that you need for performing this project:

- [React-native documentation](https://facebook.github.io/react-native/docs/getting-started)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Expo documentation](https://docs.expo.io/versions/latest/)
- [React-native-elements documentation](https://react-native-training.github.io/react-native-elements/docs/overview.html)

## 1 - Prerequisites

This section is here to provide you with some guidance in order set up your work environment correctly and to be able to reach a basic app up and running to start working. If you follow these steps this shouldn't take long:

- Install nodeJS and the expo CLI following the documentation in https://expo.io/learn

- Clone this git repository in your machine by opening a terminal and typing:

```
git clone https://gitlab.com/nacho.carnicero/mobile-internship-exercice/
```

- Once it's cloned enter the repository folder with `cd mobile-internship-exercice/`
- Install all required dependencies with `npm install` or `yarn install`
- Launch the packager server by doing `npm start` or `yarn start`
- Go to your phone and download the Expo Client from the App store or Google Play
- Now if you scan the QR code that is shown in the window that was opened when you launched the packager the app should run on your device, and every time time you change your code this should be reflected in your device.

## 2 - Exercise

We have divided the exercise in five parts, we ask you to go as far as you can. If you are blocked at some point ask us questions, it's better to ask and be able to go further in the exercise.

### a. Background image

This is the most basic deliverable we expect from you. It includes the app with the background image. Hereafter are some guidelines to help you on this.

- Use the image provided in this repo in `assets/pylon.jpg`
- The image should cover the whole screen
- This is doable with only the components shipped with `react-native` (see all of them in https://facebook.github.io/react-native/docs/getting-started)

### b. Display a speed indicator

- Add a subview to the app containing a speed indicator (speed can be hard coded here).

### c. Control speed

- Add a state to the component containing the drone speed
- Add two buttons to the subview that will change the speed of the drone stored in the app state.
- We suggest to use the package react native elements for the button: `npm install react-native-elements`
- Bonus points if you use functional components and React hooks here

### d. Display a list of AI detections boxes

In this part you should display AI detections. The list of detections is defined by the following list:

```JSON
{"detections": [{ "top": "50%", "left": "50%" }, { "top": "25%", "left": "30%" }, { "top": "60%", "left": "10%" }]}
```

Basically the `detections` key contains an array of objects, each of these representing a `Detection`. As you can see one `Detection` is defined by its position on the screen: we have defined it by the distance to the top and left part of the screen, in percentage of the total screen size.

In the example GIF that you have at the top of this document the detection component is only a `View` component from the `react-native` library with the style set as follows:

```JS
<View
  style={{
    borderWidth: 4,
    borderColor: "red",
    backgroundColor: "transparent",
    width: 50,
    height: 50
    //Here you should put other styling properties for positioning the Detection depending on its properties
  }}
/>
```

It is really important that you take into account the fact that **we are going to test your app by changing the number of detections and its position** so you can not just hard code the position of the three detections that we set above.

We recommend using here **lodash**.

### e. Dynamically generate a fake list of detection boxes

Finally, we are going to simulate fetching of AI detections from the DB (and assuming that each time we fetch them the detections have changed). Here are some guidelines on how to reach this:

- Add the detections to the app state
- Create a button component for "fetching" the detections
- When the button is pressed, randomly change the number of detections as well as their positions on the screen
