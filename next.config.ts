/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import type { NextConfig } from "next";
import "./src/env.js";

import { withWorkflow } from "workflow/next";

const config: NextConfig = {};

export default withWorkflow(config);
