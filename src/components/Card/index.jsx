import { VideoPlayer } from "../VideoPlayer";
import clsx from "clsx";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { NavLink } from "../NavLink";
import { CopyIconClient } from "./CopyIcon";


export const MediaCard = ({ id, src, prompt, source, className }) => {
  return <div className={clsx(["relative overflow-hidden rounded-3xl bg-gray-900  shadow-2xl lg:max-w-lg  mb-4", className])}>
    <figure className="relative isolate pb-6 lg:pb-8 xl:pb-10">
      <div className="aspect-video rounded-t-xl object-cover group-hover:opacity-75">
        <VideoPlayer src={src} />
      </div>
      <figcaption className="mt-6 line-clamp-6 w-full px-8 text-sm leading-6 text-gray-300">
        <CopyIconClient text={prompt} />Prompt: {prompt}
      </figcaption>
      <figcaption className="mt-6 inline-flex w-full items-center justify-between px-8 text-sm leading-6 text-gray-300">
        <span>🤖 {source}</span>
        <span className="inline-flex items-center">
          <NavLink className="!text-sm" href={`/sora-prompts/${id}`}>Detail</NavLink>
          <a href={src} download target="_blank">
            <ArrowDownCircleIcon className="h-6 w-6 hover:text-main-blue" />
          </a>
        </span>
      </figcaption>
    </figure>
  </div>
}