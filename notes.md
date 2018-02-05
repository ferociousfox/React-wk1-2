# React

* What is ReactJS?
_React is a JS library used to create dynamic views. It solves the prolbem of slow load times caused by large blocks of HTML._


* History
_React was developed by FaceBook in 2011 for use in the newsfeed area, which was having issues with slow load times. They billed it as a "JavaScript library for building user interfaces."_

_Instagram integrated react in 2012 and it was released as an open source technology in May of 2013._

## ReactJS vocabulary

**Views** : _the part of my apps the user acutally sees on the screen. AKA the User Interface or view layer. It manages how the user interfaces look ad behave, while remaining unconcerned with the back-end of an application._

**Library** : _Frameworks, like Angular, include some built-in functionalities for things like client-side routing or loading/saving/editing data from a database. React is only concerned with the view layer. Tools that offer a single facet of functionality like this are called libraries. They're usually integrated alongside other libraries and tools to create a customized stack that meets the needs of the particular project._

**Highly-Dynamic** : _This simply refers to views that need to change and update **a** **lot**. React allows us to automatically, dynamically update the UI quickly, without reloading the page. So, any application or site that requires frequent, speedy updates is a great candidate for React._

## What makes React great

* Component-Based
  _Like Angular, React is Component-based. this assists in orgainzing even the most complex user interfaces into small packages of dedicated functionality. also these components are reusable aiding us in keeping it DRY._

* Declarative
  _this means we write code that describes the intended end result, but not every step required to reach that result. For example, HTML is declarative. we don't define every pixel, just the end result. Declarative code is widely considered more reusable, readable, and easier for programmers to collaborate on._

* Data Model Synchronization
  _React includes built-in functionality to automatically synchronize our data models with our user interface. That means when we update a piece of data in our application (**called state** ...), we can code our user interface to automatically update to reflect that change._

* Virtual DOM
  _For now, this allows us to interact with the DOM more efficiently, with much less code than other libraries and frameworks._

* Easier to Create Single Page Applications
  _with Multiple page applications, each time a user requests information, a new page must load. Most modern webpages are a single page on the other-hand. despite being large applications such as facebook. They load a single page and dynamically update that sole page as necessary. the creates a snappier, smoother user experience due to the reduced number of page refreshes. this allows the user to complete multiple actions without navigating to a new page. These can be more difficult to create and maintain. The DOM needs to me updated constantly. The data and the user interface must continually be synchronized. But thanks to React's virtual DOM, and data model synchronization capabilities, React makes creating these modern apps much easier._

* JSX
  _A special syntax which allows developers to mix HTML with JavaScript._

* Support
  _React is also maintained by facebook and Instagram. so it will likely continue to be maintained and curated into the foreseeable future._

* Library Benefits
  _this offers us massive flexibility in defining the other parts of their application and stack to fit the specific needs of their app or website._

* React Native and VR
  _React native is for building mobile-friendly applications with React. React VR is a framework for building VR apps using React and JS... NEAT_

## Creating and Rendering Basic Elements

* notes on set up and implementing React
  _Root DOM node(target container): this is the area of the page that react will manage, It should always be an empty div. Should have the id of app-root, react-container, or react-app-root._

  _so we add a script tag below title to bring react in and add another script tag after the body to link with index.js_

  _**creating elements**: elements are the smallest building blocks of react apps they're JS objects that describe what we'd like displayed on the screen. check index.js for syntax. call 'React' to invoke the core library then 'createElement()' to do just that. this method takes at least three arguments:_
    * 1st the type (can be an HTML tag) or can be a React component.
    * 2nd the Props(the properties of the element), even if no props present we must include the curly braces.
    * 3rd lists the children of this element. in this example case it is just the text of the h1 tag. note: if there are more than three arguments you are specifying multiple children of the parent element.

  _Rendering elements with ReactDOM_
  ReactDOM.reder(): _first we tell it what to render, in this case that is the var greeting. Second we tell it where to render this element, 'react-app-root' in this case. Third the method can also take a callback function as a third argument._

  **How React.createElement() Works**
  * ReactDOM.render() is acutally creating HTML elements using a method in JS's web API called Document.createElement() this method takes a single argument that returns a single HTML element. That means React.createElement() calls Doc.createElement() for each argument provided.

## The Virtual DOM
  * DOM: The Document Object Model is the browsers interpretation of the HTML it renders. The DOM is a language-independent model of objects that represent the structure of a document. whereas HTML is the markup language used to create and represent a DOM.
