/*
 * JobServiceID:
 * urn:moat:${APP_ID}:moatjs-seed:${OPERATION}:${VERSION}
 * Description: Describe about your app.
 */
var moat = require('moat'),
    context = moat.init(),
    session = context.session,
    clientRequest = context.clientRequest;

session.fetchUrlSync(
  'http://localhost',
  {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(clientRequest.objects)
  },
  function(resp) {
    if (parseInt(resp.responseCode / 100) === 2) {
      session.log('Success!');
    } else {
      throw 'Failed to post data: ' + resp.responseCode;
    }
  });
