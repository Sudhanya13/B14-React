import { use } from "react";
import Technology from "./Technology";

import type { Technology as TechnologyType } from "../types/Cardtype";

type TechcardsProps = {
  cardData: Promise<TechnologyType[]>;
  selectedTech: TechnologyType[];
  onAdd: (technology: TechnologyType) => void;
};

export default function Techcards({
  cardData,
  selectedTech,
  onAdd,
}: TechcardsProps) {
  const realData = use(cardData);

  return (
    <Technology cardData={realData} selectedTech={selectedTech} onAdd={onAdd} />
  );
}
