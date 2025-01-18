function App(){
  return (
    <div>
      <InteractiveHoverButtonDemo/>
    </div>
  )
}

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function InteractiveHoverButtonDemo() {
  return <InteractiveHoverButton className="hover:bg-black hover:text-white">Hover Me</InteractiveHoverButton>;
}



export default App;