import React from 'react';
import Image from 'next/image';
import { ArrowRight, User, ShoppingCart } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/shared/SearchInput';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex gap-2">
          <Image src="/logo.png" alt="" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">PizzaHub</h1>
            <p className="text-sm text-gray-400 leading-3">Taste Lives Here</p>
          </div>
        </div>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <User size={16} />
            Login
          </Button>
          <div>
            <Button className={cn('group relative', className)}>
              <b className="text-white">10$</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart
                  size={16}
                  className="relative text-white"
                  strokeWidth={2}
                />
                <b className="text-white">1</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 text-white transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
