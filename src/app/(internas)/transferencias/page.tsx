// app/(internas)/transacoes/page.js
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Aside from "../../components/Aside";
import Saldo from "../../components/Saldo";

export default async function transferencias() {
  const session = await getServerSession();

  // Redireciona o usuário para a página de login se não houver sessão
  if (!session) {
    redirect("/login");
    return null;
  }

  return (
    <div>
      <p>Bem-vindo à página de transferencias</p>
      <Aside />
      <Saldo />
    </div>
  );
}