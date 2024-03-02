import { getUsers } from '@/actions/getUsers'
import UserList from '@/components/user-list'

const INITIAL_NUMBER_OF_USERS = 10

export default async function Home() {
  const initialUsers = await getUsers(0, INITIAL_NUMBER_OF_USERS)

  return <UserList initialUsers={initialUsers} />
}
