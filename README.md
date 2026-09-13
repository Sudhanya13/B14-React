# DevStack

## Project Name

**DevStack – Build Your Ideal Development Stack**

## Description

DevStack is a React-based web application that helps developers explore different technologies and build their own development stack. Users can browse technology cards, add technologies to their stack, and remove them when needed.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Vite
- JSON data

## Features

1. **Explore Technologies**
   Browse different development technologies such as frontend, backend, and database tools.

2. **Build Your Stack**
   Add technologies to your personal stack and see your selected tools in one place.

3. **Manage Your Stack**
   Remove individual technologies or clear the complete stack. Toast notifications provide feedback when actions are performed.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax which is extension to Javascript that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and helps us describe how the UI should look.

Example: A basic React Component returns a single block of JSX.

<!-- ```tsx
import React from 'react';

function WelcomeCard() {
return (

<div className="card">
<h1>Welcome to React!</h1>
<p>This is a simple JSX element.</p>
</div>
);
}
``` -->

export default WelcomeCard;

### 2. What is the difference between props and state?

**Props** are arguments passed from a parent react component to a child component. They are read-only(meaning a child component should never modify the props it receives.) In React, data flows in one direction, from parent to child. This is called unidirectional data flow, and the data is passed using props.

Example: Here is a complete setup showing how a parent component (App) passes different values to a reusable child component (UserCard).

import React from 'react';

// 1. The Child Component (Receives data via props)
function UserCard(props) {
return (

```tsx
// <!-- <div className="user-card">
// <h2>Name: {props.name}</h2>
// <p>Role: {props.role}</p>
// </div> -->

// );
// }
```

// 2. The Parent Component (Passes data to the child)

<!-- ```tsx
function App() {
return (

<!-- <div>
<h1>Company Directory</h1>
{/_ Passing different data to the same component _/}
<UserCard name="Alice Johnson" role="Software Engineer" />
<UserCard name="Bob Smith" role="UI/UX Designer" />
</div> -->

);
}

`````-->

export default App;

**State** is data managed inside a component. When state changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data inside a component.

In this project, I used it to manage the **selected technologies** in the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders or when a dependency changes.

I used it to **load the technology JSON data** when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.
It helps React identify which items have changed, been added, or been removed.
When the data in a list changes, React needs to update the user interface efficiently without destroying and rebuilding the entire DOM tree from scratch. The key acts as a permanent badge or identifier for each element.

If we map over an array in React and completely omit the key prop, it will not crash our application with a fatal runtime error, but it will print a prominent warning in your browser's developer console saying "Each child in a list should have a unique "key" prop."

For example:

````tsx
// {
//   cardData.map((technology) => (
//     <Card key={technology.id} technology={technology} />
//   ));
// }
// ```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, I used it to show an empty-stack message when no technology has been selected:

// ```tsx
// {selectedTech.length === 0 ? (
//   <p>Your stack is empty.</p>
// ) : (
//   // Show selected technologies
// )}
`````

If selectedTech.length is 0, React displays "Your stack is empty." Otherwise, it displays the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

```tsx
//  <Card technology={technology} />
```

A child can send something back by calling a **function passed by the parent as a prop**.

For example:

```tsx
//   <Card onAdd={handleAdd} />
```

The child can then call:

```tsx
// onAdd(technology);
```

This lets the parent update its state.
