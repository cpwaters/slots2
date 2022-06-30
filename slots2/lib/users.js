import useSWR from 'swr'
import fetch from 'unfetch'

const fetcher = url => fetch(url).then(r => r.json())

export const useUser = () => {
    const { data, error } = useSWR(`/api/user`, fetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}