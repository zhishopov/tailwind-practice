import Toast from "./Toast";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen bg-gray-300">
        <h1 className="text-5xl font-bold p-6">Toast Example</h1>
        <Toast title="Test Title" message="Test message"></Toast>
      </div>
    </>
  );
}

export default App;
