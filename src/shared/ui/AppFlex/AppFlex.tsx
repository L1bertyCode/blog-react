import { ElementType, ReactNode } from "react";

interface AppFlexProps {
  children: ReactNode;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "flex-start" | "space-between" | "space-around";
  alignItems?: "stretch" | "center" | "end";
  flexWrap?: "wrap" | "nowrap";
  gap?: number;
  className?: string;
  BlockElement?: ElementType;
}
export const AppFlex = ({
  children,
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  flexWrap = "nowrap",
  gap = 0,
  BlockElement = "div",
  className,
}: AppFlexProps) => {
  return (
    <BlockElement
      style={{
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        gap: `${gap}px`,
      }}
      className={className}
    >
      {children}
    </BlockElement>
  );
};
