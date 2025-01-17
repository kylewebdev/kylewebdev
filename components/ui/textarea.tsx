import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      // @ts-expect-error [New] https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing
      style={{ fieldSizing: 'content' }}
      className={cn(
        'flex min-h-[180px] w-full rounded-md border-none bg-charcoal-black px-4 py-4 text-body placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
