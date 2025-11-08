import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[350px]">
        <CardHeader className="items-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>John Doe</CardTitle>
          <CardDescription>Software Engineer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Building beautiful and functional web experiences.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Contact</Button>
          <Button>Portfolio</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
