# What-is-Redux
Learn Redux and make a note for everyone include me.


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