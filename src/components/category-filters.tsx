'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ProjectCategory } from '@/lib/types';

interface CategoryFiltersProps {
  categories: ProjectCategory[];
}

export default function CategoryFilters({ categories }: CategoryFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (params.get(name) === value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );
  
  const handleFilter = (category: ProjectCategory | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
        if(params.get('category') === category) {
             params.delete('category');
        } else {
            params.set('category', category);
        }
    } else {
        params.delete('category');
    }
    router.push(`${pathname}?${params.toString()}`);
  }


  return (
    <div className="flex flex-wrap gap-2 rounded-lg bg-secondary p-2">
      <Button
        variant={!currentCategory ? 'default' : 'ghost'}
        onClick={() => handleFilter(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={currentCategory === category ? 'default' : 'ghost'}
          onClick={() => handleFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
