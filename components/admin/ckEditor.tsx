import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  name: string;
  value: string;
}

const DynamicCKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((module) => module.CKEditor),
  { ssr: false }
);
const KlesikEditor = typeof window !== "undefined" ? require("@ckeditor/ckeditor5-build-classic") : null;
export default function CKeditor({
  onChange,
  editorLoaded,
  name,
  value,
}: CKeditorProps) {
  const editorRef = useRef<any>();

  useEffect(() => {
    const loadEditor = async () => {
      const ClassicEditor = await KlesikEditor;
      editorRef.current = ClassicEditor;
    };

    loadEditor();
  }, []);

  return (
    <>
      {editorLoaded && editorRef.current ? (
        <DynamicCKEditor
          editor={editorRef.current}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
            ],
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
