// src/lib/baserow.ts
const BASEROW_TOKEN = 'V4PCu4Asm86jRC1xjy1BWHZX0y7aM0mB'; // Substitua 'token' pelo seu token real
const TABLE_ID = 509899; // ID da nova tabela

export async function getCategoriesData() {
  const url = `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Token ${BASEROW_TOKEN}`,
    },
  });

  if (!res.ok) {
    console.error('Erro ao buscar dados do Baserow:', res.status, await res.text());
    return [];
  }

  const data = await res.json();
  return data.results; // Os dados vêm dentro de 'results'
}
