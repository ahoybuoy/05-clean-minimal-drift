import React from 'react';

export function TestDrift() {
  return (
    <div className="bg-[#f9fafb] p-[24px] rounded-lg border border-[#e5e7eb]">
      <h2 className="text-[#111827] text-xl font-semibold mb-3">
        Status Card
      </h2>
      <p className="text-[#6b7280] text-sm leading-relaxed">
        Mostly clean, but a few hardcoded color values snuck in.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <span
          className="inline-block w-2 h-2 rounded-full bg-[#22c55e]"
        />
        <span className="text-[#374151] text-sm">All systems operational</span>
      </div>
    </div>
  );
}
