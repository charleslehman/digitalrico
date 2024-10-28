import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      {children}
    </div>
  );
}

Card.Image = function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className="relative aspect-w-1">
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-64 object-cover", className)}
      />
    </div>
  );
};

Card.Content = function CardContent({ className, children }: CardProps) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
};