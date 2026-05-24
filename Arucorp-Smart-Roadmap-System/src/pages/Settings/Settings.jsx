import "./settings.css";

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
            <i className="fab fa-opencart"></i>
          </div>
          <div>
            <h1>Settings</h1>
            <p>
              Configure procurement allocation and application preferences.
            </p>
          </div>
        </div>
      </section>

      <section className="settings-content">
        <div className="settings-card">
          <h2>Monthly Allocation</h2>

          <AllocationForm
            allocation={monthlyAllocation}
            onSave={updateMonthlyAllocation}
          />
        </div>

        <div className="settings-card danger-zone">
          <h2>Reset Procurement Data</h2>

          <p>
            Remove roadmap progress, purchased items, and balance history.
          </p>

          <button
            className="reset-button"
            onClick={resetBudget}
          >
            Reset Data
          </button>
        </div>
      </section>
    </div>
  );
}