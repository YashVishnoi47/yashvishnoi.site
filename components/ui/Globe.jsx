"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Globes = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => null,
});

const Globe = ({ className = "" }) => {
  const containerRef = useRef(null);
  const globeRef = useRef(null);

  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldLoad(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-[600px] h-[600px] ${className} flex justify-start items-start absolute -right-20 -bottom-20 pointer-events-none`}
    >
      {shouldLoad && (
        <Globes
          ref={globeRef}
          width={1000}
          height={1000}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
          showAtmosphere={false}
          animateIn={false}
          autoRotate={true}
          autoRotateSpeed={0.2}
          onGlobeReady={() => {
            if (!globeRef.current) return;

            const controls = globeRef.current.controls();

            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.2;

            globeRef.current.pointOfView({
              lat: 25,
              lng: -20,
              altitude: 2.2,
            });
          }}
        />
      )}
    </div>
  );
};

export default Globe;