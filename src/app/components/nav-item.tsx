
export default function NavItem(name: string) {
    return (
        <a href={name.toLowerCase()}>{name.toLowerCase().charAt(0).toUpperCase()}</a>
    )
}