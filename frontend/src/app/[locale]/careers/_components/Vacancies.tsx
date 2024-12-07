import { getVacancies } from "@/api/vacancies/getVacancies.api";
import { CareerCard } from "@/components/ui/CareerCard";
import type { Locale } from "@/configs/i18n.config";
import { RouterConfig } from "@/configs/router.config";
import { getOriginSlug } from "@/utils/getOriginSlug.util";
import { PagePagination } from "./PagePagination";

export const Vacancies = async ({ locale, page }: VacanciesSectionProps) => {
     const vacancies = await getVacancies(locale, page);

     return (
          <>
               <div className="grid sm:grid-cols-2 sm:gap-x-4 lg:gap-x-0 lg:grid-cols-1">
                    {vacancies.data?.data.map((vacancy) => (
                         <CareerCard
                              key={vacancy.id}
                              title={vacancy.attributes.vacancy_name}
                              location={vacancy.attributes.vacancy_location}
                              startDate={vacancy.attributes.createdAt}
                              endDate={vacancy.attributes.vacancy_closing_date}
                              url={`${RouterConfig.SingleCareer(locale === 'en' ? vacancy.attributes.slug : getOriginSlug(vacancy.attributes.localizations))}`}
                         />
                    ))}
               </div>
               <PagePagination
                    page={page}
                    total={vacancies.data?.meta.pagination.pageCount ?? 0}
               />
          </>
     )
}

interface VacanciesSectionProps {
     locale: Locale;
     page: number;
}