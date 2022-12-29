# invite-frontend

# Component Development

To develop a component we use the following pattern

## Presentational Component

```tsx
// src/events/ui/EventCard.tsx
type EventCardProps = {
  name: string;
  description?: string;
};

export function EventCard(props: EventCardProps) {
  const { name } = props;
  const description = props?.description;

  return (
    <div>
      <h3>{name}</h3>
      {description ? <p>description</p> : null}
    </div>
  );
}
```

# File Structure

```
    src/
    |
    ---- users
        |
        |
        ---- domain // responde: qué define a un usuario?
        |
        |
        ---- use-cases // ejemplos: registrarse, iniciar sesión, cerrar sesión, eliminar cuenta
        |
        |
        ---- ui // todo lo que sea visible para el usuario
    |
    ---- events
        |
        |
        ---- domain // responde: modela lo que es un evento (características)
        |
        |
        ---- use-cases // ejemplos: CRUD de evento, CRUD de invitados
        |
        |
        ---- ui
    |
    ---- core
        |
        |
        ---- mismas capas que los demás dominios
        |
        |
        ---- infra // relacionado a la infraestructura en la que corre la aplicación (navegador y todos sus componentes)
```