## how React makes updating the real DOM faster

  1. _React Creates its own Virtual DOM_ the virtual DOM is achieved through react's declarative language. when we use React's .createElement() we are creating new virtual elements to be rendered.

  2. _React Compares the Actual DOM to its Virtual DOM_ after crafting its own virtual DOM, React then compares it to the actual DOM in the browser, taking note of all the differences between the two.

  3. _React Calculates Changes_ it then automatically calculates the least number of changes necessary to update the actual DOM to match its virtual DOM. This process is known as "reconciliation".

  4. _React updates the Actual DOM_ React then updates the actual DOM to match the virtual DOM only once, with the least number of necessary changes it has just calculated, Making each small change individually.

  5. _Repeat_ each new update comes as the user takes actions.

## Intro to JSX and Babel

  * What's different about JSX from html

  1. _Expressions_ in jsx make sure to **use curly brackets for expressions, including string interpolation**. i.e <h2>{new Date().toLocleTimeString()}</h2>

  2. _Parent Elements_ **Always nest elements in a single parent element** ReactDOM.render() can only render a single React element at a time(with nearly as many children as desired).

## Building an Environment

  * _Environment_ a combination of project dependencies necessary for their project to functional listed below.
    * _A Package Manager_ a tool to manage project dependencies. we'll continue to use Node's npm tool to install and manage packages. As in JS class we'll save dependencies to a package.json file.
    * _A Transpiler_ to translate our JSX to ES5 we will use Babel
    * _A Module Bundler_ to collect source code and dependency code and concatenates it into one big central file. This is best practice because it decreases load time and minifies code(further decreasing load time). we will use **webpack** as our module bundler because it has flexible configurations and a development server.

  * _Setup_
    1. navigate to app directory and run
      * $ npm init
    2. Make a .gitignore file with these listed
      * .DS_STORE, node_modules, build
    3. Install our module bundler
      * $ npm install webpack@3.4.0 --save-dev
    4. Then install globally (-g)

  * _Unpacking Webpack_
      * We require the webpack package and resolve the functionality from the path package at the top of the file. The 'path' library is a dependency of Webpack. It allows us to resolve file paths. **Resolving a path** is the act of providing a dedicated tool(like the path library) the name of a directory or file, and relying upon it to find the exact path. allowing us to shorten file paths significantly.
    * _Entry_
      * within the module we declare an entry specifying the file where the bundling process starts. An **entry point** is the file responsible for instructing the module bundler how to build the application.
    * _Output_
      * This tells Webpack where to place the bundle file it creates. **Path** points to a directory called 'build'. this is where our transpiled code, bundled source code will reside. We call resolve() and pass the directory name('build') and ('dirname'). **File name** determines the name of the file containing our bundled code.
    * _Resolve_
      * this tells Webpack to locate files with specific extentions.

  <!-- _have to stop and go pick up my daughter, time spent up ^to now is 5 hrs ten minutes^_
    _^resuming work now^_ -->

## Functional Programing

  * Functional programming uses basic functions as its building blocks instead of objects. Object-oriented programming organizes logic around the _things_ an application manages, whereas functional programming organizes an application around the _actions_ it performs.

## Components

  * Components are the building blocks of react.
  * Most components in React are functionalities
  * App.jsx is a standard naming convention for parent components.

  * We always import React from the "react" npm package at the top of the file.

  * **The Component is a function**

  * the function returns the JSX this component will render in the browser

  * components reside in their own file, and are exported as a module so other areas of the application may import it.

## Passing Props
 * we pass props in component JSX tags.

 * some awesome props options:
  * MyExampleComponent.propTypes = {
      exampleArray: PropTypes.array,
      exampleBoolean: PropTypes.bool,
      exampleFunction: PropTypes.func,
      exampleNumber: PropTypes.number,
      exampleObject: PropTypes.object,
      exampleString: PropTypes.string,
      exampleSymbol: PropTypes.symbol,
      exampleReactElement: PropTypes.element,
    }
    exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
    exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),
    exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),
    optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),

## Pure Functions
  * Pure function's return values are determined using only provided input values.
  * Pure functions do not Ever alter external state or application data. i.e.
  _consider_ function add(a, b){
              return a + b;
            }
  _this function is pure because its return value is calculated using only the provided arguments(a and b), and it contains no code to alter anything else about the program. It accepts arguments(props) and returns a value(React elements)._
  _becuase react components must be pure, they cannot actually alter their props. they can only take their arguments(props), compose them together into a portion of the UI and return the JSX results to be rendered._
  _If a component needs to alter data, that data must be stored in something called state, never a prop. props are read-only._




  *
