import { FileUser } from "lucide-react";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <>
      <Link
        href="/resume.pdf"
        download="ranjanaK.pdf"
        className="flex items-center gap-1"
      >
        <FileUser size={24} />
      </Link>
    </>
  );
};

export default ResumeButton;
