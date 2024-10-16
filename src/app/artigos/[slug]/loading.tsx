import { Skeleton } from '@/components/ui/skeleton'

export default async function Loading() {
  return (
    <main className="min-h-dvh">
      <section className="min-h-80 bg-zinc-100 py-6">
        <div className="container flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-y-2">
            <Skeleton className="h-10 w-full max-w-60 bg-zinc-200" />
            <Skeleton className="h-6 w-full max-w-60 bg-zinc-200" />
          </div>
          <div className="relative h-80 w-full max-w-96">
            <Skeleton className="h-full bg-zinc-200" />
          </div>
        </div>
      </section>
      <section className="container my-8">
        <div className="prose prose-base max-w-none space-y-2">
          <Skeleton className="h-6 w-full bg-zinc-200" />
          <Skeleton className="h-6 w-[90%] bg-zinc-200" />
          <Skeleton className="h-6 w-full bg-zinc-200" />
          <Skeleton className="h-6 w-[80%] bg-zinc-200" />
          <Skeleton className="h-6 w-full bg-zinc-200" />
          <Skeleton className="h-6 w-[80%] bg-zinc-200" />
          <Skeleton className="h-6 w-full bg-zinc-200" />
          <Skeleton className="h-6 w-[90%] bg-zinc-200" />
          <Skeleton className="h-6 w-[90%] bg-zinc-200" />
          <Skeleton className="h-6 w-full bg-zinc-200" />
          <Skeleton className="h-6 w-full bg-zinc-200" />
          <Skeleton className="h-6 w-full bg-zinc-200" />
        </div>
      </section>
    </main>
  )
}
