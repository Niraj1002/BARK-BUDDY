// import { currentUser } from "@clerk/nextjs/server";
import { useEffect } from "react";

const Page1 = async () => {
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("api/getCurrentUser");
      const data = await res.json();
      //   console.log(data);
      setUser(data);
    };

    fetchUser();
  }, []);
  return <div>page1</div>;
};

export default Page1;
