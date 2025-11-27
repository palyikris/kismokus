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
			<div style={{margin: "3rem 0", width: 5, height: 5}}></div>
			<GalleryClient images={images || []} />
		</main>
	);
}
