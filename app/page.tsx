import { redirect } from "next/navigation";

export default function Home() {
  // Step 1: to show login is not logged in else the dashboard
  redirect("/login");
}
