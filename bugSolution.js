```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph.</p>      
      <MyComponent props={{ someProp: 'some value' }}/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent({props}) {
  return (
    <div>
      <p>This is a custom component. {props.someProp}</p>
    </div>
  );
}
```