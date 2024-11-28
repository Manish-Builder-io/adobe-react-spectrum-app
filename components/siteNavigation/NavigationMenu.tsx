import React from "react";
import { Flex, Button } from "@adobe/react-spectrum";
import { NavigationMenuProps } from "./types";

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  ...props
}) => {
  return (
    <Flex gap="size-300" wrap {...props}>
      {items.map((item, index) => (
        <Button
          key={index}
          variant="primary"
          isQuiet
          UNSAFE_style={{
            color: item.isSale ? "rgb(243, 89, 89)" : "white",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "3.15px",
          }}
        >
          {item.label}
        </Button>
      ))}
    </Flex>
  );
};
