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
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Builder
            </Heading>
            <Heading size={1} fit caps>
              Multi-project npm workflows
            </Heading>
            <Link href="https://github.com/FormidableLabs/builder">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
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
          <Slide bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
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
