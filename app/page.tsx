import Image from "next/image";
import Link from "next/link";
import Page from './users/Page'
import ProductItem from "./users/new/Product";
export default function Home() {
  return (
    <main><h1>Hello World</h1>
    <Page />
    <ProductItem />
    </main>
  );
}
