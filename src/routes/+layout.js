import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const load = async () => {

  if (browser) {
    posthog.init(
      'phc_vR9S4yusPIwmWnhy6V9c1Orbt1qYALyveBEtBSpErzG',
      { 
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always',
        autocapture: { dom_event_allowlist: ['click', 'submit'] }        
      }
    )
  }
  return
};