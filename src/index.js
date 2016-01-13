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
  style = Object.assign({width: "75%", margin: "0 auto"}, style || {});
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
          {/* -----------------------------------------------------------------
            * Title
            * ----------------------------------------------------------------- */}
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

          {/* -----------------------------------------------------------------
            * Section: Introduction
            * ----------------------------------------------------------------- */}
          <Slide>
            {markdown(`
              ## MODERN JAVASCRIPT
            `)}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ![React So Hot](https://camo.githubusercontent.com/a85f7c2c03b36655323ec7a3250057233e82ef55/68747470733a2f2f692e696d6775722e636f6d2f695549497571622e6a7067)
            `)/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {markdown(`
              ### SO MANY TOOLS

              * **Build**: Babel, Webpack
              * **Test Tools**: Magellan, Karma, Mocha, Enzyme
              * **Quality**: Eslint, Istanbul
            `)}
          </Slide>
          <Slide>
            {markdown(`
              ### SO MANY WORKFLOWS

              * **Watch**: dev/test JS, Karma
              * **Build**: clean, build, prod/dev
              * **Test**: client, node, coverage
              * **Publish**: git, npm
            `)}
          </Slide>
          <Slide>
            {markdown(`
              ## SO MANY PROJECTS

              * **~60** React components
              * **~10** Hapi plugins, helpers
              * **~15+** App servers
            `)}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              _welcome to_ ...

              &nbsp;

              ## [JAVASCRIPT FATIGUE](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.xioz52ymh)
            `)/*eslint-enable max-len*/}
          </Slide>

          {/* -----------------------------------------------------------------
            * Section: Builder
            * ----------------------------------------------------------------- */}
          <Slide>
            {markdown(`
              ## BUILDER

              Your \`package.json\`, **abstracted** and **managed**
            `)}
          </Slide>
          <Slide>
            {markdown(`
              ### USE CASES

              * **Multiple** projects
              * Nearly **identical**
              * Complex **workflows**
            `)}
          </Slide>
          <Slide>
            {markdown(`
              ## ECOSYSTEM

              * [**\`builder\`**](https://github.com/FormidableLabs/builder):
                Task runner.
              * [**\`builder-init\`**](https://github.com/FormidableLabs/builder-init):
                Project generator.
              * **\`builder-ARCHETYPE\`**: Project configs, workflows, etc.
            `, { width: "90%" })}
          </Slide>
          <Slide>
            {markdown(`
              ## HOW IT WORKS

              * \`builder\` replaces \`npm run\`
              * Archetype contains \`scripts\` + configs
              * \`builder\` magically _merges_ the archetype into your project
            `, { width: "95%" })}
          </Slide>
          <Slide>
            {markdown(`
              ## GOALS

              * Developers easily **use**
              * Architects centrally **control**
              * Projects can **flexibly** deviate
            `, { width: "80%" })}
          </Slide>

          {/* -----------------------------------------------------------------
            * Section: Builder
            * ----------------------------------------------------------------- */}
          <Slide>
            {markdown(`
              ## BUILDER

              A replacement for \`npm run\` with a _few special extras_.
            `)}
          </Slide>

          {/* -----------------------------------------------------------------
            * Section: Archetypes
            * ----------------------------------------------------------------- */}
          <Slide>
            {markdown(`
              ## ARCHETYPES

              The "mission control" for a set of identical projects
            `)}
          </Slide>
          <Slide>
            {markdown(`
              ## ASSESSMENT

              * Identify project "types"
              * Aim for **one** archetype per project type
            `)}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ## EXAMPLES

              * [\`builder-react-component\`](https://github.com/FormidableLabs/builder-react-component)
              * \`builder-react-app\`
              * \`builder-hapi-plugin\`
            `)/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {markdown(`
              ## CONTENTS

              * NPM tasks
              * Configurations
              * Boilerplate files
              * Documentation
            `)}
          </Slide>

          {/* -----------------------------------------------------------------
            * Thanks
            * ----------------------------------------------------------------- */}
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
