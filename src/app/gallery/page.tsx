import { GalleryZoom } from "../page";
export default function Gallery() {
  return (
    <>
      <div className="flex items-center my-4">
        <h2 className="text-center py-2 font-bold text-2xl">GALLERY</h2>
        <hr className="flex-grow border-t-2 border-gray-300 mx-4" />
      </div>
      <div className="p-4">
        <GalleryZoom />
      </div>
    </>
  );
}
