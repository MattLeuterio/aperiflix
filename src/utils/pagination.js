export const calcPagination = ({
  current_page = 1,
  page_count,
  results_per_page = 60,
  next_page
}) => {
  const pagination = {
    page: next_page && next_page > current_page ? next_page : current_page,
    results_per_page,
    isLastPage: true
  };

  const isLastPage = current_page === page_count || false;

  return {
    ...pagination,
    isLastPage
  };
};
