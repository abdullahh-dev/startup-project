import { STARTUP_TYPE } from "@/types/PostType";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const AppCard = ({ data }: { data: STARTUP_TYPE }) => {
  return (
    <section className="card-bg max-w-96 p-3 rounded-xl">
      <div className="flex justify-between">
        <p className="text-[12px] text-[#bcbcbc] flex items-center justify-center bg-[#3f3f3f] px-2 rounded-full py-[1px]">
          {data._createdAt}
        </p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="w-[18px] h-p[18px]" />
          <span className="text-[14px] font-medium">{data.views}</span>
        </div>
      </div>
      <div className="flex justify-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${data.author._id}`}>
            <p className="text-[14px] font-medium line-clamp-1">
              {data.author.name}
            </p>
          </Link>
          <Link href={`/startup/${data._id}`}>
            <h1 className="text-[18px] font-semibold mt-1 leading-snug">
              {data.tile}
            </h1>
          </Link>
        </div>
      </div>
      <div className="rounded-md overflow-hidden my-1">
        <img
          src={data.image}
          alt={data.image}
          className="w-full object-cover max-h-72"
        />
      </div>
      <div className="flex justify-between gap-3 mt-2">
        <Link href={`/?query=${data.category}`}>
          <p className="">{data.category}</p>
        </Link>
      </div>
    </section>
  );
};

export default AppCard;
