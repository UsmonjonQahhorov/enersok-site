'use client';
import type {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	FC,
	ReactNode,
	RefObject,
} from 'react';
import { Children } from 'react';
import {
	Content,
	Description,
	Overlay,
	Portal,
	Root,
	Title,
} from '@radix-ui/react-dialog';
import { CircleX } from 'lucide-react';
import { Button, type ButtonProps } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { cn } from '@/utils/cn';

type PointerDownOutsideEvent = CustomEvent<{
	originalEvent: PointerEvent;
}>;
type FocusOutsideEvent = CustomEvent<{
	originalEvent: FocusEvent;
}>;
interface DialogProps {
	open?: boolean;
	children?: ReactNode;
	onOpen?: () => void;
	onClose?: () => void;
	hasBlur?: boolean;
	id?: string;
	hasFocusLock?: boolean;
	closeOnEscape?: boolean;
	closeOnOutside?: boolean;
	dialogContentProps?: Omit<
		ComponentPropsWithoutRef<typeof Content>,
		'onInteractOutside' | 'onOpenAutoFocus' | 'onEscapeKeyDown'
	>;
	ref?: DialogRef;
}
type DialogRef = RefObject<HTMLDivElement>;
/**
 * @example
 * const { closeDialog, isOpen, openDialog } = useDialog();
 * 
 * <Dialog open={isOpen} onClose={closeDialog}>
    <DialogHeader onClose={closeDialog}>
        <DialogTitle>Облачное модально окно</DialogTitle>
    </DialogHeader>
    <DialogBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </DialogBody>
    <DialogFooter>
        <DialogAction onClick={closeDialog}>Закрыть</DialogAction>
    </DialogFooter>
  </Dialog>
 *
 * A dialog component that can be used to display content in a modal.
 * @param {boolean} [open] - Whether the dialog is open or not.
 * @param {ReactNode} [children] - The content to be displayed inside the dialog.
 * @param {() => void} [onOpen] - A function to be called when the dialog is opened.
 * @param {() => void} [onClose] - A function to be called when the dialog is closed.
 * @param {boolean} [hasBlur] - Whether the dialog has a blurred background or not.
 * @param {string} [id] - The id of the dialog.
 * @param {boolean} [hasFocusLock] - Whether the dialog should trap focus or not.
 * @param {boolean} [closeOnEscape=true] - Whether the dialog should close when the escape key is pressed.
 * @param {boolean} [closeOnOutside=true] - Whether the dialog should close when clicked outside of it.
 * @param {ComponentPropsWithoutRef<typeof Content>} [dialogContentProps] - Additional props to be passed to the Content component.
 * @returns {JSX.Element} - The Dialog component.
 */
const Dialog = ({
	children,
	onClose,
	onOpen,
	open,
	closeOnEscape = true,
	closeOnOutside = true,
	dialogContentProps,
	hasFocusLock = true,
	ref,
}: DialogProps) => {
	const { className, ...restDialogContentProps } = dialogContentProps || {};

	function onOpenChangeHandler(open: boolean) {
		if (open === false) {
			if (onClose) {
				onClose();
			}
		} else {
			if (onOpen) {
				onOpen();
			}
		}
	}

	function onEscapePressHandler(e: KeyboardEvent) {
		if (closeOnEscape === false) {
			e.preventDefault();
		}
	}

	function onClickContentOutside(
		event: PointerDownOutsideEvent | FocusOutsideEvent,
	) {
		if (closeOnOutside === false) {
			event.preventDefault();
		}
	}

	function onOpenAutoFocus(e: Event) {
		if (hasFocusLock === false) {
			e.preventDefault();
		}
	}

	return (
		<Root open={open} modal={true} onOpenChange={onOpenChangeHandler}>
			<Portal>
				<Overlay
					className={cn(
						'fixed inset-0 bg-black/40 transition-opacity data-[state=open]:animate-overlayShow',
					)}
				>
					<Content
						className={cn(
							'rounded-cardRadius data-[state=open]:animate-contentShow',
							'w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 2xl:w-2/6',
							'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] lg:top-[30%]',
							'flex flex-col bg-white',
							'gap-y-5 pb-7',
							className,
						)}
						onEscapeKeyDown={onEscapePressHandler}
						onOpenAutoFocus={onOpenAutoFocus}
						onInteractOutside={onClickContentOutside}
						ref={ref}
						{...restDialogContentProps}
					>
						{children}
					</Content>
				</Overlay>
			</Portal>
		</Root>
	);
};

