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
  _see ticketList.jsx_

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

## Dev Server and Hot Module Replacement

  * devServer has several configurations:
    hot: true enables HMR on the local server.
    contentBase points to the source code it will serve in the browser.
    publicPath specifies where hot-reloaded modules should be loaded. **This should always match the publicPath option in output.**

# WEEK 2 Homework notes.

## STATE

  * There are two types of data that control a React component: Props and State. State is data in an application that is dynamic, i.e. data that changes depending on circumstances. example from wikipedia article: _a TV is an example of state. to change the channel of a TV, the user usually presses a channel up or channel down button, in order to calculate the new channel that the user desires, the digital tuner in the TV must have stored in it the number of the current channel  and then adds one or subtracts one from this number to get the number of the new channel. this new number is then stored as the current channel. so the current channel number is part of the TV's state. they are stored in memory, which preserves the information when the TV is turned off, so when it is turned back on again the TV will return to its previous station._

  * In React, state refers to the current condition and or circumstance of a component or other relevant data. And it can always change. As opposed to Props and PropTypes which do not change. States are fluid and ever-changing and props are not. And not all components are capable of possessing state.

  * there are two major ways we can define React components.
    1. we can make a component by defining a function that returns JSX. These are called *stateless functional components*.
    2. we can also define a component class. These are called *class components* or *class-based components*.

  * Functional Components cannot have state.

  * here is an example of a class-based component:
  ```
  import React from 'react';

  class ExampleClassComponent extends React.Component {
    render() {
      return (
          <div>
            <h1>I am a stateful, class-based component!</h1>
            <p>These are props sent by my parent component:</p>
            <ul>
              <li>{this.props.examplePropOne}</li>
              <li>{this.props.examplePropTwo}</li>
           </ul>
         </div>
      );
    }
  }

  export default ExampleClassComponent;

  ```

  * the differences:
    1. Props can only be accessed by calling this.props.propName instead of props.PropName.
    2. Class-based components must include a render() method. the JSX returned by this method is what will be displayed in the browser.
    3.the class must always extend the built-in *React.Component* class to inherit component functionality from the React library.

## When to Use Classed Based Components

  * We should *_only ever_ define a component as a class if it _absolutely requires_ state*. If a component does not require state, it should always be stateless functional component. Avoiding unnecessary use of state is an important rule in React. It is recommended to always begin React projects using _only_ stateless functional components, as we have done thus far. Then, _only_ refactor select components into class-based components as it becomes necessary. *We are expected to follow this process at Epicodus*.

## *Planning*: We'll need to complete these steps to program our app to display confirmation questions before the form:
    1. First create a stateful classed-based component that will record whether our app is in the state of displaying questions, or in the state of displaying the form. We know this data must be state, not props, because it must be able to change.
    2. Then we'll construct an *event* to toggle this state value when the user completes the questions.
    3. Next, we will create a new component to contain the questions we want to appear before the form.
    4. Next, we'll use JSX conditional rendering to change what's displayed depending on the current state. that way our app can go from the state of displaying questions to the state of displaying the form.
    5. Finally we'll learn about something called *unidirectional flow*, a concept will allow our components to communicate and work in sync. (Also, refactor the event we create in step 2.)

## Creating a Class-Based Stateful Component

  * this component will be the "headquarters" for our ticket creation process. It will be in charge of determining whether the application is in the state of displaying the form. or the state of displaying our questions. we make a compenent called NewTicketControl (common naming convention). state is essentially jsut a piece of data. like any other data, it could be a string, array, boolean, or even a complex deeply nested object. in this case, we want to display either questions _or_ a form. thus a boolean should be used.

  * the constructor includes the super keyword. super is called to access a parents class's constructor. because our component class inherits the built in React.Component constuctor, this ensures our component is instantiated with all nevessary React.Component functionality, _plus_ our state data.

  * this.state = {}; is a standard convention for declaring state in ES6 React classes. It's a JavaScript object defined in literal notation.
  If we wanted to define more than one state we would add more key:value pairs.

  * Also, we initially set our formVisibleOnPage state to false because we dont want the form visible until the user clicks through the questions.

