import { twc } from 'react-twc'
import useSWR from 'swr'
import preactLogo from '../../assets/preact.svg'
import { Button } from '../../components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'

const Stack = twc.div`flex flex-col gap-4`

export function Home() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts/1',
    (url) => fetch(url).then((res) => res.json()),
  )

  return (
    <div class="home">
      <h1>BANANO LE DICEN A SILVA<h1/>
    </div>
  )
}
