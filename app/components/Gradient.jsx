import React from "react";

export default function Gradient() {
  return (
    <div>
      <div className="border border-white w-64"></div>

      <div className="w-64 h-64 relative">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{
            background:
              "conic-gradient(from 270deg at 50% 50%, rgba(0, 0, 0, 0.00) 2.3409034498035908deg, rgba(84, 192, 160, 0.10) 2.5281363911926746deg, rgba(0, 0, 0, 0.00) 181.31576299667358deg, rgba(84, 192, 160, 0.00) 256.43158435821533deg, #54C0A0 359.23537731170654deg)",
          }}
        ></div>
      </div>
    </div>
  );
}
