import "./settings.css";

import { Settings as SettingsIcon } from "lucide-react";
import AllocationForm from "../../components/forms/AllocationForm";

import useBudget from "../../hooks/useBudget";

export default function Settings() {
  const {
    monthlyAllocation,
    updateMonthlyAllocation,
    resetBudget,
  } = useBudget();

  return (
    <div className="settings-page">
      <section className="settings-header">
        <div className="page-header-inner">
          <div className="page-header-icon">
            <SettingsIcon size={24} />
          </div>
          <div>
            <h1>Pengaturan</h1>
            <p>
              Atur alokasi pengadaan dan preferensi aplikasi secara mudah.
            </p>
          </div>
        </div>
      </section>

      <section className="settings-content">
        <div className="settings-card">
          <h2>Alokasi Bulanan</h2>

          <AllocationForm
            allocation={monthlyAllocation}
            onSave={updateMonthlyAllocation}
          />
        </div>

        <div className="settings-card danger-zone">
          <h2>Reset Data Pengadaan</h2>

          <p>
            Hapus progres roadmap, item yang dibeli, dan riwayat saldo.
          </p>

          <button
            className="reset-button"
            onClick={resetBudget}
          >
            Setel Ulang Data
          </button>
        </div>
      </section>
    </div>
  );
}