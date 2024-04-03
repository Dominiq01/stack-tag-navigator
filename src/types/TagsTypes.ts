export type TagItem = {
  has_synonyms?: boolean;
  is_moderator_only?: boolean;
  is_required?: boolean;
  count: number;
  name: string;
  collectives?: Collective[];
};

type Collective = {
  tags: string[];
  external_links: ExternalLink[];
  description: string;
  link: string;
  name: string;
  slug: string;
};

type ExternalLink = {
  type: string;
  link: string;
};
