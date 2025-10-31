import Image from "next/image";
import SigninPage from "@/(auth)/signin/page"

export default function Home() {
  return (
    <div className="bg-gray-100">
      <SigninPage />
    </div>
  );
}
  