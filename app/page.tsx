import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <>
      <div>Hello World!</div>
      <Pagination
        itemCount={100}
        currentPage={parseInt(searchParams.page) || 1}
        pageSize={10}
      />
    </>
  );
}
