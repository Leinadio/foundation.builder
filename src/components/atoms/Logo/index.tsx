import Link from "next/link";
import Image from "next/image";

export default function Logo({
  logoUrl,
}: {
  logoUrl: string;
}) {
  const size: number = 40;
  return (
    <Link
      href={"/"}
      className="flex items-center hover:bg-gray-100 rounded-md p-2"
    >
      <Image
        src={logoUrl}
        alt="Womi logo"
        width={size}
        height={size}
      />
      <div className="flex flex-col">
        <span className="text-2xl font-bold ml-2">
          Womi
        </span>
      </div>
    </Link>
  );
}
