import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export function SumaryTable() {
  return (
    <section className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {
          weekDays.map((weekDay, index) => {
            return (
              <div key={`${weekDay}-${index}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                { weekDay }
              </div>
            )
          })
        }
      </div>
      <div className="grid grid-rows-7 grid-flow-col">
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
       <HabitDay completed={0} />
      </div>
    </section>
  )
}