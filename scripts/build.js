#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔧 Gerando Prisma Client...');
try {
  execSync('prisma generate', { stdio: 'inherit' });
  console.log('✅ Prisma Client gerado com sucesso!');
} catch (error) {
  console.error('❌ Erro ao gerar Prisma Client:', error.message);
  process.exit(1);
}

console.log('🏗️ Construindo aplicação Next.js...');
try {
  execSync('next build', { stdio: 'inherit' });
  console.log('✅ Build concluído com sucesso!');
} catch (error) {
  console.error('❌ Erro no build:', error.message);
  process.exit(1);
}
