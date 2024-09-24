import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCalendar } from '@fortawesome/free-solid-svg-icons';

export function initializeIcons() {
  library.add(faHeart, faCalendar);
}
