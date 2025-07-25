'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}

const cats = [
  { name: 'Pizza', id: 1 },
  { name: 'Breakfest', id: 2 },
  { name: 'Drinks', id: 3 },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeId = useCategoryStore((store) => store.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map(({ name, id }) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeId === id &&
              'bg-white shadow-md shadow-gray-200 text-primary',
            className
          )}
          href={`/#${name}`}
          key={name}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
