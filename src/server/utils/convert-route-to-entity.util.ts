const mapping: Record<string, string> = {
  guests: 'guest',
  invitations: 'invitation',
  organizations: 'organization',
  songs: 'song',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
