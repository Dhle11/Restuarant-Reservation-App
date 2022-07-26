import React from "react";

export default function FinishButton({ table, handleFinish }) {
  return (
    <button
      data-table-id-finish={table.table_id}
      type="button"
      onClick={handleFinish}
      className="tn btn-primary"
    >
      Finish
    </button>
  );
}
