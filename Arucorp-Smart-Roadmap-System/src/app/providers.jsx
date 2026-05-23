import { BudgetProvider } from "../context/BudgetContext";
import { ItemProvider } from "../context/ItemContext";
import { RoadmapProvider } from "../context/RoadmapContext";

export default function Providers({ children }) {
  return (
    <BudgetProvider>
      <ItemProvider>
        <RoadmapProvider>{children}</RoadmapProvider>
      </ItemProvider>
    </BudgetProvider>
  );
}