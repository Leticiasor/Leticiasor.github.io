const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{CentrarEm: 0},
	{Giovanno: 0},
	{Sólido: 0},
	{chao: 0},
	{Céu: 0}
];

self.InstanceType = {
	Giovanno: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	Céu: class extends self.ISpriteInstance {}
}