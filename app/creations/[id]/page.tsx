"use client";

import { useParams } from "next/navigation"; // For Next.js 13+ App Router
import { flowers } from "@/data/flowers";

export default function CreationDetailPage() {
  const params = useParams();
  const { id } = params as { id: string }; // Ensure `id` exists

  if (!id) {
    return <div>Flower not found</div>;
  }

  const flower = flowers.find(
    (flower) => flower.name.replace(/\s+/g, "-").toLowerCase() === id
  );

  if (!flower) {
    return <div>Flower not found</div>;
  }

  return (
    <div>
      <h1>{flower.name}</h1>
      <p>{flower.description}</p>
      <img src={flower.image} alt={flower.name} />
    </div>
  );
}
