import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="bg-black h-full text-white grid place-content-center space-y-8">
      <h1 className="text-4xl">
        Hello from React + Tailwind + TypeScript + Vite starter repository
      </h1>
      <Accordion title="Accordion Title">
        <p>Accordion Content</p>
      </Accordion>
    </div>
  );
}

export default App;
