import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Importa o cliente Prisma para interagir com o banco de dados

/**
 * Função para lidar com requisições GET
 * Objetivo: Buscar todos os times do banco de dados.
 */
export async function GET() {
  try {
    // 1. Usa o Prisma para buscar todos os registros na tabela 'times'.
    // O 'findMany()' retorna uma lista de todos os times encontrados.
    const times = await prisma.times.findMany();

    // 2. Retorna os times encontrados como uma resposta JSON com status 200 (OK).
    // NextResponse.json() é a forma padrão do Next.js de criar respostas de API.
    return NextResponse.json(times, { status: 200 });

  } catch (error) {
    // 3. Se ocorrer qualquer erro no bloco 'try', o 'catch' é executado.
    console.error("Erro ao buscar times:", error); // Mostra o erro no console do servidor para depuração.
    
    // Retorna uma mensagem de erro com status 500 (Erro Interno do Servidor).
    return NextResponse.json({ message: "Não foi possível buscar os times." }, { status: 500 });
  }
}

/**
 * Função para lidar com requisições POST
 * Objetivo: Criar um novo time no banco de dados.
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // 1. Mudança aqui: Pegamos apenas o nome_time do corpo da requisição.
    const { nome_time } = body;

    // 2. Mudança aqui: Validamos apenas se o nome_time foi enviado.
    if (!nome_time) {
      return NextResponse.json({ message: "Nome do time é obrigatório." }, { status: 400 });
    }

    // 3. Mudança aqui: Criamos o time no banco de dados apenas com o nome_time.
    const novoTime = await prisma.times.create({
      data: {
        nome_time,
      },
    });

    return NextResponse.json(novoTime, { status: 201 });

  } catch (error) {
    console.error("Erro ao criar time:", error);
    return NextResponse.json({ message: "Não foi possível criar o time." }, { status: 500 });
  }
}