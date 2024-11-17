'use client';
import type {
    ComponentPropsWithoutRef,
    FC,
    ReactNode,
} from 'react';
import { forwardRef, Fragment } from 'react';
import {
    Close,
    Content,
    Description,
    Overlay,
    Portal,
    Root,
    Title,
    Trigger,
} from '@radix-ui/react-dialog';

import { Heading } from '@/components/ui/Heading';
import { cn } from '@/utils/cn';

/**
 * Props for the Sheet component.
 */
interface SheetProps {
    /**
     * The content of the sheet.
     */
    children: ReactNode;
    /**
     * Whether the sheet is open or not.
     */
    open?: boolean;
    /**
     * Whether the sheet is open by default or not.
     */
    defaultOpen?: boolean;
    /**
     * Whether the sheet is a modal or not.
     */
    modal?: boolean;
    /**
     * Function to be called when the sheet is opened.
     */
    onOpen?: () => void;
    /**
     * Function to be called when the sheet is closed.
     */
    onClose?: () => void;
}

/**
 * Sheet component that renders a dialog sheet.
 * @param props - The props of the Sheet component.
 * @param props.children - The content of the sheet.
 * @param props.open - Whether the sheet is open or not.
 * @param props.defaultOpen - Whether the sheet is open by default or not.
 * @param props.modal - Whether the sheet is a modal or not.
 * @param props.onOpen - Function to be called when the sheet is opened.
 * @param props.onClose - Function to be called when the sheet is closed.
 * @returns - The Sheet component.
 */
export const Sheet: FC<SheetProps> = ({
    onOpen,
    onClose,
    children,
    ...props
}) => {
    function onOpenChange(open: boolean) {
        if (open) {
            onOpen?.();
        } else {
            onClose?.();
        }
    }

    return (
        <Root onOpenChange={onOpenChange} {...props}>
            {children}
        </Root>
    );
};
Sheet.displayName = 'Sheet';
export const SheetTrigger = Trigger;
SheetTrigger.displayName = 'SheetTrigger';

// Sheet Close
type SheetCloseRef = React.Ref<typeof Close>;
type SheetCloseProps = ComponentPropsWithoutRef<typeof Close>;
export const SheetClose = forwardRef<SheetCloseRef, SheetCloseProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <Close className={cn(className)} {...props} ref={ref as React.Ref<HTMLButtonElement>}>
                {children}
            </Close>
        );
    },
);
SheetClose.displayName = 'SheetClose';

// Sheet Portal
type SheetPortalProps = ComponentPropsWithoutRef<typeof Portal> & {
    shouldPortal?: boolean;
};
const SheetPortal: FC<SheetPortalProps> = ({
    children,
    shouldPortal,
    ...props
}) => {
    if (shouldPortal === false) {
        return <Fragment>{children}</Fragment>;
    }

    return <Portal {...props}>{children}</Portal>;
};
SheetPortal.displayName = 'SheetPortal';

// Sheet Overlay
type SheetOverlayRef = React.Ref<typeof Overlay>;
type SheetOverlayProps = ComponentPropsWithoutRef<typeof Overlay>;
const SheetOverlay = forwardRef<SheetOverlayRef, SheetOverlayProps>(
    ({ className, ...props }, ref) => {
        return (
            <Overlay
                className={cn(
                    'fixed inset-0 z-50 backdrop-blur-sm',
                    'data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn',
                    className,
                )}
                {...props}
                ref={ref as React.Ref<HTMLDivElement>}
            />
        );
    },
);
SheetOverlay.displayName = 'SheetOverlay';

// Sheet Content
type SheetContentRef = React.Ref<typeof Content>;
type SheetContentProps = ComponentPropsWithoutRef<typeof Content> & {
    /** The side of the sheet. Defaults to `right`. */
    side?: 'left' | 'right';
    /** Whether the sheet should be rendered in a portal or not. Defaults to `true`. */
    shouldPortal?: boolean;
    /** Whether the sheet should be focus locked on open or not. Defaults to `false`. */
    focusLock?: boolean;
    /** Whether the sheet should be closed on escape key down or not. Defaults to `true`. */
    closeOnEscape?: boolean;
    /** Whether the sheet should be closed on outside interaction or not. Defaults to `true`. */
    closeOnOutside?: boolean;
    /** Props for the `SheetPortal` component. */
    portalProps?: ComponentPropsWithoutRef<typeof SheetPortal>;
    /** Props for the `SheetOverlay` component. */
    overlayProps?: ComponentPropsWithoutRef<typeof SheetOverlay>;
    /** Whether the sheet should have a close button or not. Defaults to `true`. If `true` the `onClose` prop is required. */
    hasCloseButton?: boolean;
    /** Callback that is fired when the sheet is closed. */
    onClose?: () => void;
};
type PointerDownOutsideEvent = CustomEvent<{
    originalEvent: PointerEvent;
}>;
type FocusOutsideEvent = CustomEvent<{
    originalEvent: FocusEvent;
}>;

