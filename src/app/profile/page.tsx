import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import SectionWrapper from "@/components/SectionWrapper";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-md px-4">
        <SectionWrapper />
      </div>
      <Footer />
    </>
  );
};

export default page;
