import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CallButton() {
  const router = useRouter();
  const handleClick = () => {
    alert("Feature coming soon");
  };

  const handleNavigation = () => {
    router.push("/booking");
  };
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 grid grid-cols-1 grid-rows-2 gap-4 max-w-[150px]">
        <button
          className="bg-red-500 rounded-xl text-white p-2 hover:bg-red-700"
          onClick={handleClick}>
          Booking
        </button>
        <button
          className="bg-red-500 rounded-xl text-white p-2 hover:bg-red-700"
          onClick={handleNavigation}>
          669-649-9639
        </button>
      </div>
    </>
  );
}
