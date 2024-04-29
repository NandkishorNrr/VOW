import React from "react";

function Footer() {
  return (
    <footer className="bg-green-300 text-white py-4 text-center fixed bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <marquee behavior="scroll" direction="left">
          <span className="text-orange-600 font-bold text-lg mr-4">
            Live Election Results: Unity Party | Liberty Alliance | Progressive
            Coalition | Heritage Party | Future Front Stay tuned for live
            updates as parties vie for victory!
          </span>
        </marquee>
      </div>
    </footer>
  );
}

export default Footer;