## Changing State with Events

  * One of the most common triggers for state updates are events. Events are "things" that happen to HTML elements. when JavaScript uses HTML pages, JavaScript can "react" on these events. An HTML event can be something the browser does or something a user does. Some examples of events:
    * an HTML web page has finished loading
    * an HTML input field was changed
    * an HTML button was clicked
  JavaScript lets you execute code when events are detected. HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
  some events:
    * onchange: an HTML element has been changed
    * onclick: user clicks an elements
    * onmouseover: cursor hover
    * onmouseout: hover ends
    * onkeydown: user pushes a keyboard key
    * onload: the browser has finished loading the page.
  Event handlers can be used to handle, and verify, user input, user actions, and browser actions. HTML event attributes can execute JavaScript code directly, call JavaScript functions,

  * We use the *onClick* event. this means the attached method will be triggered when the user clicks this text.
  * The {this.handleClick} portion states that a method from _this_ component called handleClick will be triggered went he element is clicked.
  * in React, a method executed in response to an event is called an *event handler*. in this example we call our event handler, handleClick(), this is common practice to inclue the term *handle* in the name of an event hanler so devs can quickly discern them from other methods.

## Updating State
  * Note that the built-in method setState() is used instead of altering the state directly. Doing something like this ( this.state = {formVisibleOnPage: false}; ) anywhere outside the constructor *will not work*
  * *the _only_ way we can update state outside of constructor() is by using the built-in method setState(): ( this.setState({formVisibleOnPage: true}); ).*

## Binding Methods
  * "this": when creating objects in intro we deifined constructors that use *this* to express when a  property was *bound to an instance of an object*. Each individual instance of these properties are bound to a specific *Contact* object. Then, we used prototypes to create methods that were *also* bound to our objects. A *bound method* is just method with its *this* keyword already defined. It's bound to an instance.
  But JavaScript *class methods are not bound by default*. Unlike the address book example our NewTicketControl component is a _class_. This means handleClick() is *not* bound, because it is not bound its *this* keyword in "this.setState({formVisibleOnPage: true});" is null. Which is why the error comes up in the console. So, we move the method into the constructor.

  *_BREAK IT DOWN_*
  * the constructor() _does_ know what *this* is, because it defines and creates each instance of our component. That's why we may successfully call things like *this.state={};* in constuctor().
  *  By stating *this.handleClick* we're referring to _this_ component's handleClick() method..
  * we're setting *this.handleClick* equal to *this.handleClick.bind(this);*. this line redefines the default unbound handleClick() method as its manually-bound equivalent. * Calling *.bind(this);* on *this.handleClick* binds the method to an instance of the component. This ensures the *this* in *handleClick()* matches the value of *this* from within *constuctor()*.
    * Summary *constructor()* is invoked whenever a new component is created. As part of the creation process the *constructor()* will now define the *this* used in handleClick() to match the value of its own *this*. That is. the component constructor() is instantiating.

## Conditional Rendering

  * After a user clicks the yes button we have just made, we want to update the formVisibleOnPage state value and render the new ticke from in place of the confirmation questions. So far, our render() methodin NewTicketControl ahs only returned JSX. But like any other method, we may include logic before the return statement. Adding logic to NewTicketControl's render() can conditionally render different content depending on the value of *formVisibleOnPage*.

## Data flow (in the case of this example)
  * we first want to think of what data we want to move to where.

  * the /newticket route renders out NewTicketControl component.

  * NewTicketControl first renders its child ConfirmationQuestions component.

  * ConfirmationQuestions has a _Yes_ button. when it is clicked we want the formVisibleOnPage state value to change its boolean.

  * When this occurs, the conditional rendering in NewTicketControl's render() method will display the NewTicketForm component instead of ConfirmationQuestions. Due to the state value boolean of formVisibleOnPage changing, we see a different component rendered.

  * steps
    1. the _Yes_ button in ConfirmationQuestions needs an event so we can recognize when it is clicked
    2. the _Yes_ button event handler in ConfirmationQuestions must trigger code to update the formVisibleOnPage state value in NewTicketControl. But these are two separate components! This means the event in ConfirmationQuestions needs to somehow communicate with NewTicketControl.

