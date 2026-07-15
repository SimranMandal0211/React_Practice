const faqData = [
    {
        id: 1,
        question: "What is React and how does it differ from other frameworks?",
        answer: "React is an open-source JavaScript library developed by Meta for building user interfaces, specifically single-page applications. Unlike full-blown frameworks (like Angular), React focuses strictly on the view layer and relies on a component-based architecture and a Virtual DOM for high performance.",
    },
    {
        id: 2,
        question: "What is the Virtual DOM and how does it work?",
        answer: "The Virtual DOM is a lightweight, in-memory representation of the real DOM. When a component's state changes, React updates the Virtual DOM first. It then runs a 'diffing' algorithm to compare it with the previous version, identifying exactly what changed, and updates only those specific parts in the real DOM to maximize performance.",
    },
    {
        id:3,
        question: "What is the difference between Functional and Class Components?",
        answer: "Class components are older ES6 classes that use lifecycle methods (like componentDidMount) and require a render() method. Functional components are simpler JavaScript functions that take props as an argument and return JSX. Today, functional components are the standard because React Hooks allow them to manage state and lifecycle features easily.",
    },
    {
        id:4,
        question: "What are Props in React and are they mutable?",
        answer: 'Props (short for "properties") are read-only configuration data passed down from a parent component to a child component. They are strictly immutable; a child component should never modify the props it receives. If the data needs to change, the parent must change it and pass the new value down.',
    },    
    {
        id:5,
        question: "What is State in React and how does it differ from Props?",
        answer: "State is an internal, mutable data store managed completely within a specific component. While props are passed from the outside (like function arguments), state is local and private to the component (like variables declared inside a function). When the state changes, the component automatically re-renders.",
    },
    {
        id:6,
        question: "What is JSX and is it mandatory for React?",
        answer: "JSX stands for JavaScript XML. It is a syntax extension that allows you to write HTML-like code directly inside JavaScript. It isn't strictly mandatory—React can run using regular React.createElement calls—but it is highly recommended because it makes code significantly easier to read, write, and maintain.",
    },
    {
        id:7,
        question: "Why do we need 'keys' in React lists?",
        answer: "Keys act as stable identities for elements in a list. They help React's Virtual DOM identify which items have changed, been added, or been removed. Without unique keys, React might lose track of elements during re-renders, causing visual bugs or performance degradation.",
    },
    {
        id:8,
        question: "What are React Hooks?",
        answer: 'Hooks are built-in functions introduced in React 16.8 that allow you to "hook into" React state and lifecycle features from functional components. Common examples include useState for managing local data and useEffect for handling side effects like fetching data or setting up event listeners.',
    },
    {
        id:9,
        question: "What is the purpose of the useEffect hook?",
        answer: "The useEffect hook lets you perform side effects in functional components. It replaces traditional lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. It runs after every render by default, but you can pass a dependency array to control exactly when it triggers.",
    },
    {
        id:10,
        question: "What is Prop Drilling and how can you avoid it?",
        answer: "Prop drilling occurs when you have to pass data through multiple layers of nested components just to reach a deeply nested child that actually needs it. You can avoid it by lifting state up, using custom hooks, or implementing the React Context API (or state management libraries like Redux/Zustand) for global state.",
    },
    {
        id:11,
        question: "What is the React Context API?",
        answer: "The Context API is a built-in feature that provides a way to share data (like UI themes, user authentication, or language preferences) globally across the component tree without having to pass props down manually through every single level.",
    },
    {
        id:12,
        question: "What are Controlled vs. Uncontrolled Components?",
        answer: "In a controlled component, form input data is handled by the React state (the input value is tied to a state variable via useState). In an uncontrolled component, the form data is handled by the DOM itself, and you access the values using a React ref (via useRef) only when you need them.",
    },
]

export default faqData;