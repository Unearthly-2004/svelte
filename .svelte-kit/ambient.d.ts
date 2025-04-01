
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const TERM_PROGRAM_VERSION: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const FNM_ARCH: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const WSL_DISTRO_NAME: string;
	export const WAYLAND_DISPLAY: string;
	export const FNM_VERSION_FILE_STRATEGY: string;
	export const FNM_LOGLEVEL: string;
	export const LOGNAME: string;
	export const FNM_NODE_DIST_MIRROR: string;
	export const NAME: string;
	export const WSL_INTEROP: string;
	export const PULSE_SERVER: string;
	export const _: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const PATH: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const FNM_DIR: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const FNM_RESOLVE_ENGINES: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const npm_config_verify_deps_before_run: string;
	export const NODE_PATH: string;
	export const LESSCLOSE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const PWD: string;
	export const FNM_MULTISHELL_PATH: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const FNM_COREPACK_ENABLED: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const PNPM_HOME: string;
	export const HOSTTYPE: string;
	export const WSLENV: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		USER: string;
		npm_config_user_agent: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		TERM_PROGRAM_VERSION: string;
		VSCODE_IPC_HOOK_CLI: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		FNM_ARCH: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		WSL_DISTRO_NAME: string;
		WAYLAND_DISPLAY: string;
		FNM_VERSION_FILE_STRATEGY: string;
		FNM_LOGLEVEL: string;
		LOGNAME: string;
		FNM_NODE_DIST_MIRROR: string;
		NAME: string;
		WSL_INTEROP: string;
		PULSE_SERVER: string;
		_: string;
		npm_config_registry: string;
		TERM: string;
		PATH: string;
		npm_package_name: string;
		NODE: string;
		XDG_RUNTIME_DIR: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		LANG: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		FNM_DIR: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		FNM_RESOLVE_ENGINES: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		npm_config_verify_deps_before_run: string;
		NODE_PATH: string;
		LESSCLOSE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		PWD: string;
		FNM_MULTISHELL_PATH: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		FNM_COREPACK_ENABLED: string;
		WSL2_GUI_APPS_ENABLED: string;
		PNPM_HOME: string;
		HOSTTYPE: string;
		WSLENV: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
