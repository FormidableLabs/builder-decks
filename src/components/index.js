// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Spectacle
} from "spectacle";

// Import theme
import theme from "decks-themes/formidable/index";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("decks-themes/formidable/index.css");

// ----------------------------------------------------------------------------
// The Deck
// ----------------------------------------------------------------------------
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["slide"]} transitionDuration={500}>
          {/* -----------------------------------------------------------------
            * Title
            * ----------------------------------------------------------------- */}
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              TEST DECK
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
