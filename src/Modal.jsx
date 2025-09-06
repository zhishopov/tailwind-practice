export default function Modal({ title, text }) {
  return (
    <div className="fixed inset-0 flex items-center justify center">
      <div className="bg-white rounded-md shadow-lg max-w-md w-full p-6">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm mb-4">{text}</p>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-400 rounded">Cancel</button>
          <button className="px-4 py-2 bg-blue-400 text-white rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
