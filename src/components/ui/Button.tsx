import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center px-6 py-3 rounded-lg transition-colors font-medium',
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'border-2 border-white text-white hover:bg-white hover:text-blue-900',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}