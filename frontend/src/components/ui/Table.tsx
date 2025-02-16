import { forwardRef } from 'react';
import type {
	ComponentPropsWithoutRef,
	FC,
	ReactNode,
} from 'react';
import { cn } from '@/utils/cn';
import { Heading } from './Heading';

type TableProps = ComponentPropsWithoutRef<'div'>;
type TableRef = HTMLDivElement;

/**
 * A table component that renders a div that wraps the `table` element.
 * @param props The props of the table. Props are from native `div` element.
 * @returns A div element that wraps the `table` element.
 */
const Table = forwardRef<TableRef, TableProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				className={cn(
					'w-full rounded-2xl p-6 shadow-elevation-1',
					'overflow-hidden bg-white',
					className,
				)}
				{...props}
				ref={ref}
			>
				{children}
			</div>
		);
	},
);
Table.displayName = 'Table';

type TableWrapperRef = HTMLTableElement;
interface TableWrapperProps extends ComponentPropsWithoutRef<'table'> {
	/** The layout of the table. */
	layout?: 'fixed' | 'auto';
	/** Whether the table should be full width. */
	fullWidth?: boolean;
}
/**
 * A table component that renders a `table` element.
 * @param props The props of the table. Props are from native `table` element.
 * @returns A table element.
 * @example
 * ```tsx
 * <Table>
 *    <TableWrapper>
 *      <SomeElements /> // TableHeader, TableBody, TableFooter
 *   </TableWrapper>
 * </Table>
 * ```
 */
const TableWrapper = forwardRef<TableWrapperRef, TableWrapperProps>(
	(
		{ children, className, layout = 'auto', fullWidth = false, ...props },
		ref,
	) => {
		return (
			<table
				className={cn(
					'w-full overflow-hidden border-alebaster',
					'border-separate border-spacing-0',
					'rounded-2xl border-2 border-solid',
					{
						'table-auto': layout === 'auto',
						'table-fixed': layout === 'fixed',
						'w-full': fullWidth === true,
					},
					className,
				)}
				{...props}
				ref={ref}
			>
				{children}
			</table>
		);
	},
);
TableWrapper.displayName = 'TableWrapper';

type TableHeaderRef = HTMLTableSectionElement;
type TableHeaderProps = ComponentPropsWithoutRef<'thead'>;

const TableHeader = forwardRef<TableHeaderRef, TableHeaderProps>(
	({ className, children, ...props }, ref) => {
		return (
			<thead
				className={cn(
					'rounded-2xl border-b-2',
					'bg-slate-50',
					className,
                    'tableHeader'
				)}
				{...props}
				ref={ref}
			>
				<tr>{children}</tr>
			</thead>
		);
	},
);
TableHeader.displayName = 'TableHeader';

type TableHeaderCellRef = HTMLTableCellElement;
type TableHeaderCellProps = ComponentPropsWithoutRef<'th'>;
const TableHeaderCell = forwardRef<TableHeaderCellRef, TableHeaderCellProps>(
	({ className, children, ...props }, ref) => {
		return (
			<th
				className={cn(
					'p-5 text-center text-sm font-medium',
					'border-b-2',
					'text-alebaster-500',
					'first-of-type:rounded-tl-2xl',
					'last-of-type:rounded-tr-2xl',
					className,
				)}
				{...props}
				ref={ref}
			>
				{children}
			</th>
		);
	},
);
TableHeaderCell.displayName = 'TableHeaderCell';

type TableBodyRef = HTMLTableSectionElement;
type TableBodyProps = ComponentPropsWithoutRef<'tbody'>;
const TableBody = forwardRef<TableBodyRef, TableBodyProps>(
	({ className, children, ...props }, ref) => {
		return (
			<tbody className={cn(className)} {...props} ref={ref}>
				{children}
			</tbody>
		);
	},
);
TableBody.displayName = 'TableBody';

type TableRowRef = HTMLTableRowElement;
type TableRowProps = ComponentPropsWithoutRef<'tr'>;
const TableRow = forwardRef<TableRowRef, TableRowProps>(
	({ children, className, ...props }, ref) => {
		return (
			<tr
				className={cn(
					'border-b-2',
					'duration-200',
					'hover:bg-primary-50',
					'last-of-type:border-b-0',
					'overflow-hidden',
					className,
                    'tableRow'
				)}
				{...props}
				ref={ref}
			>
				{children}
			</tr>
		);
	},
);
TableRow.displayName = 'TableRow';

type TableCellRef = HTMLTableCellElement;
type TableCellProps = ComponentPropsWithoutRef<'td'>;
const TableCell = forwardRef<TableCellRef, TableCellProps>(
	({ className, children, ...props }, ref) => {
		return (
			<td
				className={cn(
					'py-3',
					'text-center text-sm',
					'border-b-2',
					className,
                    'tableCell'
				)}
				{...props}
				ref={ref}
			>
				{children}
			</td>
		);
	},
);
TableCell.displayName = 'TableCell';

type TableControlProps = ComponentPropsWithoutRef<'div'> & {
	title?: ReactNode;
	controlWrapperProps?: ComponentPropsWithoutRef<'div'>;
};
/**
 * A table control component that is used to wrap the table controls (e.g. search, filter, etc.).
 */
const TableControl: FC<TableControlProps> = ({
	children,
	className,
	title,
	controlWrapperProps,
	...props
}) => {
	const { className: controlWrapperClassName, ...otherControlWrapperProps } =
		controlWrapperProps ?? {};

	return (
		<div
			className={cn('mb-5', controlWrapperClassName)}
			{...otherControlWrapperProps}
		>
			{title && (
				<Heading
					as="h5"
					size="xl"
					weight="normal"
					className={'mb-3 text-center'}
				>
					{title}
					{title.includes(':') === false && ':'}
				</Heading>
			)}
			<div className={cn('grid grid-cols-2 gap-y-3', className)} {...props}>
				{children}
			</div>
		</div>
	);
};

export {
	Table,
	TableWrapper,
	TableHeader,
	TableHeaderCell,
	TableBody,
	TableRow,
	TableCell,
	TableControl,
};