## Unidirectional Data Flow

  * is a language-agnostic term for applications whose data flows in one direction. this is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by a specific component, and any data or UI derived from that *state can only affect components "below" them in the tree*. Therefore New could pass data to ConfirmationQuestions. _BUT_ ConfirmationQuestions *cannot* pass data up to NewTicketControl. not only would miving data in this direction completely break the rules of unidirectional data flow, but it is also impossible. because, remember, stateless components are unaware of their parent. _React components are SUPER modular_.

## Implementing Data Flow with Callbacks

  * So, how do we alert the parent of a child component?? Callback()!
    1. Define a callback function in the parent component where the state or data we want to alter resides. This function is responsible for doing something with the data; like altering state to trigger UI updates.
    2. The parent component passes this function into the child component as a prop.
    3. The child component can access the callback function method through its props and call it at the relevant time(_yes_ button click).
    4. When the child executes the callback method from its props, the method resides in the parent class it has access to update the parent's state.
  * So, the child component is not "emitting" an event upwards, like Angular. It's just using one of its props that was passed down to it.

## Forms and Refs

  * _Planning_ :
    1. We will ad something called *refs* to our form. They will allow us to collect information users place in form fields.
    2. Once we're able to gather user-provided data, we'll need decide where to keep it. We'll learn how to use a concept/best practice called *lifting state* to structure our React applications and their state in the most efficient manner.
    3. Once we've determined where to keep our new state we'll add code that will move user-provided data to this location, similar to the manner we "moved" info between ConfirmationQuestions and NewTicketControl.
    4. Next we'll add code to dynaimcally render our new stateful list of user-created tickets.
    5. Finally, we'll implement a quick-and-easy library called UUID that will assign unique IDs to each ticket.

  * _Forms_ :
    * Events: first we need to listen for a from submission.
      * <form onSubmit={handleNewTicketFormSubmission}>
      _don't forget: onSubmit events only fire correctly if the form button includes a type='submit' property_
      * Then, define the event handler before return().

  * _Refs_ :
    * Gathering user input: to gather this from the form after submit. we'll use a reference(known as a *ref*) to handle this. A *ref* is an identifier used to reference DOM elements.

