// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // Appear,
  // BlockQuote,
  // Cite,
  // Code,
  CodePane,
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
  polygons: require("../assets/img/bg/formidable/formidangles-dark.svg"),
  polygonsGray: require("../assets/img/bg/formidable/formidangles-gray.svg"),
  bgBlueprint: require("../assets/img/bg/slides/pexels-blueprint.jpg"),
  bgCards: require("../assets/img/bg/slides/pexels-cards.jpg"),
  bgDrawingParts: require("../assets/img/bg/slides/newoldstock-drawing-parts.jpg"),
  bgHerdingBuffalo: require("../assets/img/bg/slides/newoldstock-herding-buffalo.jpg"),
  bgLionTamer: require("../assets/img/bg/slides/newoldstock-lion-tamer.jpg"),
  bgMissionControl: require("../assets/img/bg/slides/newoldstock-gemini-mission-control.jpg"),
  bgShuttle: require("../assets/img/bg/slides/newoldstock-shuttle.jpg"),
  bgTypewriterParts: require("../assets/img/bg/slides/unsplash-typewriter-parts.jpg"),
  bgTools: require("../assets/img/bg/slides/pexels-tools.jpg"),
  logo: require("../assets/formidable-logo.svg")
};

preloader(images);

const BG_MARKDOWN_BLACKBOX = {
  background: "rgba(255, 255, 255, 0.9);",
  borderRadius: "0.2em",
  width: "90%",
  padding: "0.5em 2em"
};

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
//
// * Meetup: http://www.meetup.com/seattlejs/events/221671534/
// *
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["slide"]} transitionDuration={500}>
          {/* -----------------------------------------------------------------
            * Title
            * ----------------------------------------------------------------- */}
          <Slide id="title" bgImage={images.polygons}>
            <Heading size={1} fit caps textColor="primary">
              Wrangling Herds of
            </Heading>
            <Heading size={1} fit caps textColor="lightestGray">
              JavaScript Projects with
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Builder
            </Heading>
            <Link href="http://seattlejs-builder.surge.sh/">
              <Text bold textColor="palRed" style={{marginTop: "1em"}}>
                seattlejs-builder.surge.sh
              </Text>
            </Link>
            <Link href="https://github.com/FormidableLabs?utf8=%E2%9C%93&query=builder">
              <Text bold textColor="lightestGray" style={{marginTop: "0.4em"}}>
                github.com/FormidableLabs/builder*
              </Text>
            </Link>
          </Slide>

          {/* -----------------------------------------------------------------
            * Section: Introduction
            * ----------------------------------------------------------------- */}
          <Slide bgImage={images.bgLionTamer} bgDarken={0.20}>
            {markdown(`
              _welcome to_ ...

              &nbsp;

              ## MODERN JAVASCRIPT
            `, BG_MARKDOWN_BLACKBOX)}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              _we have_ ...

              &nbsp;

              ## [JAVASCRIPT FATIGUE](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.xioz52ymh)
            `)/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              _and it gets worse for_ ...

              &nbsp;

              ### LARGE TEAMS

              &amp;

              ### BIG PROJECTS
            `)/*eslint-enable max-len*/}
          </Slide>
          <Slide bgImage={images.bgTypewriterParts} bgDarken={0.20}>
            {markdown(`
              ### SO MANY TOOLS

              * **Build**: Babel, ES-next, Webpack, PostCSS
              * **Test**: Karma, Webdriver.io, Mocha, Enzyme
              * **Quality**: Eslint, Istanbul
            `, BG_MARKDOWN_BLACKBOX)}
          </Slide>
          <Slide>
            {markdown(`
              ### SO MANY WORKFLOWS

              * **Build**: clean, build, prod/dev
              * **Test**: client, node, coverage
              * **Watch**: dev/test JS, Karma
              * **Publish**: git, npm, CDN
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
            {markdown(`
              ## HOW TO WRANGLE?

              * [grunt](http://gruntjs.com/)
              * [gulp](http://gulpjs.com/)
              * [broccoli](https://github.com/broccolijs/broccoli)
              * **npm workflows?**
            `)}
          </Slide>
          {/* -----------------------------------------------------------------
            * Section: npm workflows
            * ----------------------------------------------------------------- */}
          <Slide bgImage={images.polygonsGray} bgDarken={0.20}>
            {markdown(`
              _**but first, an aside:**_

              &nbsp;

              ## [npm workflows](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
            `, BG_MARKDOWN_BLACKBOX)}
          </Slide>
          <Slide>
            {markdown(`
              ### TASK RUNNERS
            `)}
            <CodePane
              lang="javascript"
              source={strip(`
                // grunt - Gruntfile.js
                grunt.registerTask("test", /*FN_STUFF*/);

                // gulp - gulpfile.js
                gulp.task("test", /*FN_STUFF*/);

                // npm - package.json
                "scripts": {
                  "test": "mocha test/*.spec.js"
                }
              `)}
            />
          </Slide>
          <Slide>
            {markdown(`
              ### RUNNING TASKS
            `)}
            <CodePane
              lang="bash"
              source={strip(`
                # grunt
                $ grunt test

                # gulp
                $ gulp test

                # npm
                $ npm run test
              `)}
            />
          </Slide>
          <Slide>
            {markdown(`
              ### INTEGRATION
            `)}
            <CodePane
              lang="javascript"
              source={strip(`
                // npm - package.json
                "scripts": {
                  "test-cli": "mocha test/*.spec.js",
                  "test-grunt": "grunt test",
                  "test-gulp": "gulp test",
                }
              `)}
            />
          </Slide>
          <Slide>
            {markdown(`
              ### NPM WORKFLOWS

              * Use underlying module \`.bin\`: (\`mocha\`, \`webpack\`, etc.)
              * Rely on modules to provide watch, build, etc.
              * Always current to module.
            `)}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ### FOR EXAMPLE

              &nbsp;

              [little-loader/package.json](https://github.com/walmartlabs/little-loader/blob/master/package.json#L65-L99)
            `)/*eslint-enable max-len*/}
          </Slide>

          {/* -----------------------------------------------------------------
            * Section: Introduction
            * ----------------------------------------------------------------- */}
          <Slide bgImage={images.bgDrawingParts} bgDarken={0.20}>
            <div style={BG_MARKDOWN_BLACKBOX}>
              <Heading fit caps textColor="tertiary">Builder</Heading>
              {markdown(`
                &nbsp;

                Your \`package.json\`, **abstracted** &amp; **managed**
              `)}
            </div>
          </Slide>
          <Slide>
            {markdown(`
              ### WHAT WE HAVE
            `)}
            <CodePane
              lang="javascript"
              source={strip(`
                // <project1>/package.json
                "scripts": {
                  "foo": "echo FOO",
                  "bar": "echo BAR",
                  "foobar": "npm run foo && npm run bar",
                }

                // <project2>/package.json
                "scripts": {
                  "foo": "echo FOO",
                  "bar": "echo BAR",
                  "foobar": "npm run foo && npm run bar",
                }
              `)}
            />
          </Slide>
          <Slide>
            {markdown(`
              ### WHAT WE WANT
            `)}
            <CodePane
              lang="javascript"
              source={strip(`
                // <project1>/package.json
                "scripts": {}

                // <project2>/package.json
                "scripts": {}

                // <MAGICALLY_AVAILABLE>/package.json
                "scripts": {
                  "foo": "echo FOO",
                  "bar": "echo BAR",
                  "foobar": "npm run foo && run run bar",
                }
              `)}
            />
          </Slide>
          <Slide>
            {markdown(`
              ## A TALE IN 3 PARTS

              &nbsp;

              * Task **runner**
              * Task, config **management** ("archetypes")
              * Project **generation**
            `, { width: "100%" })}
          </Slide>

          {/* -----------------------------------------------------------------
            * Section: Builder
            * ----------------------------------------------------------------- */}
          <Slide bgImage={images.bgTools} bgDarken={0.20}>
            <div style={BG_MARKDOWN_BLACKBOX}>
              <Heading fit caps textColor="tertiary">Builder</Heading>
              {markdown(`
                &nbsp;

                A modern runner for \`package.json\` tasks
              `)}
            </div>
          </Slide>
          <Slide>
            {markdown(`
              ## GET STARTED
            `)}
            <CodePane
              lang="bash"
              source={strip(`
                \$ npm install builder

                # Instead of:
                \$ npm run <task>

                # you can run:
                \$ builder <action> <task>
              `)}
            />
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ## ACTIONS

              * [\`builder run TASK\`](https://github.com/FormidableLabs/builder#builder-run)
              * [\`builder concurrent TASK1 TASK2\`](https://github.com/FormidableLabs/builder#builder-concurrent)
              * [\`builder envs TASK JSON_ARRAY\`](https://github.com/FormidableLabs/builder#builder-envs)
            `, { width: "90%" })/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {markdown(`
              ## FLAGS

              * \`--tries=<num>\`
              * \`--setup=<task>\`
              * \`--queue=<num>\`: Concurrency limit
              * \`--[no-]buffer\`: Output at _end_
              * \`--[no-]bail\`: End on 1st failure
            `, { width: "90%" })}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              **Demo**: [builder-examples/01-builder](https://github.com/FormidableLabs/builder-examples/tree/master/01-builder)
            `, { width: "90%", marginBottom: "1em" })/*eslint-enable max-len*/}
            <CodePane
              lang="bash"
              source={strip(`
                \$ builder run hello
                \$ builder run fail
                \$ builder run --tries=3 fail

                \$ builder concurrent hello hello hello
                \$ builder concurrent --buffer hello hello hello
                \$ builder concurrent --queue=1 hello hello hello
                \$ builder envs hello-env '[{"NAME":"Bob"},{"NAME":"Bill"}]'
              `)}
            />
          </Slide>
          <Slide>
            {markdown(`
              ### RUNNER USE CASES

              * **Complex** test tasks
              * **Concurrent** tasks
              * **Cross-OS** environment variables
            `, { width: "90%" })}
          </Slide>

          {/* -----------------------------------------------------------------
            * Section: Archetypes
            * ----------------------------------------------------------------- */}
          <Slide bgImage={images.bgMissionControl} bgDarken={0.20}>
            <div style={BG_MARKDOWN_BLACKBOX}>
              <Heading fit caps textColor="tertiary">Archetypes</Heading>
              {markdown(`
                &nbsp;

                "Mission control" for a set of identical projects
              `)}
            </div>
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ### THEMES

              * It&apos;s "**almost npm**"
              * **Avoid** "buying the farm"
              * You can [**give up**](https://github.com/FormidableLabs/builder#i-give-up-how-do-i-abandon-builder)
            `)/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {markdown(`
              ## HOW IT WORKS

              * \`builder <action>\` replaces \`npm run\`
              * Archetype has \`scripts\` + configs
              * \`builder\` _merges_ archetype into root project
            `, { width: "95%" })}
          </Slide>
          <Slide bgImage={images.bgHerdingBuffalo} bgDarken={0.20}>
            {markdown(`
              ### USE CASES

              * **Multiple** projects / repos
              * Nearly **identical**
              * Complex **workflows**
            `, BG_MARKDOWN_BLACKBOX)}
          </Slide>
          <Slide>
            {markdown(`
              ## GOALS

              * Developers easily **use**
              * Architects centrally **control**
              * Projects can **flexibly** deviate
            `, { width: "80%" })}
          </Slide>
          <Slide>
            {markdown(`
              ## GET STARTED
            `)}
            <CodePane
              lang="bash"
              source={strip(`
                \$ npm install --save builder builder-react-component
                \$ npm install --save-dev builder-react-component-dev
              `)}
            />
          </Slide>
          <Slide bgImage={images.bgCards} bgDarken={0.20}>
            <div style={BG_MARKDOWN_BLACKBOX}>
              {markdown(`
                ## THE "MAGIC"

                * Add archetype **\`.bin\`** to **\`PATH\`**
                * Add archetype **\`node_modules\`** to **\`NODE_PATH\`**
                * Merge archetype &amp; project **\`package.json:scripts\`**
              `, { width: "95%" })}
            </div>
          </Slide>
          <Slide bgImage={images.bgBlueprint} bgDarken={0.20}>
            <div style={BG_MARKDOWN_BLACKBOX}>
              <Heading fit caps textColor="tertiary">An Archetype</Heading>
              {markdown(`
                * NPM tasks
                * Configurations
                * Boilerplate files
                * Documentation
                * Templates
              `)}
            </div>
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ## EXAMPLES

              * [builder-victory-component](https://github.com/FormidableLabs/builder-victory-component)
              * [builder-react-component](https://github.com/FormidableLabs/builder-react-component)
              * [builder-react-app](https://github.com/FormidableLabs/builder-react-app)
            `)/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ### TASKS
            `)/*eslint-enable max-len*/}
            <CodePane
              lang="javascript"
              source={strip(`
                // <arch>/package.json
                "scripts": {
                  "foo": "echo ARCH FOO",
                  "bar": "echo ARCH BAR",
                  "foobar": "builder run foo && builder run bar",
                }

                // <root>/package.json
                "scripts": {
                  "bar": "echo ROOT BAR",
                }
              `)}
            />
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ### TASKS

              [\`builder-react-component\`](https://github.com/FormidableLabs/builder-react-component)

              * [<arch>/package.json](https://github.com/FormidableLabs/builder-react-component/blob/master/package.json#L15-L55)
              * [<root>/package.json](https://github.com/FormidableLabs/formidable-react-component-boilerplate/blob/master/package.json#L15-L20)
            `)/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ### DEPENDENCIES

              [\`builder-react-component\`](https://github.com/FormidableLabs/builder-react-component)

              * [<arch>/package.json](https://github.com/FormidableLabs/builder-react-component/blob/master/package.json#L56-L66)
              * [<arch>/dev/package.json](https://github.com/FormidableLabs/builder-react-component/blob/master/dev/package.json#L16-L43)
              * [<root>/package.json](https://github.com/FormidableLabs/formidable-react-component-boilerplate/blob/master/package.json#L21-L34)
            `)/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {markdown(`
              ### ARCHETYPE FILES
            `)}
            <CodePane
              lang="shell"
              source={strip(`
                DEVELOPMENT.md
                package.json
                dev/package.json

                config/
                  babel/
                  eslint/
                  karma/
                  webpack/

                init.js
                init/
              `)}
            />
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              **Demo**: [builder-examples/02-builder-archetype](https://github.com/FormidableLabs/builder-examples/tree/master/02-builder-archetype)
            `, { width: "90%", marginBottom: "1em" })/*eslint-enable max-len*/}
            <CodePane
              lang="bash"
              source={strip(`
                \$ builder help
                \$ builder run numbers
                \$ builder run foobar

                # Override \`three\`, \`bar\`
                \$ builder run three
                \$ builder run numbers
              `)}
            />
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              **Demo**: [builder-react-component](https://github.com/FormidableLabs/builder-react-component)
            `, { width: "90%", marginBottom: "1em" })/*eslint-enable max-len*/}
            <CodePane
              lang="bash"
              source={strip(`
                \$ builder help
                \$ builder run lint

                # Override \`lint-client-test\`
                \$ builder run lint-client-test
                \$ builder run lint
              `)}
            />
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ### COMPLEXITIES

              * Easy for **users**, complex for **architects**
              * [Archetype authoring](https://github.com/FormidableLabs/builder#archetypes)
              * [Tips + Tricks](https://github.com/FormidableLabs/builder#tips-tricks--notes)
            `)/*eslint-enable max-len*/}
          </Slide>

          {/* -----------------------------------------------------------------
            * Section: Init
            * ----------------------------------------------------------------- */}
          <Slide bgImage={images.bgShuttle} bgDarken={0.20}>
            <div style={BG_MARKDOWN_BLACKBOX}>
              <Heading fit caps textColor="tertiary">Builder Init</Heading>
              {markdown(`
                &nbsp;

                Generate projects from archetype templates.
              `)}
            </div>
          </Slide>
          <Slide>
            {/*eslint-disable max-len*/markdown(`
              ## COMPONENTS

              [\`builder-react-component\`](https://github.com/FormidableLabs/builder-react-component)

              * [\`<arch>/init.js\`](https://github.com/FormidableLabs/builder-react-component/tree/master/init.js):
                Prompts, defaults.
              * [\`<arch>/init/\`](https://github.com/FormidableLabs/builder-react-component/tree/master/init):
                Template files (Lodash/ERB-style).
            `, { width: "95%" })/*eslint-enable max-len*/}
          </Slide>
          <Slide>
            {markdown(`
              ## INITIALIZATION

              Installs like \`npm\` does...
            `)}
            <CodePane
              lang="bash"
              source={strip(`
                \$ npm install -g builder-init

                \$ builder-init builder-react-component
                \$ builder-init builder-react-component@0.3.0
                \$ builder-init FormidableLabs/builder-react-component
                \$ builder-init FormidableLabs/builder-react-component#v0.3.0
                \$ builder-init git+ssh://git@github.com:FormidableLabs/builder-react-component.git
                \$ builder-init /FULL/PATH/TO/builder-react-component
              `)}
            />
          </Slide>

          {/* -----------------------------------------------------------------
            * Thanks
            * ----------------------------------------------------------------- */}
          <Slide bgImage={images.polygons}>
            <div style={BG_MARKDOWN_BLACKBOX}>
              <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
                Made with love in Seattle by
              </Heading>
              <Link href="http://www.formidable.com">
                <Image width="100%" src={images.logo}/>
              </Link>
            </div>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
