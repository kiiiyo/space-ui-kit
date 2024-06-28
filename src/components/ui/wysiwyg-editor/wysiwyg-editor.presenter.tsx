import { useEditor, type Extensions, type JSONContent } from '@tiptap/react';

type UseWYSIWYGEditorPresenterProps = {
  extensions: Extensions;
  content?: JSONContent;
  onChangeContent?: (content: JSONContent) => void;
};

export function useWYSIWYGEditorPresenter({
  extensions,
  content,
  onChangeContent,
}: UseWYSIWYGEditorPresenterProps) {
  const editorInstance = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class:
          'editor-view-body prose prose-base focus:outline-none text-left min-h-[200px]',
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onChangeContent?.(json);
    },
  });

  return {
    editor: editorInstance,
  } as const;
}
