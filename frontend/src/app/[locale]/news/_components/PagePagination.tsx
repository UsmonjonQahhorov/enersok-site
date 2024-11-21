'use client';
import { Pagination } from "@/components/navigation/Pagination"
import { usePathname, useRouter } from "@/i18n/routing";
import { getLocale } from "@/utils/getLocale.util";
import { startTransition } from "react";

export const PagePagination = ({ page, total }: PagePaginationProps) => {
     const router = useRouter();
     const pathName = usePathname();
     const locale = getLocale();

     const onPaginate = (page: number) => {
          startTransition(() => {
               router.push(`${pathName}?page=${page}`, {
                    locale: locale
               });
          });
     }

     return (
          <Pagination
               className='py-8 lg:py-14'
               position='left'
               onPaginate={onPaginate}
               page={page}
               total={total}
          />
     )
}

interface PagePaginationProps {
     page: number;
     total: number;
}