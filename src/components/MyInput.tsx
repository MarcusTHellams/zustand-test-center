import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { Input, InputProps } from './ui';

export const MyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <Input ref={ref} {...props} className={cn('ml-3', className)} />;
  },
);
