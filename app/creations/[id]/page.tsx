"use client";

import { useParams, useRouter } from "next/navigation"; // For Next.js 13+ App Router
import { flowers } from "@/data/flowers";
import Image from "next/image";

export default function CreationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string }; // Ensure `id` exists

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-grayColor">Flower not found</p>
      </div>
    );
  }

  const flower = flowers.find(
    (flower) => flower.name.replace(/\s+/g, "-").toLowerCase() === id
  );

  if (!flower) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-grayColor">Flower not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center text-primaryColor hover:text-secondaryColor transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Creations
      </button>
      <div className="bg-whitishColor rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src={flower.image}
                alt={flower.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="mb-4">
              <span className="inline-block bg-thirdColor text-primaryColor text-sm px-3 py-1 rounded-full capitalize">
                {flower.type}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primaryColor mb-4">
              {flower.name}
            </h1>
            <div className="text-2xl text-secondaryColor font-semibold mb-6">
              ${flower.price.toFixed(2)}
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-primaryColor mb-2">
                Brief Overview
              </h2>
              <p className="text-grayColor italic">{flower.briefDescription}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primaryColor mb-2">
                Detailed Description
              </h2>
              <p className="text-grayColor leading-relaxed">
                {flower.description}
              </p>
            </div>
            <button className="mt-8 w-full bg-primaryColor text-whitishColor py-3 px-6 rounded-lg hover:bg-secondaryColor transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
