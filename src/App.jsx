import Modal from "./Modal";
import Toast from "./Toast";
import Tooltip from "./Tooltip";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen bg-gray-300 relative">
        <h1 className="text-5xl font-bold p-6">Tailwind Practice</h1>
        <Toast title="Test Title" message="Test message"></Toast>
        <Modal title="Modal Title" text="This is a modal"></Modal>
        <Tooltip text="Click me to activate tooltip">
          <button className="px-4 py-2 bg-purple-600 text-white rounded">
            Hover me
          </button>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
