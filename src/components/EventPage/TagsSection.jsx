export default function TagsSection() {
  return (
    <div>
      <h1 className="text-xl font-bold pb-4">Tags</h1>
      <div className="flex flex-wrap gap-1">
        <span className="bg-[#00733C] text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-default rounded">Charity</span>
        <span className="bg-[#00733C] text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-default rounded">Child</span>
        <span className="bg-[#00733C] text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-default rounded">Education</span>
        <span className="bg-[#00733C] text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-default rounded">Food</span>
        <span className="bg-[#00733C] text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-default rounded">Homeless</span>
        <span className="bg-[#00733C] text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-default rounded">Hungry</span>
        <span className="bg-[#00733C] text-white text-xs px-3 py-1 hover:bg-[#FFB204] duration-300 cursor-default rounded">Water</span>
      </div>
    </div>
  );
}
