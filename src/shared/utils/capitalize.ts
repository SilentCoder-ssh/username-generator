export default function capitalize (username: string): string {
    return username[0].toUpperCase() + username.slice(1)
}