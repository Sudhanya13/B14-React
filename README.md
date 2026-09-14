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
- React Toastify (npm package)
- Vite (build tool)
- JSON data (for technology data)

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

JSX (JavaScript XML) is a syntax extension for JavaScript that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and helps us describe how the UI should look.

**Example:** A basic React component returns a block of JSX.

```tsx
function WelcomeCard() {
  return (
    <div className="card">
      <h1>Welcome to React!</h1>
      <p>This is a simple JSX element.</p>
    </div>
  );
}

export default WelcomeCard;
```

---

### 2. What is the difference between props and state?

**Props** are values passed from a parent React component to a child component. They are read-only, meaning a child component should not modify the props it receives.

In React, data flows in one direction, from parent to child. This is called **unidirectional data flow**, and props are used to pass the data.

**Example:** Here is a complete setup showing how a parent component (`App`) passes different values to a reusable child component (`UserCard`).

```tsx
// Child Component
function UserCard(props) {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <p>Role: {props.role}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <h1>Company Directory</h1>

      {/* Passing different data to the same component */}
      <UserCard name="Alice Johnson" role="Software Engineer" />
      <UserCard name="Bob Smith" role="UI/UX Designer" />
    </div>
  );
}

export default App;
```

**State** is data managed inside a component. When state changes, React updates the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data inside a component.

In this project, I used it to manage the **selected technologies** in the user's stack.

For example, I used `useState` to store the technologies selected by the user:

```tsx
const [selectedTech, setSelectedTech] = useState<Technology[]>([]);
```

When a user adds a technology, `setSelectedTech` updates the state and adds that technology to the stack.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders or when a dependency changes.

I did not use `useEffect` in my project to load the JSON data. Instead, I used `useState` to create a Promise for fetching `data.json` and used `Suspense` to show a loading message while the data was being fetched.

`useEffect` could also be used for fetching the data, but I chos
