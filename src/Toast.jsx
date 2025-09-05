export default function Toast({ title, message }) {
  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 w-60 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="font-bold">{title}</h2>
        <span className="cursor-pointer">X</span>
      </div>
      <p>{message}</p>
    </div>
  );
}
