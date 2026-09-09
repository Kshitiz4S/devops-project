"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ArtList() {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/arts/`
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();
        setArts(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading artworks...</p>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="row g-4">
      {arts.map((art) => (
        <div className="col-12 col-md-6 col-lg-4" key={art.id}>
          <div className="card h-100 shadow-sm">
            <img
              src={art.image}
              alt={art.name}
              className="card-img-top"
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{art.name}</h5>

              <p className="card-text">
                {art.description}
              </p>

              <Link
                href={`/arts/${art.id}`}
                className="btn btn-dark mt-auto"
              >
                View Art
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}