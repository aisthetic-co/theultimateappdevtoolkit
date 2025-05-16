import React from "react";
import Image from "next/image";
import { CustomImageProps } from "@/app.types";

type Props = CustomImageProps;

export default function CustomImage(props: Props) {
  return (
    <>
      {!!props.desktopImage?.imageUrl && (
        <Image
          src={props.desktopImage.imageUrl}
          width={props.desktopImage.imageDimensions?.width}
          height={props.desktopImage.imageDimensions?.height}
          priority={props.isLCP ?? false}
          alt={props.caption ?? "unkown"}
        />
      )}
      {!!props.mobileImage?.imageUrl && (
        <Image
          src={props.mobileImage.imageUrl}
          width={props.mobileImage.imageDimensions?.width}
          height={props.mobileImage.imageDimensions?.height}
          priority={props.isLCP ?? false}
          alt={props.caption ?? "unkown"}
        />
      )}
    </>
  );
}