export const SheetContent = forwardRef<SheetContentRef, SheetContentProps>(
    (
        {
            className,
            side = 'right',
            focusLock = false,
            shouldPortal = true,
            closeOnEscape = true,
            closeOnOutside = true,
            hasCloseButton = true,
            onClose,
            portalProps,
            overlayProps,
            children,
            ...props
        },
        ref,
    ) => {
        function onOpenAutoFocus(e: Event) {
            if (focusLock === false) {
                e.preventDefault();
            }
        }

        function onEscapeKeyDown(e: KeyboardEvent) {
            if (closeOnEscape === false) {
                e.preventDefault();
            }
        }

        function onInteractOutside(e: PointerDownOutsideEvent | FocusOutsideEvent) {
            if (closeOnOutside === false) {
                e.preventDefault();
            }
        }

        return (
            <SheetPortal shouldPortal={shouldPortal} {...portalProps}>
                <SheetOverlay {...overlayProps} />
                <Content
                    className={cn(
                        'fixed inset-y-0 z-50 w-3/4 gap-4 overflow-y-auto bg-white p-6 shadow-lg',
                        {
                            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:animate-sheet-content-out-to-right data-[state=open]:animate-sheet-content-in-from-right sm:max-w-sm':
                                side === 'right',
                            'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:animate-sheet-content-out-to-left data-[state=open]:animate-sheet-content-in-from-left sm:max-w-sm':
                                side === 'left',
                        },
                        className,
                    )}
                    ref={ref as React.Ref<HTMLDivElement>}
                    onOpenAutoFocus={onOpenAutoFocus}
                    onEscapeKeyDown={onEscapeKeyDown}
                    onInteractOutside={onInteractOutside}
                    aria-describedby={undefined}
                    {...props}
                >
                    {hasCloseButton ? (
                        <SheetClose
                            className="absolute right-3 top-2 cursor-default rounded-full bg-alebaster-100 p-2 text-xl text-stone-900 duration-200 hover:bg-gray-200 hover:text-gray-700 lg:cursor-pointer"
                            onClick={onClose}
                        >
                            <svg className='w-[25px] h-[25px] sm:w-[35px] sm:h-[35px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                                <g fill="#073348" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" className="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M4.99023,3.99023c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l6.29297,6.29297l-6.29297,6.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l6.29297,-6.29297l6.29297,6.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-6.29297,-6.29297l6.29297,-6.29297c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-6.29297,6.29297l-6.29297,-6.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273z"></path></g></g>
                            </svg>
                        </SheetClose>
                    ) : null}
                    {children}
                </Content>
            </SheetPortal>
        );
    },
);
SheetContent.displayName = 'SheetContent';

// Sheet Header
type SheetHeaderRef = React.Ref<'header'>;
type SheetHeaderProps = ComponentPropsWithoutRef<'header'>;
export const SheetHeader = forwardRef<SheetHeaderRef, SheetHeaderProps>(
    ({ className, ...props }, ref) => {
        return (
            <header
                className={cn('mb-3 px-6 text-center', className)}
                {...props}
                ref={ref as React.Ref<HTMLElement>}
            />
        );
    },
);
SheetHeader.displayName = 'SheetHeader';

// Sheet Body
type SheetBodyRef = React.Ref<'div'>;
type SheetBodyProps = ComponentPropsWithoutRef<'div'>;
export const SheetBody = forwardRef<SheetBodyRef, SheetBodyProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                role="main"
                className={cn('flex flex-col', className)}
                {...props}
                ref={ref as React.Ref<HTMLDivElement>}
            />
        );
    },
);
SheetBody.displayName = 'SheetBody';

// Sheet Footer
type SheetFooterRef = React.Ref<'footer'>;
type SheetFooterProps = ComponentPropsWithoutRef<'footer'>;
export const SheetFooter = forwardRef<SheetFooterRef, SheetFooterProps>(
    ({ className, ...props }, ref) => {
        return <footer className={cn('mt-5', className)} {...props} ref={ref as React.Ref<HTMLDivElement>} />;
    },
);
SheetFooter.displayName = 'SheetFooter';

// Sheet Title
type SheetTitleRef = React.Ref<typeof Heading>;
type SheetTitleProps = ComponentPropsWithoutRef<typeof Heading>;
export const SheetTitle = forwardRef<SheetTitleRef, SheetTitleProps>(
    ({ className, ...props }, ref) => {
        return (
            <Title asChild={true}>
                <Heading
                    as="h3"
                    className={cn('text-2xl font-semibold', className)}
                    {...props}
                    ref={ref as React.Ref<HTMLHeadingElement>}
                />
            </Title>
        );
    },
);
SheetTitle.displayName = 'SheetTitle';

// Sheet Description
type SheetDescriptionRef = React.Ref<typeof Description>;
type SheetDescriptionProps = ComponentPropsWithoutRef<typeof Description>;
export const SheetDescription = forwardRef<
    SheetDescriptionRef,
    SheetDescriptionProps
>(({ className, ...props }, ref) => {
    return (
        <Description
            className={cn('text-base text-gray-500', className)}
            {...props}
            ref={ref as React.Ref<HTMLParagraphElement>}
        />
    );
});
SheetDescription.displayName = 'SheetDescription';