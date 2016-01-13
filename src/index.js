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
            <Heading caps fit size={1}>
              Inline Markdown
            </Heading>
            <Markdown>
              {`
## Markdown!

You can write inline images, [Markdown Links](http://commonmark.org),
paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
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
