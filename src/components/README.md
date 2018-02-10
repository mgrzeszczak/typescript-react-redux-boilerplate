# components

This folder contains all components of the application:

* hello.tsx - example component

```
function mapStateToProps(appState: AppState) {
    console.log("State = ", appState);
    return {
        name: appState.nameData.name
    };
}

export default connect(mapStateToProps, { getName })(HelloComponent);
```

Function mapStateToProps is a function which translates the current application state to props of the component. It is called after every change of the application state. 

Instead of exporting the component, the exported object is the result of calling connect class, which lifts the component to become a container, using `mapStateToProps` and `mapDispatchToProps`(which gives the component access to selected actions). In this case it was possible to write `mapDispatchToProps` using a concise, shorter syntax.