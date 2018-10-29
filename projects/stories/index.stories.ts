import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/angular';
import { LibADemoComponent } from './lib-a-demo.component';

// Fails
import { LibAModule } from 'lib-a';

// Works
// import { LibAModule } from '../lib-a/src/lib/lib-a.module';

storiesOf('library-a', module).add('story-a', () => ({
  component: LibADemoComponent,
  moduleMetadata: {
    imports: [CommonModule, LibAModule]
  }
}));
