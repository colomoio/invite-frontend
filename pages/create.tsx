import {CardForm} from "../src/events/ui/CardForm";
import { EventCard } from "../src/events/ui/EventCard";

export default function CreatePage() {
  return (
    <div>
      <CardForm 
      />
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
