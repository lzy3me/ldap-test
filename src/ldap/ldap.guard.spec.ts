import { LdapGuard } from './ldap.guard';

describe('LdapGuard', () => {
  it('should be defined', () => {
    expect(new LdapGuard()).toBeDefined();
  });
});
