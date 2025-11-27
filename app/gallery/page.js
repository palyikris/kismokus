import GalleryClient from "@/components/gallery/GalleryClient.jsx";
import Topnav from "@/components/topnav/page";
import { getGalleryImages } from "@/lib/firebase";

export default async function GalleryPage() {
	let images = [];
	try {
		images = await getGalleryImages();
	} catch (e) {
		console.error("Failed to load gallery images", e);
		images = [];
	}

	return (
    <main className="page-root" style={{ padding: "28px 20px" }}>
      <Topnav isReversed></Topnav>
			<h1 style={{ margin: "0 0 18px", fontSize: 28 }}>Galéria</h1>
			<GalleryClient images={images || []} />
		</main>
	);
}
