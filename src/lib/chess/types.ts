export enum Commander {
	Calamity = 'Destruction',
	Castle = 'Original',
	Equus = 'Code',
	Peep = 'Peeps',
	Shadow = 'Mathematics',
	Toasty = 'Bagels'
}

export enum BasicPieceType {
	Cavalry = 'Cavalry',
	Captain = 'Captain',
	Support = 'Support',
	Champion = 'Champion',
	Commander = 'Commander'
}

export interface PieceType {
	commander: Commander;
	basic: BasicPieceType;
	subtype?: number;
}

export interface PieceData {
	type: PieceType;
	owner: PlayerIndex;
	position: Position;
}

export interface Position {
	x: number;
	y: number;
}

export type Vector = Position;

export type PlayerIndex = 0 | 1;

export enum MoveType {
	Knight = 'Knight',
	King = 'King',
	Queen = 'Queen',
	Rook = 'Rook',
	Bishop = 'Bishop',
	Pawn = 'Pawn'
}
