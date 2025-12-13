import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// Avoid importing @prisma/client at module load so builds don't require
// generated client types to exist. Load lazily at runtime instead.
const globalForPrisma = globalThis as unknown as { prisma?: any }

export function getPrisma(): any {
  if (globalForPrisma.prisma) return globalForPrisma.prisma

  // Loaded with require to keep it runtime-only; types are optional here.
  const { PrismaClient } = require('@prisma/client')
  const client = new PrismaClient()
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client
  }
  return client
}
