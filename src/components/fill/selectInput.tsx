import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectInput() {
  return (
    <Select>
      <SelectTrigger className='w-full data-[size=default]:h-12 rounded-2xl border-gray-300'>
        <SelectValue placeholder='Aspect Ratio' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sizes</SelectLabel>
          <SelectItem value='1:1'>Square 1:1</SelectItem>
          <SelectItem value='3:4'>Standard Portrait 3:4</SelectItem>
          <SelectItem value='9:16'>Phone Portrait 9:16</SelectItem>
          <SelectItem value='16:9'>Landscape 16:9</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
