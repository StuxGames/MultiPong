const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","godotengine.png","Pong with GDScript.audio.worklet.js","Pong with GDScript.js","Pong with GDScript.manifest.json","Pong with GDScript.pck","Pong with GDScript.service.worker.js","Pong with GDScript.wasm","robots.txt"]),
	mimeTypes: {".png":"image/png",".js":"text/javascript",".json":"application/json",".wasm":"application/wasm",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CGQtANHu.js","app":"_app/immutable/entry/app.qS55IAtX.js","imports":["_app/immutable/entry/start.CGQtANHu.js","_app/immutable/chunks/entry.C9QkjlEA.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.qS55IAtX.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.3yJoD6ZP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CpRhnoWs.js')),
			__memo(() => import('./chunks/1-CiXWohyu.js')),
			__memo(() => import('./chunks/2-Bgpiing9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/discord",
				pattern: /^\/discord\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-MjwuUoIu.js'))
			},
			{
				id: "/discord/token",
				pattern: /^\/discord\/token\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Cl8MxVf1.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
