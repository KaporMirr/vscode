/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Line } from './line.js';
import { RangedToken } from '../../rangedToken.js';
import { Range } from '../../../../../editor/common/core/range.js';
import { Position } from '../../../../../editor/common/core/position.js';

/**
 * A token that represent a `new line` with a `range`. The `range`
 * value reflects the position of the token in the original data.
 */
export class NewLine extends RangedToken {
	/**
	 * The underlying symbol of the `NewLine` token.
	 */
	public static readonly symbol: string = '\n';

	/**
	 * Create new `NewLine` token with range inside
	 * the given `Line` at the given `column number`.
	 */
	public static newOnLine(
		line: Line,
		atColumnNumber: number,
	): NewLine {
		const { range } = line;

		const startPosition = new Position(range.startLineNumber, atColumnNumber);
		const endPosition = new Position(range.startLineNumber, atColumnNumber + this.symbol.length);

		return new NewLine(
			Range.fromPositions(startPosition, endPosition),
		);
	}

	/**
	 * Check if this token is equal to another one.
	 */
	public equals(other: NewLine): boolean {
		return super.sameRange(other.range);
	}

	/**
	 * Returns a string representation of the token.
	 */
	public override toString(): string {
		return `newline${this.range}`;
	}
}
