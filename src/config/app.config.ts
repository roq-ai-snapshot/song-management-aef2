interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Editor', 'Viewer'],
  tenantName: 'Organization',
  applicationName: 'Song management platform',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
