import Navbar from "./myComponents/Navbar"
import Hero from "./myComponents/Hero"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

export default App
