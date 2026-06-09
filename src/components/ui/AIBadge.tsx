'use client';

interface AIBadgeProps {
  size?: 'sm' | 'md';
}

export default function AIBadge({ size = 'sm' }: AIBadgeProps) {
  return (
    <span className={`fa-aibadge fa-aibadge--${size}`}>
      <span className="fa-aibadge__dot" />
      AI
    </span>
  );
}