type DialogHeaderProps = ComponentPropsWithRef<'div'> & {
	iconClassName?: string;
	ref?: RefObject<DialogHeaderRef>;
} & AdditionalDialogHeaderPropsProps;
type AdditionalDialogHeaderPropsProps =
	| {
			hasCloseIcon?: true;
			onClose: () => void;
	  }
	| {
			hasCloseIcon?: false;
			onClose?: () => void;
	  };
type DialogHeaderRef = HTMLDivElement;

/**
 * A component that can be used to display a header in a dialog.
 * @param {ReactNode} [children] - The content to be displayed inside the header.
 * @param {string} [className] - The class name of the header.
 * @param {boolean} [hasCloseIcon] - Whether the header should have a close icon or not.
 * @param {() => void} [onClose] - A function to be called when the close icon is clicked.
 * @returns {JSX.Element} - The DialogHeader component.
 */
const DialogHeader = ({
	children,
	className,
	hasCloseIcon = true,
	onClose,
	ref,
	...props
}: DialogHeaderProps) => {
	const onCrossClickHandler = () => {
		if (hasCloseIcon === true && onClose) {
			onClose();
		}
	};

	return (
		<div
			className={cn(
				'border-b border-[#D9D9D9] p-5',
				'lg:p-5 lg:px-10',
				{
					'flex w-full items-center justify-between': hasCloseIcon === true,
				},
				className,
			)}
			{...props}
			ref={ref}
		>
			{children}
			{hasCloseIcon && (
				<button
					className={cn(
						'flex',
						'border-none bg-transparent outline-none',
						'text-xl lg:text-2xl',
					)}
					onClick={onCrossClickHandler}
					type="button"
				>
					<CircleX color="#8F8C8C" />
				</button>
			)}
		</div>
	);
};

type DialogTitleProps = ComponentPropsWithRef<typeof Heading> & {
	ref?: RefObject<HTMLHeadingElement>;
};
/**
 * A component that can be used to display a title in a dialog. Inherits all props from the `Heading` component.
 * @param {ReactNode} [children] - The content to be displayed inside the title.
 * @param {string} [className] - The class name of the title.
 * @param {string} [size='2xl'] - The size of the title.
 * @param {string} [weight='medium'] - The weight of the title.
 * @returns {JSX.Element} The DialogTitle component.
 */
const DialogTitle = ({
	children,
	className,
	size = 'xl',
	weight = 'semibold',
	ref,
	...props
}: DialogTitleProps) => {
	return (
		<Title ref={ref} asChild={true}>
			<Heading
				className={cn(
					'text-black',
					'text-base lg:text-lg xl:text-xl',
					className,
				)}
				size={size}
				weight={weight}
				{...props}
			>
				{children}
			</Heading>
		</Title>
	);
};

type DialogBodyProps = ComponentPropsWithRef<'div'>;
const DialogBody: FC<DialogBodyProps> = ({ children, className, ...props }) => {
	return (
		<div
			className={cn(
				'px-5 text-start leading-normal',
				'text-base',
				'lg:px-10 lg:text-xl',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

type DialogDescriptionProps = ComponentPropsWithRef<typeof Description>;
/**
 * A component that can be used to display a description in a dialog. Inherits all props from the `Description` component.
 * @param {ReactNode} [children] - The content to be displayed inside the description.
 * @param {asChild} [asChild=false] - Whether the description should be rendered as a child of underlying element or not.
 * @returns {JSX.Element} The DialogDescription component.
 */
const DialogDescription = ({
	children,
	className,
	...props
}: DialogDescriptionProps) => {
	return (
		<Description
			className={cn('text-base text-gray-500', className)}
			{...props}
		>
			{children}
		</Description>
	);
};

type DialogFooterProps = ComponentPropsWithRef<'div'>;
const DialogFooter: FC<DialogFooterProps> = ({
	className,
	children,
	...props
}) => {
	const numberOfChildren = Children.count(children);

	return (
		<div
			className={cn(
				'mt-5',
				{
					'flex w-full justify-center gap-5': numberOfChildren > 1,
					'self-end px-10': numberOfChildren === 1,
				},
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

const DialogAction = ({
	children,
	className,
	size = 'default',
	...props
}: ButtonProps) => {
	return (
		<Button className={cn(className)} size={size} {...props}>
			{children}
		</Button>
	);
};

DialogAction.displayName = 'DialogAction';

export {
	Dialog,
	DialogAction,
	DialogBody,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
};
