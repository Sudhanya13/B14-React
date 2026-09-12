import type { Technology } from "../types/Cardtype";

type StackItemProps = {
  technology: Technology;
  onRemove: (id: string) => void;
};

export default function StackItem({ technology, onRemove }: StackItemProps) {
  return (
    <div className="flex items-center gap-3 border rounded-lg p-3">
      {/* Icon */}
      <img
        src={technology.icon}
        alt={technology.name}
        className="h-10 w-10 object-contain"
      />

      {/* Name + Category */}
      <div className="flex-1">
        <h3 className="font-semibold">{technology.name}</h3>

        <p className="text-xs text-gray-500">{technology.category}</p>
      </div>

      {/* Remove */}
      <button
        className="btn btn-sm btn-circle btn-error"
        onClick={() => onRemove(technology.id)}
      >
        ✕
      </button>
    </div>
  );
}
