export const LDAPServerCfg = (): Record<string, any> => {
  const server: Record<string, any> = {
    url: process.env.LDAP_ADDR,
    bindDN: process.env.BIND_DN,
    searchBase: process.env.SEARCH_BASE,
    searchFilter: process.env.SEARCH_FILTER,
  };

  process.env.BIND_CREDENTIALS &&
    (server.bindCredentials = process.env.BIND_CREDENTIALS);
  const searchAttr: string[] | undefined = process.env.SEARCH_ATTR.split(",");
  searchAttr && (server.searchAttributes = searchAttr);

  return server;
};
