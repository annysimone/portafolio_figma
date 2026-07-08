#!/usr/bin/env node
/**
 * Sincroniza el alias personalizado al deploy de producción actual.
 * Ejecutar tras cada deploy a Vercel.
 */
import { execSync } from 'node:child_process';

const PRIMARY_ALIAS = 'portafolio-figma-nu.vercel.app';
const CUSTOM_ALIAS = 'annymamaniportafolioux.vercel.app';

console.log(`Syncing ${CUSTOM_ALIAS} → ${PRIMARY_ALIAS}...`);
execSync(`npx vercel alias set ${PRIMARY_ALIAS} ${CUSTOM_ALIAS}`, {
  stdio: 'inherit',
});
console.log('Done. Verify with: npx vercel alias ls');
