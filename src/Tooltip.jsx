export default function Tooltip({ text, children }) {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute left-1/2 -translate-x-1/ mb-2 hidden group-hover:block">
        <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 shadow">
          {text}
        </div>
      </div>
    </div>
  );
}
