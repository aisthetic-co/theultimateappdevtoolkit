import { useEffect, useState } from "react";

export default function DisableDraftMode() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window === window.parent);
  }, []);

  return (
    show && (
      <div className="fixed left-0 top-0 z-[51] w-full text-white">
        <div className="py-2 text-center font-poppins-14-400-24">
          {"Previewing drafts. "}
          <a
            href={"/api/draft-mode/disable"}
            className="hover:text-cyan underline transition-colors duration-200"
          >
            Back to published
          </a>
        </div>
      </div>
    )
  );
}
