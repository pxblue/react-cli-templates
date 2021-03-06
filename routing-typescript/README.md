# Routing Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@pxblue/cra-template-routing-typescript?color=%23007bc1&label=%40pxblue%2Fcra-template-routing-typescript)

This is an official PX Blue template for use with the [Create React App](https://create-react-app.dev/) CLI. It is also used internally by the [PX Blue CLI](https://www.npmjs.com/package/@pxblue/cli).

This template includes the installation and initial setup of routing using [React Router](https://reactrouter.com/). It includes several placeholder routes/screens and a [Drawer](https://pxblue-components.github.io/react/?path=/info/components-drawer--get-read-me-story) navigator from the PX Blue [React Component Library](https://www.npmjs.com/package/@pxblue/react-components).

## Usage
This template can be used with Create React App:
```sh
npx create-react-app myapp --template @pxblue/routing-typescript
```
or using the PX Blue CLI:
```sh
npx -p @pxblue/cli pxb new react --name=myapp --language=ts --template=routing
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
└── /src
    |── index.tsx                           // the root file that renders the application (Theme Provider, Router, & CSS Baseline styles)
    |── App.tsx                             // sets up the DrawerLayout component
    |── /components                           
    │   └── Logo.tsx                        // PXB spinning logo graphic
    |── /contexts                           
    │   └── drawerContextProvider.tsx       // creates a Context to allow pages to open/close the navigation drawer
    |── /pages                              // sample application pages
    └── /router
        |── drawer.tsx                      // the contents of the navigation drawer
        |── main.tsx                        // React Router route configuration
        └── routes.tsx                      // route definitions for use in the Router
```