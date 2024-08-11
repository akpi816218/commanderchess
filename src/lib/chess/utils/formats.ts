import { Commander } from '@/lib/chess/types';

export function fmtCommanderName(commander: Commander): string {
	if (commander === Commander.Castle) return 'Castle, the Original';
	else
		return `${Object.keys(Commander).find(v => v === commander)}, Commander of ${commander}`;
}
