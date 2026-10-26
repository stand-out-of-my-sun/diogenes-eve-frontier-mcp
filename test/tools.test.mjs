import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, "../tools_manifest.json");
const tools = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const toolMap = new Map(tools.map(t => [t.name, t]));

test("Manifest Integrity: eve-frontier declares exactly 14 tools", () => {
  assert.equal(tools.length, 14, "Tool count must match manifest");
});

test("Audit tool schema & hints: inspect_eve_assembly_state", () => {
  const tool = toolMap.get("inspect_eve_assembly_state");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: audit_eve_tribe_standings", () => {
  const tool = toolMap.get("audit_eve_tribe_standings");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: generate_eve_assembly_move", () => {
  const tool = toolMap.get("generate_eve_assembly_move");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: compile_eve_gate_acl", () => {
  const tool = toolMap.get("compile_eve_gate_acl");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: simulate_eve_sui_ptb", () => {
  const tool = toolMap.get("simulate_eve_sui_ptb");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: verify_eve_zklogin_character", () => {
  const tool = toolMap.get("verify_eve_zklogin_character");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: plan_eve_gate_route", () => {
  const tool = toolMap.get("plan_eve_gate_route");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: optimize_eve_node_power", () => {
  const tool = toolMap.get("optimize_eve_node_power");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: simulate_eve_capacitor_siege", () => {
  const tool = toolMap.get("simulate_eve_capacitor_siege");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: monitor_eve_constellation_fuel", () => {
  const tool = toolMap.get("monitor_eve_constellation_fuel");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: quote_eve_ssu_market", () => {
  const tool = toolMap.get("quote_eve_ssu_market");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: find_eve_ssu_arbitrage", () => {
  const tool = toolMap.get("find_eve_ssu_arbitrage");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: analyze_eve_killmail_threats", () => {
  const tool = toolMap.get("analyze_eve_killmail_threats");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: prioritize_eve_turret_targets", () => {
  const tool = toolMap.get("prioritize_eve_turret_targets");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

