import { generateJSON } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import { type FormSchemaType } from './dashboard-issues-edit-page.component';

const mockDescription = `
<h3>Subject of the issue</h3>
<p>Describe your issue here.</p>
<h3>Your environment</h3>
<ul>
<li>version of space-ui-kit</li>
<li>version of react</li>
<li>which browser and its version</li>
</ul>
<h3>Steps to reproduce</h3>
<p>Tell us how to reproduce this issue. Please provide a working demo.</p>
<h3>Expected behaviour</h3>
<p>Tell us what should happen</p>
<h3>Actual behaviour</h3>
<p>Tell us what happens instead</p>`;

export function generateMockEditIssue(): FormSchemaType {
  return {
    title: 'Issue Template',
    description: generateJSON(mockDescription, [StarterKit]),
    singleLabel: 'singleLabelA',
    multipleLabels: ['multipleLabelB', 'multipleLabelC'],
  };
}
