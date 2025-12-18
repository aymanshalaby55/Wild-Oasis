import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBooking() {
  const [searchParams] = useSearchParams();
  const QueryClient = useQueryClient()

  const filterValue = searchParams.get("status");
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filterValue, sortBy, page],
    queryFn: () => getBookings({ filterValue, sortBy, page }),
  });

  const pageCount = Math.ceil(count / 10);
  if(page > 1)
  QueryClient.prefetchQuery({
    queryKey: ["bookings", filterValue, sortBy, page + 1],
    queryFn: () => getBookings({ filterValue, sortBy, page: page + 1 }),
  });
  return { isLoading, bookings, error, count, page, pageCount };
}
