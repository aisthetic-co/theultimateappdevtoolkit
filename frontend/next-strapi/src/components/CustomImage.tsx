import React, { useState } from "react";
import Image from "next/image";
import { CustomImageProps } from "@/app.types";
import { strapiUrl } from "@/strapi/lib/utils";

const Loader = () => {
  return (
    <span className="bg-[#e7e7e7] absolute w-full h-full left-0 top-0"></span>
  );
};

export default function CustomImage(props: CustomImageProps) {
  const {
    width = "100%",
    height = "auto",
    className,
    desktopImage,
    mobileImage,
    isLCP,
  } = props;

  const [imageLoading, setImageLoading] = useState(true);
  const [mobileImageLoading, setMobileImageLoading] = useState(true);

  const isIntrinsicSize = width === "auto" && height === "auto";

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleMobileImageLoad = () => {
    setMobileImageLoading(false);
  };

  if (!desktopImage?.url) {
    return null;
  }

  return (
    <>
      <div
        style={{
          width: width === "auto" ? "fit-content" : width,
          height: height === "auto" ? "fit-content" : height,
        }}
        className={`relative hidden md:block`}
      >
        <Image
          style={{
            width: !isIntrinsicSize ? width : undefined,
            height: !isIntrinsicSize ? height : undefined,
          }}
          className={`${className ?? ""}`}
          src={strapiUrl(desktopImage?.url)}
          width={desktopImage?.width}
          height={desktopImage?.height}
          priority={isLCP ?? false}
          alt={desktopImage.alternativeText ?? "unkown"}
          onLoad={handleImageLoad}
          unoptimized
        />
        {imageLoading && <Loader />}
      </div>

      <div
        style={{
          width: width === "auto" ? "fit-content" : width,
          height: height === "auto" ? "fit-content" : height,
        }}
        className={`relative md:hidden`}
      >
        <Image
          style={{
            width: !isIntrinsicSize ? width : undefined,
            height: !isIntrinsicSize ? height : undefined,
          }}
          className={`${className ?? ""}`}
          src={strapiUrl(mobileImage?.url || desktopImage?.url)}
          width={mobileImage?.width || desktopImage?.width}
          height={mobileImage?.height || desktopImage?.height}
          priority={isLCP ?? false}
          alt={
            mobileImage?.alternativeText ||
            desktopImage.alternativeText ||
            "unkown"
          }
          onLoad={handleMobileImageLoad}
          unoptimized
        />
        {mobileImageLoading && <Loader />}
      </div>
    </>
  );
}
