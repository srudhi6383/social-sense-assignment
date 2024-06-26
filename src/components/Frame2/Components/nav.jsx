import { Avatar, AvatarFallback, AvatarImage } from "../../Ui/avatar";
import { Button } from "../../Ui/button";


export function UserNav() {
  return (
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SRD</AvatarFallback>
          </Avatar>
        </Button>
  );
}
