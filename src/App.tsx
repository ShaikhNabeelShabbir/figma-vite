import RadioGroupSection from "./components/RadioGroupSection";
import DimensionsSection from "./components/DimensionsSection";
import HoverCardSection from "./components/HoverCardSection";
import { DropdownMenuSection } from "./components/DropdownMenuSection";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function App() {
  return (
    <div className="large-container flex flex-col px-20 py-20">
      <div className="flex gap-6 px-14 md:px-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="shadcn-ui py-3">
          <a href="https://ui.shadcn.com/">
            <img src="src/assets/ui.png" alt="" />
          </a>
        </div>
      </div>
      <div className="title">
        <h1>
          Beautifully designed components <br />
          built with RadixUI and Tailwind CSS
        </h1>
      </div>
      <br />
      <br />
      <br />

      <div className="flex flex-row gap-6">
        {/* Column 1 */}
        <div className="flex flex-col flex-1 gap-6">
          <div className="flex flex-col">
            <RadioGroupSection />
          </div>
          <div className="flex flex-col">
            <DimensionsSection />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col flex-1 items-center gap-6">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
            <Button className="min-w-[56px] shadow-md">Continue</Button>
          </div>
          <br />
          <HoverCardSection />
          <br />
          <div
            className="flex items-center space-x-2 w-50
      border-gray-300 border border-solid bg-white shadow-sm rounded-md
      gap-3.5 p-3"
          >
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col flex-1">
          <DropdownMenuSection />
        </div>
      </div>
      <br />

      <div className="container-xs flex items-center justify-center smsflex-col self-end sm:self-auto">
        <span className="text-slate-400">
          This figma file was made with love by&nbsp;
        </span>
        <a href="#" className="text-slate-400 underline">
          @skirano
        </a>
        <div className="flex flex-1 items-center justify-end gap-[17px] sm:self-stretch">
          <Button className="min-w-[56px] shadow-md">Beta</Button>
          v1.0.0
        </div>
      </div>
    </div>
  );
}

export default App;
