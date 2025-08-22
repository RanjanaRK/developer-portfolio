const Footer = () => {
  return (
    <>
      <footer className="mx-auto mt-10 flex w-full max-w-screen-md flex-col items-center justify-center gap-2.5 overflow-hidden px-4 pb-30 sm:mt-20 sm:px-8">
        <span className="text-woodsmoke-300 text-center text-xs italic">
          &copy;{new Date().getFullYear()} — Made by Ranjana Kumari
        </span>
        <span className="text-foreground text-center text-sm font-medium"></span>
      </footer>
    </>
  );
};

export default Footer;
