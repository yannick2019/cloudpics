import { Footer } from "flowbite-react";

function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full text-center bg-gray-800 mt-[50px]">
        <div className="w-full p-2 md:px-4 justify-between sm:flex sm:items-center sm:justify-between md:h-[100px]">
          <span className="text-[#00df9a] text-xl">Cloudpics</span>
          <Footer.LinkGroup className="text-white flex gap-2 flex-col items-center md:flex-row md:gap-8">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by=" Cloudpics. All rights reserved."
          year={2024}
          className="py-4 text-white"
        />
      </div>
    </Footer>
  );
}

export default FooterComponent;
