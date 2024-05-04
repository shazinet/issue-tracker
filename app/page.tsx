import { Button } from "@radix-ui/themes";
import Pagination from "./components/Pagination";
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <div>Hello World!</div>
      <Pagination itemCount={100} currentPage={1} pageSize={10} />
    </>
  );
}
