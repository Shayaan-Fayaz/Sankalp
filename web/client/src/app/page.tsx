import Login from "@/components/login"
import Register from "@/components/registration/register"
import { H1 } from "@/components/ui/typography"
import { MAIN_EVENT_NAME } from "@/lib/constants"
import { FormState, SearchParams } from "@/lib/types"
import Link from "next/link"

interface HomePageProps {
  searchParams: SearchParams
}

export default function HomePage({ searchParams }: HomePageProps) {
  const state = (searchParams.state as FormState) || "register"
  return (
    <main className="container mx-auto px-8 lg:px-20 xl:px-24 py-12">
      {state === "login" ? (
        <>
          <H1 className="lg:text-9xl text-center mb-8">{MAIN_EVENT_NAME}</H1>
          <Login />
        </>
      ) : state === "register" ? (
        <Register />
      ) : (
        <div className="text-center ">
          <p className="text-2xl">Haha! Caught you manipulating the URL</p>
          <p className="mt-2">
            <Link
              href={`?${new URLSearchParams({ state: "register" })}`}
              className="underline underline-offset-2"
            >
              Click here
            </Link>{" "}
            to go back to registering.
          </p>
        </div>
      )}
    </main>
  )
}
