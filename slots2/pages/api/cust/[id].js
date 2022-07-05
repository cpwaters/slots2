import users from '../../../data/user-data.json';

export default function usersHandler({ query: { id } }, res) {
  const filtered = users.filter((u) => u.id == id)

  console.log('filtered: ', filtered)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}