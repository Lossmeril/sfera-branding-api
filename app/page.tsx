import { elementSets } from "@/lib/data";
import { facilitiesWithElements } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="grid grid-cols-5 gap-2 w-full">
        {facilitiesWithElements.map((facility) => (
          <div
            className="w-full font-mono text-sm flex flex-col justify-center border pb-6 pt-8 px-4 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 rounded-lg"
            key={facility.id}
          >
            {"[f."}
            {facility.id}
            {"]"}
            <h3 key={facility.id} className="font-bold">
              {facility.name}
            </h3>
            <p
              className="text-xs w-full"
              style={{ backgroundColor: facility.colorBg + "80" }}
            >
              {facility.colorBg}
            </p>
            <p className="text-xs">{facility.nameEn}</p>

            <p className="mt-4 text-xs font-bold">Sada prvků</p>
            {facility.elementSet ? (
              <div className="mt-2">
                <p className="text-xs">
                  {"[el."}
                  {facility.elementSet.id}
                  {"]"} {facility.elementSet.elements.length}
                  {" prvků"}
                </p>
                <div className="text-xs italic text-neutral-400"></div>
              </div>
            ) : (
              <p className="text-xs italic text-neutral-400 mt-2">
                No element sets
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-2 w-full">
        {elementSets.map((set) => (
          <div
            className="w-full font-mono text-sm flex flex-col justify-center border pb-6 pt-8 px-4 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 rounded-lg"
            key={set.id}
          >
            {"[el."}
            {set.id}
            {"]"}
            <h3 key={set.id} className="font-bold">
              {set.name}
            </h3>
            <p className="text-xs w-full italic text-neutral-400">
              {set.elementPrefix ? set.elementPrefix : "No Prefix"}
            </p>

            <p className="mt-4 text-xs font-bold">Sada prvků</p>
            <div className="mt-2">
              <p className="text-xs">
                {"["}
                {set.id}
                {"]"} {set.elementPrefix ? set.elementPrefix : "No Prefix"} (
                {set.numberOfElements})
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
