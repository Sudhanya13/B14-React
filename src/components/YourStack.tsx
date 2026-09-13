import StackItem from "./StackItem";
import type { Technology } from "../types/Cardtype";

type YourStackProps = {
  selectedTech: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

export default function YourStack({
  selectedTech,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="bg-base-100 border border-gray-200 rounded-xl shadow p-5 h-fit">
      {/* Heading */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-bold">Your Stack</h2>
        </div>

        {/* Remove All */}
        {selectedTech.length > 0 && (
          <button
            className="btn btn-sm btn-outline btn-error"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty state */}
      {selectedTech.length === 0 ? (
        <div>
          <p>No tech is selected yet</p>
          <button className="btn btn-dash px-8 py-10">
            Your Stack is empty
          </button>
        </div>
      ) : (
        /* Selected items */
        <div className="flex flex-col gap-3">
          {selectedTech.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </aside>
  );
}
