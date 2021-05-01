## PAGES:

- Pages contains Container & UI components for the corresponding feature.

### Container:

- A container deals with fetching the data, communicating with Redux, then passing down the data to components.
- In most cases it passes the data down to a Hybrid component (which is a composition of pure components).

### Component:

- A component is responsible to view the data received, has no connection to Redux. 

There are 2 types:

Hybrid: It typically wraps the pure components together. Can include local scope logic.
Pure: It only displays the data recieved and controlled by a Hybrid parent component.