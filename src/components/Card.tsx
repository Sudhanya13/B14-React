import { toast } from "react-toastify";
import type { Technology } from "../types/Cardtype";

type CardProps = {
  technology: Technology;
  selectedTech: Technology[];
  onAdd: (technology: Technology) => void;
};

export default function Card({ technology, selectedTech, onAdd }: CardProps) {
  // Check if this exact technology is already added
  const isAdded = selectedTech.some((tech) => tech.id === technology.id);

  const handleAdd = () => {
    // 1. Check if the same technology is already added
    if (isAdded) {
      toast.warning(`${technology.name} is already added to your stack!`);
      return;
    }

    // 2. Check if another technology from the same category exists
    const sameCategory = selectedTech.some(
      (tech) => tech.category === technology.category,
    );

    if (sameCategory) {
      toast.warning(
        `You already have a ${technology.category} technology in your stack!`,
      );
      return;
    }

    // 3. Add technology
    onAdd(technology);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Icon + Badge */}
      <div className="px-5 py-5 flex justify-between">
        <div>
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-16 w-16 object-contain"
          />

          {/* Name */}
          <h2 className="card-title">{technology.name}</h2>
        </div>

        {/* Technology Badge */}
        <div>
          <span
            className="badge badge-secondary"
            style={{
              backgroundColor: technology.badgeColor,
            }}
          >
            {technology.badge}
          </span>
        </div>
      </div>

      <div className="card-body">
        {/* Description */}
        <p className="text-sm text-gray-500">{technology.description}</p>

        {/* Category + Difficulty + Rating */}
        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-outline">{technology.category}</span>

          <span className="text-sm">{technology.difficulty}</span>

          <div>⭐ {technology.rating}</div>
        </div>

        {/* Add Button */}
        <div className="card-actions mt-4">
          <button
            className={`btn w-full ${
              isAdded
                ? "bg-gray-200 text-gray-500 border-gray-200"
                : "text-white border-none bg-black"
            }`}
            onClick={handleAdd}
          >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}
