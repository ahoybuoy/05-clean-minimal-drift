import React from 'react';

// Dashboard with arbitrary Tailwind values that should use standard classes
export function StatsDashboard() {
  return (
    <div className="p-[22px] bg-white rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-200">
      <h2 className="text-[22px] font-bold text-gray-900 mb-[18px] tracking-[-0.02em]">
        Weekly Overview
      </h2>

      <div className="grid grid-cols-3 gap-[18px]">
        <div className="p-[16px] bg-blue-50 rounded-[10px] border border-blue-100">
          <p className="text-[12px] font-medium text-blue-600 uppercase tracking-[0.05em] mb-[6px]">
            Revenue
          </p>
          <p className="text-[28px] font-bold text-blue-900">$12.4k</p>
          <p className="text-[13px] text-green-600 mt-[4px]">↑ 12.5%</p>
        </div>

        <div className="p-[16px] bg-purple-50 rounded-[10px] border border-purple-100">
          <p className="text-[12px] font-medium text-purple-600 uppercase tracking-[0.05em] mb-[6px]">
            Users
          </p>
          <p className="text-[28px] font-bold text-purple-900">1,284</p>
          <p className="text-[13px] text-green-600 mt-[4px]">↑ 8.2%</p>
        </div>

        <div className="p-[16px] bg-amber-50 rounded-[10px] border border-amber-100">
          <p className="text-[12px] font-medium text-amber-600 uppercase tracking-[0.05em] mb-[6px]">
            Orders
          </p>
          <p className="text-[28px] font-bold text-amber-900">342</p>
          <p className="text-[13px] text-red-600 mt-[4px]">↓ 3.1%</p>
        </div>
      </div>

      <div className="mt-[24px] p-[16px] bg-gray-50 rounded-[10px]">
        <div className="flex items-center justify-between mb-[12px]">
          <span className="text-[14px] font-medium text-gray-700">Conversion Rate</span>
          <span className="text-[14px] font-bold text-gray-900">4.8%</span>
        </div>
        <div className="h-[6px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full duration-[500ms]"
            style={{ width: '48%' }}
          />
        </div>
      </div>

      <button className="mt-[20px] w-full py-[10px] bg-gray-900 text-white rounded-[8px] text-[14px] font-semibold opacity-[0.95] z-[10] border-[2px] border-transparent hover:opacity-100 duration-[200ms]">
        View Full Report
      </button>
    </div>
  );
}
// Updated: 2026-02-15T23:30:43Z
