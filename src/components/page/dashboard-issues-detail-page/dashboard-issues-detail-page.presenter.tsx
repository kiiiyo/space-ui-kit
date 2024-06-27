import { useCallback } from 'react';
import { useEditor } from '@tiptap/react';
import { useNavigate } from 'react-router-dom';
import StarterKit from '@tiptap/starter-kit';

const generateMockDescription = `
  <h2>Subject of the issue</h2>
  <p>Describe your issue here.</p>
  <h2>Your environment</h2>
  <ul>
  <li>version of space-ui-kit</li>
  <li>version of react</li>
  <li>which browser and its version</li>
  </ul>
  <h2>Steps to reproduce</h2>
  <p>Tell us how to reproduce this issue. Please provide a working demo.</p>
  <h2>Expected behaviour</h2>
  <p>Tell us what should happen</p>
  <h2>Actual behaviour</h2>
  <p>Tell us what happens instead</p>
`;
export function useDashboardIssuesDetailPagePresenter() {
  const issueValues = {
    title: 'Issue Template',
    description: generateMockDescription,
    singleLabel: 'singleLabelA',
    multipleLabels: ['multipleLabelB', 'multipleLabelC'],
  };

  const navigate = useNavigate();
  const generatedDescriptionEditor = useEditor({
    extensions: [StarterKit],
    content: issueValues.description,
  });

  const onClickNavigateToEdit = useCallback(() => {
    navigate('/dashboard/issues/edit');
  }, [navigate]);

  return {
    title: issueValues.title,
    singleLabel: issueValues.singleLabel,
    multipleLabels: issueValues.multipleLabels,
    generatedDescriptionEditor,
    onClickNavigateToEdit,
  } as const;
}
