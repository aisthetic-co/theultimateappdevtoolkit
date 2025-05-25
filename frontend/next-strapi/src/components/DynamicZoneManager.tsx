/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TitleAndDescription from "./TitleAndDescription";
import Media from "./Media";
import CustomCta from "./CustomCta";

const componentMapping = {
  "dynamic-zone.title-and-description": TitleAndDescription,
  "shared.media": Media,
  "shared.custom-cta": CustomCta,
};

interface DynamicZoneComponent {
  __component: keyof typeof componentMapping;
  id: number;
  [key: string]: any;
}

interface Props {
  dynamicZone: DynamicZoneComponent[];
}

const DynamicZoneManager: React.FC<Props> = ({ dynamicZone }) => {
  return (
    <div>
      {dynamicZone.map((componentData, index) => {
        const Component = componentMapping[componentData.__component] as any;
        if (!Component) {
          console.warn(`No component found for: ${componentData.__component}`);
          return null;
        }
        return (
          <Component
            key={`${componentData.id}_${index}`}
            {...componentData}
            isLCP={index === 0}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default DynamicZoneManager;
