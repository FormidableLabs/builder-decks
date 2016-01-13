// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // Appear,
  // BlockQuote,
  // Cite,
  // Code,
  // CodePane,
  Deck,
  // Fill,
  Heading,
  Image,
  // Layout,
  Link,
  // ListItem,
  // List,
  Markdown,
  // Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import theme from "../themes/formidable/index";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/formidable/index.css");

const images = {
  logo: require("../assets/formidable-logo.svg")
};

preloader(images);

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------
// A naive, indent preserving strip.
//
// TODO: Extract and open source
// https://github.com/FormidableLabs/gulp-html-extract/blob/master/lib/strip-indent.js
const strip = (val) => {
  // Find first line with text. Capture that indent level.
  let indent = null;

  return val.split("\n")
    .map((line) => {
      // Capture initial indent.
      if (indent === null && /^\s/.test(line)) {
        indent = /^ */.exec(line)[0];
      }

      // If no indent, ignore.
      if (indent === null) {
        return null;
      }

      return line
        .replace(new RegExp(`^${indent}`), "")
        .replace(/\s*$/, "");
    })
    .join("\n")
    .replace(/^\s*|\s$/, "");
};

// Standard Markdown Slide
const markdown = (text, style) => {
  style = style || {width: "75%", margin: "0 auto"};
  return (
    <div style={style}>
      <Markdown>
        {strip(text)}
      </Markdown>
    </div>
  );
};

// ----------------------------------------------------------------------------
// The Deck
// ----------------------------------------------------------------------------
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Builder
            </Heading>
            <Heading size={1} fit caps>
              Multi-project npm workflows
            </Heading>
            <Link href="https://github.com/FormidableLabs/builder">
              <Text bold textColor="tertiary" style={{margin: "1em auto"}}>
                github.com/FormidableLabs/builder
              </Text>
            </Link>
          </Slide>
          <Slide>
            {markdown(`
              ## MOTIVATION

              * **Multiple** projects
              * Nearly **identical**
              * Complex **workflows**
            `)}
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com">
              <Image width="100%" src={images.logo}/>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
