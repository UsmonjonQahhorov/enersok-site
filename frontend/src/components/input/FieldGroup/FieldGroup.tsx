import { cn } from '@/utils/cn';
import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';

export const FieldGroup = forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col', className)} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

type FieldGroupProps = ComponentPropsWithRef<'div'>;

FieldGroup.displayName = 'FieldGroup';