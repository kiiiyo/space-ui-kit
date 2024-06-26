import { type FormSchemaType } from './dashboard-issues-edit-page.component';

export function generateMockEditIssue(): FormSchemaType {
  return {
    title: 'Issue Template',
    description: `
### Subject of the issue

Describe your issue here.

### Your environment
* version of space-ui-kit
* version of react
* which browser and its version

### Steps to reproduce
Tell us how to reproduce this issue. Please provide a working demo.

### Expected behaviour
Tell us what should happen

### Actual behaviour
Tell us what happens instead
    `,
    singleLabel: 'singleLabelA',
    multipleLabels: ['multipleLabelB', 'multipleLabelC'],
  };
}
