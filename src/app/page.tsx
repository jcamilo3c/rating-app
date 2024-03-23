import styles from "@/styles/layout.module.css";
import Cards from "@/components/Cards";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchImages } from "@/apis";

export default function Home() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["images"],
    queryFn: () => fetchImages(),
  });

  return (
    <section className={styles.section}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Cards />
      </HydrationBoundary>
    </section>
  );
}
