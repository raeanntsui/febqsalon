import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>Welcome to Q Nine and Hair Salon!</div>
      <p>
        From the moment you walk into our nail salon, you will feel welcomed by
        our courteous and professional staff. Our nail salon offers you a place
        to re-energize your spirit and experience the latest treatments in an
        atmosphere that combines superior hygiene with friendly service and
        relaxation.
      </p>
      <Link href="/about">View More</Link>
    </>
  );
}
