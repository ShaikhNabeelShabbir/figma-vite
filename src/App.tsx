import RadioGroupSection from "./components/RadioGroupSection";
import DimensionsSection from "./components/DimensionsSection";
import HoverCardSection from "./components/HoverCardSection";
import {DropdownMenuSection} from "./components/DropdownMenuSection";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";

function App() {
  return (
    <div className="large-container flex flex-col px-10 py-10">
      <div className="flex gap-6 px-14 md:px-5">
        <div className="h-[24px] w-[24px] rounded-[12px] bg-slate-900" />
        <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer"></a>
      </div>
      <div className="title">
        <h1>
          Beautifully designed components <br />
          built with RadixUI and Tailwind CSS
        </h1>
      </div>
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
        </div>

        {/* Column 3 */}
        <div className="flex flex-col flex-1">
          <DropdownMenuSection />
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center space-x-2">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
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
