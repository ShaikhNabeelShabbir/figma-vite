import './App.css'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from './components/ui/input'

function App() {
 return(
  <>
<div className="flex flex-col gap-6 px-14 md:px-5">
<div className="h-[24px] w-[24px] rounded-[12px] bg-slate-900" /> 
<a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">
</a>
</div>
<div className="title">
  <h1>Beautifully designed components <br></br>
  built with RadixUI and Tailwind CSS
  </h1>
</div>
<br />
<div className='flex items-end'>
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one"> Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Compact</Label>
  </div>
</RadioGroup>
</div>
<br />
<div className="dimensions flex items-end mr-7 gap-3.5 p-3 md:mr-0
 border-gray-300 border border-solid bg-white shadow-sm rounded-md
">
  <div className="grid gap-4">
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Dimensions</h4>
      <p className="text-sm text-muted-foreground">
        Set the dimensions for the layer.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="width">Width</Label>
        <Input
          id="width"
          defaultValue="100%"
          className="col-span-2 h-8"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxWidth">Max. width</Label>
        <Input
          id="maxWidth"
          defaultValue="300px"
          className="col-span-2 h-8"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="height">Height</Label>
        <Input
          id="height"
          defaultValue="25px"
          className="col-span-2 h-8"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxHeight">Max. height</Label>
        <Input
          id="maxHeight"
          defaultValue="none"
          className="col-span-2 h-8"
        />
      </div>
    </div>
  </div>
</div>
<div className="container-xs flex items-center justify-center smsflex-col
 self-end sm:self-auto">
<span className="text-slate-400">This figma file was made with love byánbsp; </span>
<a href="#" className="text-slate-400 underline">
 @skirano
</a>
<div className="flex flex-1 items-center justify-end gap-[17px] sm:self-stretch">
<Button className="min-w-[56px] shadow-md">
Beta
</Button>
v1.0.0
</div>
</div>
</>
)}

export default App
