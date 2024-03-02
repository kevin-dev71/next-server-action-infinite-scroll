'use client'
import { User } from '@/types/user'
import { useEffect, useState } from 'react'
import { getUsers } from '@/actions/getUsers'
import { useInView } from 'react-intersection-observer'
import UserCard from '@/components/user-card'

type UserListProps = {
  initialUsers: User[]
}

const NUMBER_OF_USERS_TO_FETCH = 10

export default function UserList({ initialUsers }: UserListProps) {
  const [offset, setOffset] = useState(NUMBER_OF_USERS_TO_FETCH)
  const [users, setUsers] = useState<User[]>(initialUsers)
  const { ref, inView } = useInView()

  const loadMoreUsers = async () => {
    const apiUsers = await getUsers(offset, NUMBER_OF_USERS_TO_FETCH)
    setUsers([...users, ...apiUsers])
    setOffset(offset + NUMBER_OF_USERS_TO_FETCH)
  }

  useEffect(() => {
    if (inView) {
      loadMoreUsers()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <>
    <div className='flex flex-col gap-3 min-h-screen'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      
    </div>
    <div className='mt-[100px] bg-slate-400' ref={ref}>
    Loading...
  </div>
  {/* <button onClick={loadMoreUsers}>Load more</button> */}</>
  )
}
