export default function firstLetterUppercase (username: string): string | void {
    const upperUsername = username[0].toUpperCase() + username.slice(1)
    return upperUsername
}