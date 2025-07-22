'use client';

import React, { useRef, useEffect, RefObject } from 'react';
import { useIntersection } from 'react-use';

import { cn } from '@/lib/utils';
import { Title } from '@/components/shared/Title';
import { ProductCard } from '@/components/shared/products/ProductCard';
import { useCategoryStore } from '@/store/category';

interface ProductsListGroupProps {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsListGroup: React.FC<ProductsListGroupProps> = (props) => {
  const { title, items, listClassName, categoryId, className } = props;

  const setActivCategory = useCategoryStore((store) => store.setActiveId);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as RefObject<HTMLElement>,
    {
      threshold: 0.4,
    }
  );

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActivCategory(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
