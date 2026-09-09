"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";

export default function ArtDetail({ params }) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { id } = use(params);

  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/arts/${id}/`
        );

        if (!response.ok) {
          throw new Error("Artwork not found");
        }

        const data = await response.json();
        setArt(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArt();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <p className="mt-2">Loading artwork...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        {error}
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <div className="card shadow-sm">

          <img
            src={art.image}
            alt={art.name}
            className="card-img-top"
            style={{
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <h1 className="card-title">
              {art.name}
            </h1>

            <p className="card-text">
              {art.description}
            </p>

            <Link
              href="/"
              className="btn btn-secondary"
            >
              Go Back
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}