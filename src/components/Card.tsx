import type { Technology } from "../types/Cardtype";

type CardProps = {
  technology: Technology;
  selectedTech: Technology[];
  onAdd: (technology: Technology) => void;
};

export default function Card({ technology, selectedTech, onAdd }: CardProps) {
  const isAdded = selectedTech.some((tech) => tech.id === technology.id);

  return (
    <div className="card bg-base-100 shadow-xl border">
      {/* Icon */}
      <figure className="px-6 pt-6">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-24 w-24 object-contain"
        />
      </figure>

      <div className="card-body">
        {/* Badge */}
        <div>
          <span className="badge badge-secondary">{technology.badge}</span>
        </div>

        {/* Name */}
        <h2 className="card-title">{technology.name}</h2>

        {/* Description */}
        <p className="text-sm text-gray-500">{technology.description}</p>

        {/* Category + Difficulty */}
        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-outline">{technology.category}</span>

          <span className="text-sm">{technology.difficulty}</span>
        </div>

        {/* Rating */}
        <div className="mt-2">⭐ {technology.rating}</div>

        {/* Button */}
        <div className="card-actions mt-4">
          <button
            className={`btn w-full ${
              isAdded
                ? "btn-disabled"
                : "text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600"
            }`}
            disabled={isAdded}
            onClick={() => onAdd(technology)}
          >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}
