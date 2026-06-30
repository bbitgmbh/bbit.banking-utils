// Pin the timezone so date-dependent formatting is deterministic across machines/CI.
process.env.TZ = 'UTC';
