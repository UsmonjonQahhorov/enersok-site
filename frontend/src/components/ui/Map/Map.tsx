import { cn } from '@/utils/cn';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

export const Map = forwardRef<HTMLIFrameElement, MapProps>(
  ({ mapUrl, className }, ref) => {
    return (
      <iframe
        src={mapUrl}
        className={cn(
          'h-full w-full rounded-xl',
          className,
        )}
        title="Enersok position position"
        ref={ref}
        loading="lazy"
      />
    );
  },
);

Map.displayName = 'Map';
type MapProps = ComponentPropsWithoutRef<'iframe'> & {
  mapUrl: string;
  className?: string;
};