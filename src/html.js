import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/fork-corner/dist/fork-corner.min.css"
        ></link>
        <script 
          src="https://cdn.jsdelivr.net/npm/fork-corner/dist/fork-corner.min.js" defer
          ></script>
        <script
          data-name="BMC-Widget"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="rahuldkjain"
          data-description="Support me on Buy me a coffee!"
          data-message="Loved the tool🚀. Buy me a coffee to support the work!"
          data-color="#FF813F"
          data-position=""
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </head>
      <body {...props.bodyAttributes}>
        <a 
          href="https://github.com/rahuldkjain/github-profile-readme-generator" 
          target="_blank" 
          id="fork-corner" 
          class="fork-corner fc-pos-tr fc-animate-default fc-theme-github"
        ></a>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
