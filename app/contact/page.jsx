import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import image from "@/assets/image.png";
import map from "@/assets/map.png";
import call from "@/assets/call.png";
import gmail from "@/assets/gmail.png";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-10">
      {/* Left Section */}
      <div className="md:mr-10 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Get in touch with our team by choosing what kind of our services you
          are looking for.
        </p>
        <div className="w-64 md:w-auto">
          <Image src={image} alt="Contact" />
        </div>
        <div className="border border-[#CBCBCB] rounded-xl mt-5 p-4">
          <div className="flex items-center mb-3">
            <Image src={map} alt="Map" className="h-8 w-8" />
            <span className="ml-2">123 Main Street, Anytown, USA</span>
          </div>
          <div className="flex items-center mb-3">
            <Image src={call} alt="Call" className="h-8 w-8" />
            <span className="ml-2">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <Image src={gmail} alt="Gmail" className="h-8 w-8" />
            <span className="ml-2">FurryFriendsSupport@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="md:w-96">
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
