import React from 'react';

interface SortableHeaderProps {
  label: string;
  sortKey: string;
  currentSort: string;
  direction: 'asc' | 'desc';
  onSort: (key: string) => void;
}

export function SortableHeader({ label, sortKey, currentSort, direction, onSort }: SortableHeaderProps) {
  const isActive = currentSort === sortKey;

  const handleClick = () => {
    onSort(sortKey);
  };

  return (
    <th>
      <button
        onClick={handleClick}
        type="button"
        aria-sort={isActive ? (direction === 'asc' ? 'ascending' : 'descending') : 'none'}
      >
        {label}
        {isActive && (
          <span aria-hidden="true">
            {direction === 'asc' ? ' ↑' : ' ↓'}
          </span>
        )}
      </button>
    </th>
  );
}
