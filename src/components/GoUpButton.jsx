const GoUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 bg-black opacity-50 text-white px-4 py-2 shadow-md transition ease-in-out duration-300"
    >
      <span>Up</span>
    </button>
  );
};

export default GoUpButton;
