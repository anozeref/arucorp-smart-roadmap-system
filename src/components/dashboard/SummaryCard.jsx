import {
  CreditCard,
  Wallet,
  Layers,
  CheckCircle2,
} from "lucide-react";

const iconMap = {
  "Alokasi Bulanan": CreditCard,
  "Saldo Saat Ini": Wallet,
  "Total Item": Layers,
  "Item Dibeli": CheckCircle2,
};

export default function SummaryCard({
  title,
  value,
}) {
  const Icon = iconMap[title] || Layers;

  return (
    <div className="summary-card">
      <div className="summary-card-icon">
        <Icon size={24} />
      </div>

      <div className="summary-card-content">
        <p className="summary-title">{title}</p>

        <h2 className="summary-value">{value}</h2>
      </div>
    </div>
  );
}