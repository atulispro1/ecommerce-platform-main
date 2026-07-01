function getServerEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getSanityWriteToken() {
  return process.env.SANITY_API_WRITE_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN;
}

export { getSanityWriteToken, getServerEnv };
