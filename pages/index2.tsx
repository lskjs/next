import Link from 'next/link'
import Button from '@lskjs/button'
import {MainLayout} from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      <h1>Hello Next.JS!</h1>
      <p><Link href={'/about'}><a>About</a></Link></p>
      <p><Link href="/posts"><a>Posts</a></Link></p>
      <p><Button paint="primary">@lskjs/next</Button></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </MainLayout>
  )
}
