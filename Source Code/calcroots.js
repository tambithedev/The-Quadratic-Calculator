function calcroots(a, b, c) {
	let D;
	D = (Math.pow(b, 2)) - (4 * a * c);
	let root1;
	let root2;
	root1 = ((0 - b) + Math.sqrt(D)) / (2 * a);
	root1 = ((0 - b) - Math.sqrt(D)) / (2 * a);
	const roots = [root1, root2];
	return roots;
}
