/*global document*/
 var React = require('react');
/**
 * Render a react component in the DOM.
 * @type {undefined}
 * @param component - A react component.
 * @param selector  - A selector on a DOM node.
 * @param options   - Options for the component rendering.
 */
module.exports =  (component,selector, options) =>{
  options = options || {};
  React.render(
    React.createElement(component, options.props, options.data),
    document.querySelector('#notification-center')
  );
};
