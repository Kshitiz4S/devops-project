import ArtList from "@/components/artlist";
import HomeBanners from "@/components/homebanner";


export default function Home() {
  return (
    <>
    <HomeBanners />
      <h3 className="mb-4 mt-4">Art Gallery</h3>
      <ArtList />
    </>
  );
}
