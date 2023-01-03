import { EventInputsCard } from "../src/events/ui/EventInputsCard";
import { EventCard } from "../src/events/ui/EventCard";

export default function CreatePage() {
  return (
    <div>
      <EventInputsCard />
      <EventCard
        eventName="Evento"
        imgSrc=""
        location="ciudad, estado"
        timestamp={Date.now()}
        guests={15}
        description="describa el etiqueta, tema o el motivo de la fiesta (opcional)"
      />
    </div>
  );
}
