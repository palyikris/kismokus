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
			<span style={{margin: "5rem 0"}}></span>
			<GalleryClient images={images || []} />
		</main>
	);
}