## Lifting State - part 1

  * _types of state_ : in our example of NewTicketControl component contains a formVisibleOnPage state value(boolean). This value is used exclusively by NewTicketControl. Even though both NewTicketForm and ConfirmationQuestions are rendered conditionally based on the state boolean value, the state itself never leaves NewTicketControl. This is important to mention because there are actually two types of state: *application state* and *local state*, and they should each be stored in different locations.
    * *local state:* the state contained within NewTicketControl is an example of local state because it never leaves the file, nor is it referenced elsewhere. State to hide and show contednt is a common example of local state.
    * *application state:* state shared and used throughout _multiple_ components. Application state is usually the main "type" of data an application is responsible for working with.
    * _deciding between the two_: the first step in deciding where to store state is determining whether it is application or local state because *application state must be stored in a location where it can be passed down to _all components_ that use it.* Remember, *unidirectional data flow* data must only flow downward. This mens any instances of application state must reside "above" all components that require it. *Local state*, on the other hand, can just reside in what ever component it's local to, since we don't need to consider the implications of unidirectional data flow.
    * *Where to Place Application State* : unlike Angular there is no universal rule dictating the exact spot state should reside. It's up to us to make that decision based on the needs and structure of our individual app.

  * Lifting state: a general best practice stated by React --several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. As apposed to angular where we would have _always_ placed data at the very top of the component tree, we only place it as "high" as _necessary_. That is *the closest common ancestor of all components that need the application state data*. This keeps React applications performant by ensuring data is only loaded in the areas that absolutely require it. This process of placing application state only as high in the component tree as necessary is called *lifting state*. Again: *when we work with state that affects multiple components, we must find the components' closest common parent, and lift the data up to that parent. The parent then passes the  data down to any children that require it.*
    * Lifting State Questions to consider:
      1. _Should this data be application or local state_?
        * to determine this we need to consider _where_  data will be used because we want to take user-provided values from form fields, and turn them into individual Ticket components rendered within TicketList, this data _has_ to be application state becuase multiple components will use it. (If, in future apps, the answer to the question is local state, you would simply store the data in the component it is local to.)
      2. _If the data is application state, what is the closest common ancestor of all components that need it_?
        * We've determined user ticket data will be application state. Therefore it must be stored in a location where it can be passed downward to all components that require it. In the existing component tree we have that will be the App component. While this is similar to Angular we chose the location for different reasons. In the case of a small component tree we will often place the application state in App, but this is not standard practice. In fact we must make the choice each time considering the component tree and the components that absolutely need access to the application state.
  * Declaring Application State
    * Remember we will always refactor a stateless component into a stateful one. here are 5 steps to make the transistion:
      1.Create an ES6 class with the same name that extends React.Component.
      2. Add a single empty method to it called render(){}.
      3. Move the body of the function into the render method's body{}.
      4. Replace any calls to props with this.props in the render() body. (And any calls to event handlers should change from eventHandlerName to this.eventHandlerName.)
      5. delete the remaining empty function declaration.
  * Now that our state has been lifted to App by converting it to a stateful component. we need to do two things.
    1. get user-provided ticket data from NewTicketForm _up_ to where application state is now stored in App.
    2. Ensure the masterTicketList data is also passed down to TicketList and Ticket components, so we can render out ticket datat in the browser.
  * _Inverse Data Flow_
    * This is a specific kind of unidirectional data flow. React documentation defines it as *the passing of information from a component to the nearest parent component with shared state*. this means that getting user provided data from NewTicketForm into App, where the application state reside, will be *inverse data flow*.
    * _Implementing Inverse Data Flow with Callbacks_
      * to do this we employ a callback method passed through the component tree as a prop just like handleTroubleshootingConfirmation() callback we created in NewTicketControl. (see unidirectional data flow ordered list) Remember *we cannot alter state directly*. we can _only_ alter state using *setState() and setState() takes a key:value pair*: the state we are updating and adn the _new_ vallue we'd like to update it to. So we must create a temporary copy of our array. Push the new tickit to this temp version, then set state eqaul to this updated iteration of our array.
    * _Binding Methods_
      * Also notie the handleAddingNewTicketToList() function uses *this* when it calls *this.setState()*. That means we'll jave to bind the method in the components constructor.
    * _passing a Callback from Parent to Child_
      * now that our App component now contains a method that will update its masterTicketList state to include new tickets. Next we need to pass this callback function down to NewTicketForm so it may call it when the user submits the form by changing the syndax in the Route element. we are essentially just overriding the built-in render() method of this Route to return the JSX for our component and its prop. Specifically we're stating NewTicketControl has a onNewTicketCreation prop which contains the handleAddingNewTicketToList() method from App.jsx. Also, notice the naming convention we've used here. when passing functions as props they should be named *in a way that depicts _when_ they'll eb called*. teh original method is preceded by *handle*, then when we pass it down as a prop we precede it with *on*.
      * Declaring Proptypes: since we added a new prop to the NewTicketControl component, we'll need to update its PropTypes.
    * _passing a Callback from Child to Grandchild_
      * We declare that NewTicketForm will have a prop called onNewTicketCreation and set it equal to this.props.onNewTicketCreation. Notice that unlike the first time we passed this function down the component tree, we was call this.props first, becuase in the context of NewTicketControl, this function is a prop.
      * Declaring PropTypes: becuase we have added a new prop to NewTicketForm, we'll need to declare a proptype fro it and add props as an argument to its function delcaration.

## UUIDs
  * one way we can further improves React's functionality is to give instances of data unique id's. luckily we can leverage a library to generate these for us.
    1. run $ npm install uuid@3.2.1 in the top level of your directory.
    2. import { v4 } from 'uuid'; in your form input components
    3. add the key:value pair of "id: v4()" to your props.onNewTicketCreation or equivalent method.
    4.next in your map function change get rid  of your index argument and change the "key={index.id}" to  "key={cheese.id}".

## Linting for State

  in .eslintrc.json add a rule called no-direction-mutation-state that catches any attempts to directly mutate state, instead of using setState()

























********************
