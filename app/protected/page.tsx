import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full bg-violet-950 flex flex-col gap-12">
      <h2 className="mb-4 text-xl md:text-2xl">Inicio</h2>

      {/* <div>
        <FetchDataSteps />
      </div> */}
    </div>
  );
}
