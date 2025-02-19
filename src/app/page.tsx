import Image from "next/image";
import NavigationBar from "@/components/landingpage";
// import { HeaderMegaMenu } from "@/components/landingpage";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <NavigationBar />
      <div>This is the homepage content!</div>
    </>
  );
}
