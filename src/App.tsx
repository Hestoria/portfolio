import SideBySideLayout from "@/components/layout/sidebyside";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "./components/ui/button";
interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <main className="xl:flex xl:overflow-hidden h-screen">
      <SideBySideLayout
        leftSession={
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        }
        rightSession={
          <div className="scrollableContent">
            {[...Array(20).keys()].map((index) => (
              <div
                key={index}
                className="sticky h-screen"
                style={{
                  backgroundColor: index % 2 ? "red" : "blue",
                }}
              >
                Scrollable Content {index}
              </div>
            ))}
          </div>
        }
      />
    </main>
  );
};

export default App;
