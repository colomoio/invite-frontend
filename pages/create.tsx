import { EventsCard } from "../src/events/ui/EventsCard";

export default function CreatePage() {
  return (
    <div>
      <EventsCard
        eventName="Evento"
        imgSrc=""
        ubication="ciudad, estado"
        timeStamp={Date.now()}
        guests={15}
        description="describa el etiqueta, tema o el motivo de la fiesta (opcional)"
      />
    </div>
  );
}
