export const htmlMock =  '    <h1>Angular dev interview</h1>\n' +
  '    <p>Create a service that opens a popup with predefined <code>ok</code> and <code>cancel</code> actions, and a title. The content of the popup can be one of the following:</p>\n' +
  '    <ul>\n' +
  '      <li>A simple text message</li>\n' +
  '      <li>Another component</li>\n' +
  '      <li>HTML content</li>\n' +
  '    </ul>\n' +
  '    <p>The service should expose a single <code>openModal</code> method that is type safe. For example: I should not be able to pass both a text and a component to the method.</p>\n' +
  '    <p>\n' +
  '      When setting a text message I should be able to send: message, title, variant\n' +
  '    </p>\n' +
  '    <p>\n' +
  '      When setting HTML content I should be able to send the content, title and variant. The HTML content could be very complex and could also have binded data.\n' +
  '    </p>\n' +
  '    <p>\n' +
  '      When setting a component I should be able to send only the component. The component should also receive data that it can render.\n' +
  '    </p>\n' +
  '    <p>The <code>ok</code> action should be stylizable with a variant (primary, accent, warn, etc.)</p>';
