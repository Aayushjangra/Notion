"use client";


import { useConvexAuth } from "convex/react"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner"
import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"

export const Heading =() => {
    const {isAuthenticated,isLoading} = useConvexAuth()


    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl "> Your Ideas, Document, & Plans. Unified . Welcome to <span className="underling"> Notion</span></h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">Notion is the connected workspace where <br/>
            better, faster work happens.
            </h3>
            {isLoading && <div className="w-full flex justify-center items-center">
        <Spinner size='lg'/>
        </div>}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Enter Notion
            <ArrowRight className="w-4 h-4 ml-2"/>
          </Link>
      </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode='modal'>
            <Button>
              Get Notion Free
              <ArrowRight className="w-4 h-4 ml-2"/>
            </Button>
          </SignInButton>
        )}
        </div>
    )
}