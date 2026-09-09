'use client';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export default function HomeBanners() {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [bannerList, setBannerList] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(`${BASE_URL}/banners`);

      const res = await response.json();

      console.log("API DATA:", res);

      setBannerList(res.results || res);
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel showThumbs={false}>
      {bannerList.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </Carousel>
  );
}