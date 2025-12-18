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
      <a href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>

      <Stack>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data</p>}
        {data && (
          <Card>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
            </CardHeader>
            <CardContent>{data.body}</CardContent>
          </Card>
        )}

        <Button>Hola señor sergio, estamos en deply!</Button>
      </Stack>
    </div>
  )
}
