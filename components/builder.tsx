"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";
import { Footer } from "./footer/Footer";
import { SiteNavigation } from "./siteNavigation";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const menuItems = [
  {
    label: "Home",
    isHighlighted: true,
    onClick: () => alert("Home clicked"),
    ariaLabel: "Go to Home",
  },
  {
    label: "About Us",
    onClick: () => alert("About Us clicked"),
    ariaLabel: "Learn about us",
  },
];

const description = "© 2024 Your Company. All rights reserved.";

const handleSignIn = () => {
  alert("Sign-in button clicked");
};

const userIconSrc = "https://via.placeholder.com/40";

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return (
      <>
        <BuilderComponent content={content} model={model} />
        {/* <Footer
          menuItems={menuItems}
          description={description}
          onSignIn={handleSignIn}
          userIconSrc={userIconSrc}
        /> */}

        <Footer />
      </>
    );
  }
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
