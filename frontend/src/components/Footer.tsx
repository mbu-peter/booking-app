const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-blue-800 to-blue-500 py-10">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <span className="text-3xl text-white font-bold tracking-tight">
          <span className="italic">MP</span>Safaris.com
        </span>
        <div className="flex space-x-4">
          <a
            href="/policy"
            className="text-white font-bold hover:text-purple-300 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-white font-bold hover:text-purple-300 transition duration-300"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
