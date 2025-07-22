'use client';

import React from 'react';

import { Title } from '@/components/shared/Title';
import { FilterCheckbox } from '@/components/shared/filters/FilterCheckbox';
import { RangeSlider } from '@/components/shared/filters/RangeSlider';
import { CheckboxGroup } from '@/components/shared/filters/CheckboxGroup';
import { Input } from '@/components/ui/input';

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can take" value="1" />
        <FilterCheckbox text="new" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={25}
            value={0}
            onChange={() => {}}
          />
          <Input
            type="number"
            placeholder="10"
            min={0}
            max={25}
            value={25}
            onChange={() => {}}
          />
        </div>
        <RangeSlider
          min={0}
          max={25}
          step={1}
          value={[0, 25]}
          // onValueChange={() => {}}
        />
      </div>

      <CheckboxGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={6}
        items={[
          { text: 'Chicken', value: '1' },
          { text: 'Onion', value: '2' },
          { text: 'Tomato', value: '3' },
          { text: 'Chicken', value: '4' },
          { text: 'Onion', value: '5' },
          { text: 'Tomato', value: '6' },
          { text: 'Chicken', value: '7' },
          { text: 'Onion', value: '8' },
          { text: 'Tomato', value: '9' },
        ]}
        onClickCheckbox={() => {}}
      />
    </div>
  );
};
