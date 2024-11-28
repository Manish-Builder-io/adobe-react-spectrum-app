import React from "react";
import { View, Flex, Button } from "@adobe/react-spectrum";

import { SiteNavigationProps } from "./types";
import { NavigationMenu } from "./NavigationMenu";

export const SiteNavigation: React.FC<SiteNavigationProps> = ({
  navigationItems,
  ...props
}) => {
  const defaultItems = [
    { label: "WOMEN" },
    { label: "MEN" },
    { label: "COLLECTIONS" },
    { label: "SHOP ALL" },
    { label: "SALE", isSale: true },
  ];

  const items = navigationItems || defaultItems;

  return (
    <View
      backgroundColor="gray-900"
      position="absolute"
      zIndex={0}
      width="1208px"
      height="390px"
      UNSAFE_style={{
        right: 0,
        bottom: 0,
        left: "-2px",
        padding: "153px 80px 88px",
      }}
      {...props}
    >
      <Flex direction="column" width="100%" maxWidth="1209px">
        <Flex
          justifyContent="space-between"
          gap="size-200"
          UNSAFE_style={{
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "3.15px",
          }}
        >
          <NavigationMenu items={items} />
          <Flex gap="size-300" alignItems="center">
            
            <Button
              variant="primary"
              UNSAFE_style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px 20px",
              }}
            >
              SIGN IN
            </Button>
          </Flex>
        </Flex>
        <View
          marginTop="size-250"
          UNSAFE_style={{
            color: "rgb(181, 181, 181)",
            fontSize: "18px",
            fontWeight: 400,
            width: "477px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          posuere erat a ante vestibulum, in volutpat ligula elementum.
        </View>
      </Flex>
    </View>
  );
};
