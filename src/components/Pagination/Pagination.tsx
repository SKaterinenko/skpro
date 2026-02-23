import clsx from "clsx";
import React, { type FC, memo } from "react";
import { DOTS, usePagination } from "./usePagination";

interface PaginationProps {
	onPageChange: (page: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className?: string;
}

const itemClass =
	"flex items-center justify-center px-3 h-8 min-w-8 mx-1 rounded-2xl text-[13px] leading-[1.43] tracking-[0.01071em] box-border text-black dark:text-white cursor-pointer hover:bg-[rgb(214,219,220)] hover:text-black transition-colors";

const arrowClass =
	"border-black dark:border-white border-r-[0.12em] border-t-[0.12em] w-[0.4em] h-[0.4em] inline-block relative";

export const Pagination: FC<PaginationProps> = memo((props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || (paginationRange && paginationRange?.length < 2)) {
		return null;
	}

	const onNext = () => onPageChange(currentPage + 1);
	const onPrevious = () => onPageChange(currentPage - 1);
	const lastPage = paginationRange?.[paginationRange?.length - 1];

	return (
		<div className={clsx("flex list-none", className)}>
			<button
				type="button"
				className={clsx(
					itemClass,
					currentPage === 1 && "hidden pointer-events-none",
				)}
				onClick={onPrevious}
			>
				<span
					className={clsx(arrowClass, "-rotate-[135deg] -translate-x-1/2")}
				/>
			</button>

			{paginationRange?.map((pageNumber) => {
				if (pageNumber === DOTS) {
					return (
						<li
							key={Math.random()}
							className={clsx(itemClass, "hover:bg-transparent cursor-default")}
						>
							&#8230;
						</li>
					);
				}

				return (
					<button
						type="button"
						key={Math.random()}
						className={clsx(
							itemClass,
							pageNumber === currentPage && "bg-[rgb(214,219,220)] text-black!",
						)}
						onClick={() => onPageChange(+pageNumber)}
					>
						{pageNumber}
					</button>
				);
			})}

			<button
				type="button"
				className={clsx(
					itemClass,
					currentPage === lastPage && "hidden pointer-events-none",
				)}
				onClick={onNext}
			>
				<span className={clsx(arrowClass, "rotate-45")} />
			</button>
		</div>
	);
});
