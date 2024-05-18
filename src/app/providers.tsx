// app/providers.tsx
//import { useRouter } from "next/navigation"
import { NextUIProvider } from "@nextui-org/system"

export function Providers({children}: { children: React.ReactNode }) {
  //const router = useRouter();
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}