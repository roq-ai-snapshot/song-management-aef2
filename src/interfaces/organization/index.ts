import { GuestInterface } from 'interfaces/guest';
import { InvitationInterface } from 'interfaces/invitation';
import { SongInterface } from 'interfaces/song';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  guest?: GuestInterface[];
  invitation?: InvitationInterface[];
  song?: SongInterface[];
  user?: UserInterface;
  _count?: {
    guest?: number;
    invitation?: number;
    song?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
