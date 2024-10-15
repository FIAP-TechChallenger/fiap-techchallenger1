import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Aside from "../../components/Aside";
import Saldo from "../../components/Saldo";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function transferencias() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <p>Bem-vindo à página de transferencias</p>
      <Aside />
      <Saldo />
    </div>
  );
}
