// import Card from "./Card";
// import type { Technology as TechnologyType } from "../types/Cardtype";

// type TechnologyProps = {
//   cardData: TechnologyType[];
//   selectedTech: TechnologyType[];
//   onAdd: (technology: TechnologyType) => void;
// };

// export default function Technology({
//   cardData,
//   selectedTech,
//   onAdd,
// }: TechnologyProps) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {cardData.map((technology) => (
//         <Card
//           key={technology.id}
//           technology={technology}
//           selectedTech={selectedTech}
//           onAdd={onAdd}
//         />
//       ))}
//     </div>
//   );
// }

import Card from "./Card";
import type { Technology as TechnologyType } from "../types/Cardtype";

type TechnologyProps = {
  cardData: TechnologyType[];
  selectedTech: TechnologyType[];
  onAdd: (technology: TechnologyType) => void;
};

export default function Technology({
  cardData,
  selectedTech,
  onAdd,
}: TechnologyProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((technology) => (
        <Card
          key={technology.id}
          technology={technology}
          selectedTech={selectedTech}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
