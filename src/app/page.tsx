import styles from "@/styles/page.module.css";
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
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.headerIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-back"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
          </svg>
        </span>
        <h1 className={styles.title}>NatureApp</h1>
      </header>
      <section className={styles.section}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Cards />
        </HydrationBoundary>
      </section>
      <footer className={styles.footer}>
        <button className={styles.button} aria-label="Go to Home">
          <span className={styles.buttonIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
          </span>
          Home
        </button>
        <div className={styles.separator} />
        <button className={styles.button} aria-label="Go to My Likes">
          <span className={styles.buttonIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-images"
              viewBox="0 0 16 16"
            >
              <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
            </svg>
          </span>
          My Likes
        </button>
      </footer>
    </main>
  );
}
