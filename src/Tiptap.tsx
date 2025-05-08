import { useEditor, EditorContent } from "@tiptap/react";
import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";

// define your extension array
const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor} shouldShow={null}>
        This is the floating menu
      </FloatingMenu>
      <BubbleMenu editor={editor} shouldShow={null}>
        This is the bubble menu
      </BubbleMenu>
    </>
  );
};

export default Tiptap;
