import { RxCross2 } from "react-icons/rx";

const PlayVideo = ({ close }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center text-white">
      <div className="bg-black p-6 rounded-lg shadow-lg grid gap-10 w-md">
        <div className="flex justify-between gap-4">

        {/* Video or content */}
        <div className="">
          <p>Video</p>
        </div>

        {/* Close button */}
        <button
          onClick={close}
          className="text-white text-xl cursor-pointer"
        >
        <RxCross2/>
        </button>
        </div>
      <div className="grid place-items-center">
        <div>
            <video src="" controls></video>
        </div>
      </div>

      </div>

    </div>
  );
};

export default PlayVideo;
