import { PROJECT_REVISION } from 'ember-service-worker/service-worker';

self.addEventListener('message', function(event) {
  if (event.data && event.data.command === 'verify-project-revision') {
    let matchesVersion = event.data.revision === PROJECT_REVISION;

    event.ports[0].postMessage({
      error: matchesVersion ? null : 'Service worker does not match expected application version, unregistering...'
    });
  }
});
