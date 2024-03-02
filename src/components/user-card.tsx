import { User } from "@/types/user"

function UserCard({ user }: {user: User}) {
  return (
    <div className="grow">{user.email}</div>
  )
}
export default UserCard
