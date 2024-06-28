import {
  type Extensions,
  type JSONContent,
  EditorContent,
} from '@tiptap/react';
import {
  ListIcon,
  OrderedListIcon,
  LinkIcon,
  LetterBoldIcon,
  QuoteIcon,
  RulerCombinedIcon,
} from '@/components/ui/icon';

import { useWYSIWYGEditorPresenter } from './wysiwyg-editor.presenter';
import { containerStyle, toolbarStyle } from './wysiwyg-editor.style';

type WYSIWYGEditorProps = {
  extensions: Extensions;
  defaultContent: JSONContent;
  onChangeContent?: (content: JSONContent) => void;
};

export function WYSIWYGEditor({
  extensions,
  defaultContent,
  onChangeContent,
}: WYSIWYGEditorProps) {
  const { editor } = useWYSIWYGEditorPresenter({
    extensions,
    content: defaultContent,
    onChangeContent,
  });

  if (!editor) {
    return null;
  }
  return (
    <div className={containerStyle}>
      {/* Toolbar */}
      <div className={toolbarStyle}>
        <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x sm:rtl:divide-x-reverse">
          <div className="flex items-center space-x-1 sm:pe-4 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
              }}
              className="inline-flex cursor-pointer items-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <span className="text-sm font-bold">H2</span>
            </button>
            <button
              type="button"
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 3 }).run();
              }}
              className="inline-flex cursor-pointer items-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <span className="text-sm font-bold">H3</span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                editor.chain().focus().toggleBulletList().run();
              }}
            >
              <ListIcon className="size-5" />
              <span className="sr-only">Unordered list</span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                editor.chain().focus().toggleOrderedList().run();
              }}
            >
              <OrderedListIcon className="size-5" />
              <span className="sr-only">Ordered list</span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                editor.chain().focus().toggleBlockquote().run();
              }}
            >
              <QuoteIcon className="size-5" />
              <span className="sr-only">Blockquote</span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                editor.chain().focus().setHorizontalRule().run();
              }}
            >
              <RulerCombinedIcon className="size-5" />
              <span className="sr-only">Horizontal rule</span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <LinkIcon className="size-5" />
              <span className="sr-only">Link</span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                editor.chain().focus().toggleBold().run();
              }}
            >
              <LetterBoldIcon className="size-5" />
              <span className="sr-only">Bold</span>
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-b-lg bg-white dark:bg-gray-800">
        <label htmlFor="editor" className="sr-only">
          Publish post
        </label>

        <EditorContent className="p-4" editor={editor} />
      </div>
    </div>
  );
}
