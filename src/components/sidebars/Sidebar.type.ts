interface SidebarItemContentList {
  text: string;
  pageUrl: string;
}

export interface SidebarItem {
  title: string;
  pageUrl: string;
  content?: string;
  contentList?: SidebarItemContentList[];
}
