
# ENABLERMINDS

This project is a proof of concept idea for enabler minds under the scope of the technical interview




## Setup

After you clone the repository, run the following command in terminal at project root:

``npm install``

After that, you can run

``npm run dev``

To run the project localy.

[Click here](https://enabler-minds-58zc583ou-giorgos-marios-arsenopoulos-projects.vercel.app/) to see a live demo at Vercel.

## Design

### Technology

This app uses React v19.2 with Next.js using typescript as the main language.

The usage of typescript and not just javascript is to have strong type variables and be more in control about the data stracture of the application

Next.js was chosen as a default when installing React library

To manage state in component scope the application is using the ``useState`` function from the react library and ``tanstack/react-query`` to share data with other components.

### File stracture

The project file stracture has all the key assets (components, functions, interfaces etc) to their specific folders for better order and searchability. The ui components that are extracted from external libraries, are stored outside the app component for better clearence

### Interface

The interface is mainly constructed with the usage of [shadcn](https://ui.shadcn.com/). The tailwind integration made it fast and reliable to include alongside with the components made by me
## Challenges

The main challenge was to find a library that will best work within application scope.

At first, with [Material UI](https://mui.com/) everything was goind okay, but the theme configuration made it difficult to configure to my color scheme. After a bit more research, I found shadcn to resolve the theme configuration problem, plus integration with recharts to display the graph needed.

After interface creation, with no data, I created a fake json database and served it with the help of [json server](https://www.npmjs.com/package/json-server) in order to simulate API integration with the help of `useEffect`. In this quest I found the **tanstack/react-query** as a good library to handle data and pass them from one component to another without the need of extra API calls. After finishing with that, I saw that vercel did not support my architecture with **json database** so I had to revert my solution to a local fetch from the json file.

To make it happen in a seemless way, help functions where created in order to handle the data outside the component scope, so the main job of the component to be the display of data.
## Improvements

This demo application is capable of many more features that the ones displayed.

Here is some improvements that can be done, given the time and resources:

1. Add filters to the orders table
2. Add more info about the order entity like who made the order 
3. Add indicator at graph so the user knows what is the projected months
4. Add a toggle regarding service level to specify to only include historic months
5. Display the months that the stockout projection is going to happen
6.Add a toggle for light / dark mode