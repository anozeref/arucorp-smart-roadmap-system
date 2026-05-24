import { BudgetProvider } from "../context/BudgetContext";
import { ItemProvider } from "../context/ItemContext";
import { RoadmapProvider } from "../context/RoadmapContext";

export default function Providers({ children }) {
  return (
    <ItemProvider>
      <BudgetProvider>
        <RoadmapProvider>{children}</RoadmapProvider>
      </BudgetProvider>
    </ItemProvider>
  );
}