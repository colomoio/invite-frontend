import { EventInputsCard } from "../src/events/ui/EventInputsCard";
import { EventCard } from "../src/events/ui/EventCard";
import { ChangeEvent, useState } from "react";

export default function CreatePage() {
  const [imgSrc, setImgSrc] = useState("");

  function uploadImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length === 0 || event.target.files === null) {
      return;
    }

    let img = event.target.files[0];

    setImgSrc(URL.createObjectURL(img));
  }

  return (
    <>
      <EventInputsCard />
      <EventCard
        eventName="Evento"
        imgSrc={imgSrc}
        uploadImage={uploadImage}
        location="ciudad, estado"
        timestamp={Date.now()}
        guests={15}
        description="describa el etiqueta, tema o el motivo de la fiesta (opcional)"
      />
    </>
  );
}
