# What-is-Redux
Learn [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) and make a note for everyone include me.  
Bundle container for store the total reducer/dispatcher for the action objects.

## 1. Environment setup
 - Install **node.js** (for running modules and tools)
 - Install **React developer tools** (for Chrome or Firefox browser)
 - Install **Redux developer tools** (Only for Chrome)
 - Install terminal [**cmder**](https://cmder.net/) (only if you are windows user)


## 2. React Router Model
import from **"react-router-dom"**  
react router API v3
- Router > router model component
- Route > redirect to URL
- browserHistory > store the history data
- Link > href and redirect
- IndexRoute > initial the default component in the home page (Deprecated on V4)


## 3. Store data in Redux
Storing all the data in the Redux object instead of individual state in every components.
1. Dispatching actions to reducers.
2. Reducer will mapping to the function and implement.


## 4. React refs
Refs provide a way to access DOM nodes or React elements created in the render method.(Do not overuse)
```
console.log(this.refs);
// Will get the Object of refs HTML components.

<div ref={this.props.num1} />;
<div ref={this.props.num2} />；
```


## 5. Reducer Composition
Create a new **reducer** that calls the existing **reducers** to manage parts of its state and combines the results in a single state object.


## 6. Error Tracking and Insights with Sentry
- Dash board for monitoring the client activities and log.
- Individual devices, browser, OS, user and others.
- Classify the error log by customize tag.

1. Import **Raven** for exporting user log.
2. Authorize the permission to the **Sentry** app.
3. Set up the configuration and import the component to the index.js.


## 7. Redux Dev Tools
- Toggle any actions by **Time machine** for issue tracking.
- Reset, Revert, Sweep, Commit features.


## 8. Redux extend
Can not put **asynchronous** code in **Reducer** directly.
Use libraries below:  
It will fetch the asynchronous API then **dispatching** the action to the reducer.
- **reux-thunk**
- **redux-sagas**
