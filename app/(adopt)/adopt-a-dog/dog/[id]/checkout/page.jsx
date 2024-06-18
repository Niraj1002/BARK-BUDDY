import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import BuyForm from "@/components/BuyForm";

const Page = async () => {
  const user = await currentUser();
  console.log(user);
  const image = user.imageUrl;

  return (
    <div>
      <BuyForm />
      {image && <Image src={image} width={100} height={100} alt="User Image" />}
      {user.firstName && user.lastName && (
        <p>
          {user.firstName} {user.lastName}
        </p>
      )}
    </div>
  );
};

export default Page;
