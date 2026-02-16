import React from 'react';

interface ProgressBarProps {
  value: number;
  label?: string;
  showPercent?: boolean;
}

export function ProgressBar({ value, label, showPercent = true }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>{label}</span>
          {showPercent && <span style={{ fontSize: '13px', color: '#6b7280' }}>{clamped}%</span>}
        </div>
      )}
      <div style={{ height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
        <div
          style={{
            width: `${clamped}%`,
            height: '100%',
            backgroundColor: '#6366f1',
            borderRadius: '4px',
            transition: 'width 300ms ease',
          }}
        />
      </div>
    </div>
  );
}
