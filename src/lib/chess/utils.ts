import { MoveType, Position, Vector } from './types';

export function transformPosition(
	position: Position,
	transform: Vector
): Position {
	return {
		x: position.x + transform.x,
		y: position.y + transform.y
	};
}

export function getPossibleDestinations(
	position: Position,
	...types: MoveType[]
): Position[] {
	const results: Position[] = [];
	for (const moveType of types) {
		switch (moveType) {
			case MoveType.Knight: {
				const { x, y } = position;
				const {
					xPlusOK: xPlusOK1,
					xMinusOK: xMinusOK1,
					yPlusOK: yPlusOK1,
					yMinusOK: yMinusOK1
				} = getOkays(position, 1);
				const {
					xPlusOK: xPlusOK2,
					xMinusOK: xMinusOK2,
					yPlusOK: yPlusOK2,
					yMinusOK: yMinusOK2
				} = getOkays(position, 2);
				if (xPlusOK1 && yPlusOK2)
					results.push(transformPosition(position, { x: 1, y: 2 }));
				if (xPlusOK1 && yMinusOK2)
					results.push(transformPosition(position, { x: 1, y: -2 }));
				if (xMinusOK1 && yPlusOK2)
					results.push(transformPosition(position, { x: -1, y: 2 }));
				if (xMinusOK1 && yMinusOK2)
					results.push(transformPosition(position, { x: -1, y: -2 }));
				if (xPlusOK2 && yPlusOK1)
					results.push(transformPosition(position, { x: 2, y: 1 }));
				if (xPlusOK2 && yMinusOK1)
					results.push(transformPosition(position, { x: 2, y: -1 }));
				if (xMinusOK2 && yPlusOK1)
					results.push(transformPosition(position, { x: -2, y: 1 }));
				if (xMinusOK2 && yMinusOK1)
					results.push(transformPosition(position, { x: -2, y: -1 }));
				break;
			}

			case MoveType.King: {
				const { xPlusOK, xMinusOK, yPlusOK, yMinusOK } = getOkays(position, 1);
				if (xPlusOK) results.push(transformPosition(position, { x: 1, y: 0 }));
				if (xMinusOK)
					results.push(transformPosition(position, { x: -1, y: 0 }));
				if (yPlusOK) results.push(transformPosition(position, { x: 0, y: 1 }));
				if (yMinusOK)
					results.push(transformPosition(position, { x: 0, y: -1 }));
				if (yPlusOK && xPlusOK)
					results.push(transformPosition(position, { x: 1, y: 1 }));
				if (yPlusOK && xMinusOK)
					results.push(transformPosition(position, { x: -1, y: 1 }));
				if (yMinusOK && xPlusOK)
					results.push(transformPosition(position, { x: 1, y: -1 }));
				break;
			}

			case MoveType.Queen: {
				for (let i = 1; i <= 7; i++) {
					const { xPlusOK, xMinusOK, yPlusOK, yMinusOK } = getOkays(
						position,
						i
					);
					if (xPlusOK)
						results.push(transformPosition(position, { x: i, y: 0 }));
					if (xMinusOK)
						results.push(transformPosition(position, { x: -i, y: 0 }));
					if (yPlusOK)
						results.push(transformPosition(position, { x: 0, y: i }));
					if (yMinusOK)
						results.push(transformPosition(position, { x: 0, y: -i }));
					if (yPlusOK && xPlusOK)
						results.push(transformPosition(position, { x: i, y: i }));
					if (yPlusOK && xMinusOK)
						results.push(transformPosition(position, { x: -i, y: i }));
					if (yMinusOK && xPlusOK)
						results.push(transformPosition(position, { x: i, y: -i }));
					if (yMinusOK && xMinusOK)
						results.push(transformPosition(position, { x: -i, y: -i }));
				}
				break;
			}

			case MoveType.Rook: {
				for (let i = 1; i <= 7; i++) {
					const { xPlusOK, xMinusOK, yPlusOK, yMinusOK } = getOkays(
						position,
						i
					);
					if (xPlusOK)
						results.push(transformPosition(position, { x: i, y: 0 }));
					if (xMinusOK)
						results.push(transformPosition(position, { x: -i, y: 0 }));
					if (yPlusOK)
						results.push(transformPosition(position, { x: 0, y: i }));
					if (yMinusOK)
						results.push(transformPosition(position, { x: 0, y: -i }));
				}
				break;
			}

			case MoveType.Bishop: {
				for (let i = 1; i <= 7; i++) {
					const { xPlusOK, xMinusOK, yPlusOK, yMinusOK } = getOkays(
						position,
						i
					);
					if (yPlusOK && xPlusOK)
						results.push(transformPosition(position, { x: i, y: i }));
					if (yPlusOK && xMinusOK)
						results.push(transformPosition(position, { x: -i, y: i }));
					if (yMinusOK && xPlusOK)
						results.push(transformPosition(position, { x: i, y: -i }));
					if (yMinusOK && xMinusOK)
						results.push(transformPosition(position, { x: -i, y: -i }));
				}
				break;
			}

			case MoveType.Pawn: {
				const { x, y } = position;
				const { xPlusOK, xMinusOK, yPlusOK } = getOkays(position, 1);
				// if (y === 1 && yPlusOK)
				// 	results.push(transformPosition(position, { x: 0, y: 2 }));
				if (yPlusOK) results.push(transformPosition(position, { x: 0, y: 1 }));
				if (xPlusOK && yPlusOK)
					results.push(transformPosition(position, { x: 1, y: 1 }));
				if (xMinusOK && yPlusOK)
					results.push(transformPosition(position, { x: -1, y: 1 }));
				break;
			}
		}

		results.push();
	}
	return results;
}

export function isPositionValid(position: Position): boolean {
	return (
		position.x >= 0 && position.x <= 7 && position.y >= 0 && position.y <= 7
	);
}

export function getOkays(
	pos: Position,
	i: number
): {
	xPlusOK: boolean;
	xMinusOK: boolean;
	yPlusOK: boolean;
	yMinusOK: boolean;
} {
	return {
		xPlusOK: pos.x + i <= 7,
		xMinusOK: pos.x - i >= 0,
		yPlusOK: pos.y + i <= 7,
		yMinusOK: pos.y - i >= 0
	};
}
