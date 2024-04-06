interface NavLink {
    label: string;
    url: string;
    target?: "_blank" | "_parent" | "_self" | "_top";
}

interface NavLinkGroup {
    title?: string;
    links: NavLink[];
}