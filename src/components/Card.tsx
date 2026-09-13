import type { Technology } from "../types/Cardtype";

type CardProps = {
  technology: Technology;
  selectedTech: Technology[];
  onAdd: (technology: Technology) => void;
};

export default function Card({ technology, selectedTech, onAdd }: CardProps) {
  const isAdded = selectedTech.some((tech) => tech.id === technology.id);

  return (
    <div className="card bg-base-100 shadow-xl ">
      {/* Icon */}
      <div className="px-5 py-5 flex justify-between">
        <div>
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-16 w-16  object-contain"
          />
          {/* Name */}
          <h2 className="card-title">{technology.name}</h2>
        </div>

        <div>
          <span className="badge badge-secondary">{technology.badge}</span>
        </div>
      </div>

      <div className="card-body">
        {/* Badge */}

        {/* Description */}
        <p className="text-sm text-gray-500">{technology.description}</p>

        {/* Category + Difficulty */}
        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-outline">{technology.category}</span>

          <span className="text-sm">{technology.difficulty}</span>
          <div>⭐ {technology.rating}</div>
        </div>

        {/* Rating */}
        {/* <div className="mt-2">⭐ {technology.rating}</div> */}

        {/* Add Button */}
        <div className="card-actions mt-4">
          <button
            className={`btn w-full ${
              isAdded ? "btn-disabled" : "text-white border-none bg-black"
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
